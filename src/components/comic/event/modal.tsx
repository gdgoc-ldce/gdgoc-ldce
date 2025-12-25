"use client";

import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Badge } from "./primitives";
import {
  GOOGLE_COLORS,
  type GoogleColor,
  type EventDetail,
  type EventHighlight,
} from "./types";

export interface EventModalData {
  id: string;
  title: string;
  eventType: string;
  description: string;
  details: EventDetail[];
  highlights?: EventHighlight[];
  color: GoogleColor;
  extraContent?: ReactNode;
}

interface EventModalProps {
  event: EventModalData | null;
  isOpen: boolean;
  onClose: () => void;
}

function ModalBackdrop({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    />
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border-3 border-gray-800 bg-white text-xl font-bold text-gray-800 shadow-[3px_3px_0_0_#1f2937] transition-all hover:scale-105 hover:shadow-[4px_4px_0_0_#1f2937] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_0_#1f2937]"
      aria-label="Close modal"
    >
      ✕
    </button>
  );
}

function DetailsList({ details }: { details: EventDetail[] }) {
  return (
    <section className="mb-6 rounded-lg border-3 border-gray-800 bg-gray-50 p-4 shadow-[4px_4px_0_0_#1f2937]">
      <h3 className="font-title mb-3 flex items-center gap-2 text-lg font-bold text-gray-800">
        <span className="text-xl">📋</span> Key Details
      </h3>
      <dl className="grid grid-cols-2 gap-3 text-sm">
        {details.map((detail, i) => (
          <div key={i}>
            <dt className="inline font-semibold text-gray-500">
              {detail.label}:
            </dt>{" "}
            <dd className="inline text-gray-800">{detail.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function HighlightsList({
  highlights,
  color,
}: {
  highlights: EventHighlight[];
  color: string;
}) {
  return (
    <section className="mb-6">
      <h3 className="font-title mb-3 flex items-center gap-2 text-lg font-bold text-gray-800">
        <span className="text-xl">✨</span> Highlights
      </h3>
      <ul className="space-y-2">
        {highlights.map((highlight, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-gray-700">{highlight.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function EventModal({
  event,
  isOpen,
  onClose,
}: EventModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (typeof window === "undefined") return null;

  const bgColor = event ? GOOGLE_COLORS[event.color] : GOOGLE_COLORS.blue;

  return createPortal(
    <AnimatePresence>
      {isOpen && event && (
        <>
          <ModalBackdrop onClose={onClose} />

          <motion.article
            initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50, rotateX: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 m-auto flex max-h-[85vh] max-w-2xl flex-col overflow-hidden rounded-xl border-4 border-gray-800 bg-white shadow-[8px_8px_0_0_#1f2937] md:inset-8"
            style={{ perspective: "1000px" }}
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <header
              className="relative shrink-0 border-b-4 border-gray-800 p-4 md:p-6"
              style={{ backgroundColor: `${bgColor}15` }}
            >
              <CloseButton onClick={onClose} />
              <h2
                id="modal-title"
                className="font-title pr-12 text-2xl leading-tight font-bold tracking-wide text-gray-900 md:text-3xl"
              >
                {event.title}
              </h2>
              <Badge color={event.color}>{event.eventType}</Badge>
            </header>

            <div
              className="flex-1 overflow-y-auto overscroll-contain p-4 md:p-6"
              data-lenis-prevent
            >
              <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
                {event.description}
              </p>

              <DetailsList details={event.details} />

              {event.highlights && event.highlights.length > 0 && (
                <HighlightsList highlights={event.highlights} color={bgColor} />
              )}

              {event.extraContent && (
                <div className="mt-6 border-t-2 border-dashed border-gray-300 pt-6">
                  {event.extraContent}
                </div>
              )}
            </div>

            <footer
              className="shrink-0 border-t-4 border-gray-800 px-4 py-3 text-center text-xs font-semibold text-gray-500"
              style={{ backgroundColor: `${bgColor}10` }}
            >
              🎉 Thanks for being part of our journey!
            </footer>
          </motion.article>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
