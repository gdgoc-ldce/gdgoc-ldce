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

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export interface EventImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface HackathonData {
  preMentoringSessions: {
    title: string;
    speaker: string;
    description: string;
  }[];
  evaluationCriteria: string[];
  winningTeams: {
    rank: string;
    teamName: string;
    lead: string;
    members: string[];
  }[];
}

export interface EventModalData {
  id: string;
  title: string;
  eventType: string;
  description: string;
  details: EventDetail[];
  highlights?: EventHighlight[];
  images?: EventImage[];
  color: GoogleColor;
  hackathonData?: HackathonData;
  studyJamData?: any;
  extraContent?: ReactNode;
  linkedinUrl?: string;
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
      className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
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
      <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
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

function ImageGallery({ images }: { images: EventImage[] }) {
  return (
    <section className="mb-6">
      <h3 className="font-title mb-3 flex items-center gap-2 text-lg font-bold text-gray-800">
        <span className="text-xl">🖼️</span> Gallery
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, i) => (
          <figure
            key={i}
            className="group overflow-hidden rounded-lg border-3 border-gray-800 bg-gray-100 shadow-[4px_4px_0_0_#1f2937] transition-transform hover:-translate-y-1"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-40 w-full object-cover transition-transform group-hover:scale-105"
            />
            {image.caption && (
              <figcaption className="p-2 text-center text-xs font-semibold text-gray-600">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

function HackathonInfo({
  data,
  color,
}: {
  data: HackathonData;
  color: string;
}) {
  return (
    <div className="space-y-8 border-t-2 border-dashed border-gray-300 pt-6">
      {/* Mentoring Sessions */}
      <section>
        <h3 className="font-title mb-4 flex items-center gap-2 text-lg font-bold text-gray-800">
          <span className="text-xl">🎓</span> Pre-Mentoring Sessions
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {data.preMentoringSessions.map((session, i) => (
            <div
              key={i}
              className="rounded-lg border-2 border-gray-800 bg-gray-50 p-3 shadow-[3px_3px_0_0_#1f2937]"
            >
              <h4 className="font-bold text-gray-900">{session.title}</h4>
              <p className="mb-2 text-xs font-semibold text-gray-500">
                By {session.speaker}
              </p>
              <p className="text-sm text-gray-700">{session.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section>
        <h3 className="font-title mb-3 flex items-center gap-2 text-lg font-bold text-gray-800">
          <span className="text-xl">⚖️</span> Evaluation Criteria
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.evaluationCriteria.map((crit, i) => (
            <span
              key={i}
              className="rounded-full border-2 border-gray-800 bg-white px-3 py-1 text-xs font-bold text-gray-800 shadow-[2px_2px_0_0_#1f2937]"
            >
              {crit}
            </span>
          ))}
        </div>
      </section>

      {/* Winning Teams */}
      <section>
        <h3 className="font-title mb-4 flex items-center gap-2 text-lg font-bold text-gray-800">
          <span className="text-xl">🏆</span> Winning Teams
        </h3>
        <div className="flex flex-col gap-4">
          {data.winningTeams.map((team, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg border-3 border-gray-800 bg-white p-4 shadow-[4px_4px_0_0_#1f2937]"
            >
              {/* Background accent */}
              <div
                className="absolute -top-2 -right-2 h-20 w-20 rounded-full opacity-20"
                style={{ backgroundColor: color }}
              />

              <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
                  </span>
                  <div>
                    <span className="block text-xs font-bold tracking-wider text-gray-500 uppercase">
                      {team.rank}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">
                      {team.teamName}
                    </h4>
                  </div>
                </div>
                <div className="mt-2 text-sm sm:mt-0 sm:text-right">
                  <span className="font-semibold text-gray-600">Lead: </span>
                  <span className="text-gray-900">{team.lead}</span>
                </div>
              </div>

              <div className="rounded bg-gray-50 p-2 text-sm text-gray-700">
                <span className="font-semibold text-gray-500">Members: </span>
                {team.members.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function EventModal({
  event,
  isOpen,
  onClose,
}: EventModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (typeof window === "undefined") return null;

  const bgColor = event ? GOOGLE_COLORS[event.color] : GOOGLE_COLORS.blue;

  return createPortal(
    <AnimatePresence>
      {isOpen && event && (
        <>
          <ModalBackdrop onClose={onClose} />

          <motion.article
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-[9999] m-auto flex max-h-[85vh] max-w-2xl flex-col overflow-hidden rounded-xl border-4 border-gray-800 bg-white shadow-[8px_8px_0_0_#1f2937] md:inset-8"
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
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

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-4 md:p-6">
              <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
                {event.description}
              </p>

              <DetailsList details={event.details} />

              {event.images && event.images.length > 0 && (
                <ImageGallery images={event.images} />
              )}

              {event.highlights && event.highlights.length > 0 && (
                <HighlightsList highlights={event.highlights} color={bgColor} />
              )}

              {event.hackathonData && (
                <HackathonInfo data={event.hackathonData} color={bgColor} />
              )}

              {event.extraContent && (
                <div className="mt-6 border-t-2 border-dashed border-gray-300 pt-6">
                  {event.extraContent}
                </div>
              )}
            </div>

            {/* Footer with Logic for LinkedIn Button */}
            <footer
              className="flex shrink-0 items-center justify-center border-t-4 border-gray-800 px-4 py-4"
              style={{ backgroundColor: `${bgColor}10` }}
            >
              {event.linkedinUrl ? (
                <a
                  href={event.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border-2 border-gray-800 bg-white px-5 py-2.5 font-bold text-gray-900 shadow-[3px_3px_0_0_#1f2937] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#1f2937] active:translate-y-0 active:shadow-[1px_1px_0_0_#1f2937]"
                >
                  <span
                    className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20"
                    style={{ backgroundColor: bgColor }}
                  />
                  <LinkedInIcon className="relative h-5 w-5 text-[#0077b5]" />
                  <span className="relative">View Event on LinkedIn</span>
                </a>
              ) : (
                <span className="text-xs font-semibold text-gray-500">
                  🎉 Thanks for being part of our journey!
                </span>
              )}
            </footer>
          </motion.article>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
