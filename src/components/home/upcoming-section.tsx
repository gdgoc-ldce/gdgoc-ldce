"use client";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function PastEventSection() {
  const router = useRouter();
  const pastels = ["#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA"];

  const renderWord = (word: string) =>
    word.split("").map((char, index) => {
      const bg = pastels[index % pastels.length];
      const rot = (Math.random() - 0.5) * 10;
      return (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 20, rotate: rot }}
          animate={{ opacity: 1, y: 0, rotate: rot }}
          transition={{
            duration: 0.4,
            delay: index * 0.03,
            ease: "easeOut",
          }}
          style={{
            backgroundColor: bg,
            padding: "0.45rem 0.8rem",
            borderRadius: "8px",
            display: "inline-block",
            position: "relative",
            boxShadow: "6px 6px 0px #000",
          }}
          className="rough-texture mx-1 flex items-center justify-center"
        >
          {char}
        </motion.span>
      );
    });

  return (
    <section className="mx-auto flex min-h-180 w-full max-w-7xl flex-col items-center justify-between gap-16 rounded-3xl border bg-white p-10 md:flex-row">
      <div className="font-title flex flex-col gap-4">
        <div className="flex text-3xl font-bold md:text-7xl">
          {renderWord("Recent")}
        </div>
        <div className="flex text-3xl font-bold md:text-7xl">
          {renderWord("Event")}
        </div>
      </div>

      <div className="flex rotate-2 flex-col gap-6 rounded-2xl border bg-blue-50 p-5 font-sans shadow-[12px_12px_0px_#000] md:absolute md:-top-20 md:right-0 md:w-[40%] md:rotate-6">
        <div>
          <h2 className="text-5xl font-bold text-black">TechSprint X LDCE</h2>
          <span className="event-tag">Hackathon</span>
        </div>

        <p className="text-lg leading-relaxed text-gray-700">
          An open-innovation hackathon inspired by the Google Solution Challenge
          format. Solved real-world problems, built impactful prototypes, and
          showcased creativity.
        </p>

        <div className="flex flex-col gap-4 rounded-lg border bg-gray-50 p-4">
          <div className="detail-item">
            <b>Status</b>
            <span>Completed!</span>
          </div>
          <div className="detail-item">
            <b>Venue</b>
            <span>Online</span>
          </div>
        </div>

        <div>
          <h3 className="section-title">What Participants Did</h3>
          <ul className="custom-list">
            <li>Identified a real-world problem</li>
            <li>
              Proposed a solution using tech (software / ML / mobile / web)
            </li>
            <li>Built a prototype within the hackathon timeframe</li>
            <li>Presented the project to mentors/judges</li>
          </ul>
        </div>
        <button
          onClick={() => router.push("/events")}
          className="group font-title relative w-full overflow-hidden rounded-lg border-[3px] border-black bg-yellow-300 px-4 py-3 text-lg tracking-wide text-black uppercase shadow-[6px_6px_0px_#000] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[9px_9px_0px_#000] active:translate-y-0 active:shadow-[4px_4px_0px_#000]"
        >
          <span className="relative z-10 flex items-center justify-center gap-2.5">
            View All Events
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-white text-xl leading-none transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-size-[6px_6px] opacity-60"></span>
        </button>
      </div>
    </section>
  );
}
