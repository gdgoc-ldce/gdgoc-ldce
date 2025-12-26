"use client";

import { motion } from "framer-motion";
import { GOOGLE_COLORS, type GoogleColor } from "./types";

export interface TimelineCardData {
  id: string;
  title: string;
  eventType: string;
  description: string;
  date: string;
  color: GoogleColor;
  highlightsCount?: number;
}

interface TimelineCardProps {
  event: TimelineCardData;
  index: number;
  onClick: () => void;
}

function NotebookHoles({ color }: { color: string }) {
  return (
    <>
      <div
        className="absolute top-6 left-2 h-5 w-5 rounded-full border-2 shadow-inner"
        style={{ borderColor: color, backgroundColor: `${color}20` }}
      />
      <div
        className="absolute top-1/2 left-2 h-5 w-5 -translate-y-1/2 rounded-full border-2 shadow-inner"
        style={{ borderColor: color, backgroundColor: `${color}20` }}
      />
      <div
        className="absolute bottom-6 left-2 h-5 w-5 rounded-full border-2 shadow-inner"
        style={{ borderColor: color, backgroundColor: `${color}20` }}
      />
    </>
  );
}

function NotebookLines({ color }: { color: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-lg">
      <div
        className="absolute top-0 left-10 h-full w-0.5 md:left-12"
        style={{ backgroundColor: `${color}40` }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 27px, #e5e7eb 28px)",
          backgroundSize: "100% 28px",
        }}
      />
      <NotebookHoles color={color} />
    </div>
  );
}

export default function TimelineCard({
  event,
  index,
  onClick,
}: TimelineCardProps) {
  const colors = Object.values(GOOGLE_COLORS);
  const accentColor = colors[index % colors.length] ?? GOOGLE_COLORS.blue;
  const rotation = index % 2 === 0 ? -1 : 1;

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.button
      whileHover={{ scale: 1.02, rotate: 0 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative h-[420px] w-[320px] shrink-0 cursor-pointer text-left md:h-[480px] md:w-[380px]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <article className="absolute inset-0 overflow-hidden rounded-lg border-4 border-gray-800 bg-white shadow-[8px_8px_0_0_#1f2937] transition-shadow group-hover:shadow-[10px_10px_0_0_#1f2937]">
        <NotebookLines color={accentColor} />

        <div className="relative z-10 flex h-full flex-col p-4 pl-14 md:p-5 md:pl-16">
          <time
            className="mb-3 inline-block self-start rounded-md border-2 border-gray-800 px-2 py-1 text-xs font-bold text-white shadow-[2px_2px_0_0_#1f2937]"
            style={{ backgroundColor: accentColor }}
          >
            {formattedDate}
          </time>

          <h3 className="font-title mb-2 line-clamp-2 text-xl leading-tight font-bold tracking-wide text-gray-900 md:text-2xl">
            {event.title}
          </h3>

          <p className="mb-3 line-clamp-1 text-xs font-semibold tracking-wider text-gray-500 uppercase">
            {event.eventType}
          </p>

          <p className="mb-4 line-clamp-4 flex-1 text-sm leading-relaxed text-gray-600">
            {event.description}
          </p>

          {event.highlightsCount && event.highlightsCount > 0 && (
            <p className="mb-4 text-xs text-gray-400">
              ✨ {event.highlightsCount} highlights inside
            </p>
          )}

          <div
            className="mt-auto flex items-center gap-2 rounded-lg border-3 border-gray-800 px-4 py-3 text-sm font-bold transition-all group-hover:gap-3"
            style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
          >
            <span>👆 Click to read more</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </div>

        <div
          className="pointer-events-none absolute right-0 bottom-0 h-12 w-12"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${accentColor}20 50%, ${accentColor}30 100%)`,
            borderTopLeftRadius: "100%",
          }}
        />

        <div
          className="font-title absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full border-3 border-gray-800 text-lg font-bold text-white shadow-[2px_2px_0_0_#1f2937]"
          style={{ backgroundColor: accentColor }}
        >
          {index + 1}
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at center, ${accentColor}08 0%, transparent 70%)`,
          }}
        />
      </article>
    </motion.button>
  );
}
