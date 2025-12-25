"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

export interface TimelinePageData {
  id: string;
  content: ReactNode;
}

interface EventTimelineProps {
  pages: TimelinePageData[];
  className?: string;
}

function ProgressTrack({ progress }: { progress: MotionValue<string> }) {
  return (
    <div className="absolute right-8 left-8 z-0 h-1 overflow-hidden rounded-full bg-gray-200">
      <motion.div
        className="h-full bg-linear-to-r from-blue-500 via-red-500 to-yellow-500"
        style={{ width: progress }}
      />
    </div>
  );
}

export default function EventTimeline({
  pages,
  className = "",
}: EventTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const calculateScrollRange = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(Math.max(0, trackWidth - viewportWidth + 100));
      }
    };

    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);
    return () => window.removeEventListener("resize", calculateScrollRange);
  }, [pages.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const x = useSpring(xRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const progressRaw = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progress = useSpring(progressRaw, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${Math.max(pages.length * 60, 200)}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="relative flex flex-1 items-center">
          <ProgressTrack progress={progress} />

          <motion.div
            ref={trackRef}
            className="relative z-10 flex items-center gap-10 px-8"
            style={{ x }}
          >
            <div className="w-[10vw] shrink-0" aria-hidden="true" />

            {pages.map((page, index) => (
              <motion.div
                key={page.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {page.content}
              </motion.div>
            ))}

            <div className="w-[30vw] shrink-0" aria-hidden="true" />
          </motion.div>
        </div>

        <p className="shrink-0 px-8 pb-6 text-center text-sm text-gray-400">
          Keep scrolling to explore all events
        </p>
      </div>
    </section>
  );
}
