"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ExpandingPanelProps {
  children?: ReactNode;
}

export function ExpandingPanel({ children }: ExpandingPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["70vh", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center"
    >
      <motion.div
        style={{ width, height, borderRadius }}
        className="sticky top-0 overflow-hidden border-4 border-gray-800 bg-white shadow-[8px_8px_0_0_#1f2937]"
      >
        {children}
      </motion.div>
    </section>
  );
}
