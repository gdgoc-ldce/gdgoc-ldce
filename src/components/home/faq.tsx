"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GOOGLE_COLORS = {
  blue: "#4285F4",
  red: "#DB4437",
  green: "#0F9D58",
  yellow: "#F4B400",
};
const colorKeys = ["blue", "red", "green", "yellow"] as const;

const faqs = [
  {
    question: "Do I need prior coding experience to join?",
    answer:
      "No, prior coding experience is not required. GDG On Campus welcomes beginners as well as experienced developers.",
  },
  {
    question: "Is there any membership fee?",
    answer: "No, joining GDG On Campus is completely free.",
  },
  {
    question: "What kind of events does GDG On Campus organize?",
    answer:
      "GDG On Campus organizes workshops, tech talks, hackathons, hands-on sessions, study jams, and community events.",
  },
  {
    question: "How can I become a member of GDG On Campus?",
    answer: (
      <>
        You can become a member by registering through our official forms or
        attending our onboarding events announced on our social platforms.
        <br />
        <a
          href="https://gdg.community.dev/gdg-on-campus-ld-college-of-engineering-ahmedabad-india/"
          className="font-bold text-sky-600 underline hover:text-sky-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register here
        </a>
      </>
    ),
  },
  {
    question: "Can I contribute if I am not a developer?",
    answer:
      "Yes, you can contribute through design, content writing, event management, marketing, or community building.",
  },
  {
    question: "Can I join the core team?",
    answer:
      "Yes, core team recruitments are conducted periodically, and interested members can apply when openings are announced.",
  },
  {
    question: "What technologies are covered in GDG On Campus?",
    answer:
      "GDG On Campus covers a wide range of technologies including web development, mobile development, cloud, AI/ML, data science, and more.",
  },
  {
    question: "How can I stay updated about GDG On Campus activities?",
    answer:
      "You can stay updated by following our official social media handles and joining our community communication channels.",
  },
];

function HalftoneOverlay({
  color,
  opacity = 0.12,
}: {
  color: string;
  opacity?: number;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        background: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: "5px 5px",
        opacity,
      }}
    />
  );
}

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-4 py-20">
      <HalftoneOverlay color="#222" opacity={0.03} />

      <motion.h2
        className="font-title relative z-20 mb-12 text-center text-5xl font-black text-black md:text-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="relative z-20 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        {faqs.map((faq, idx) => {
          const colorKey = colorKeys[idx % colorKeys.length] ?? "blue";
          const color = GOOGLE_COLORS[colorKey];
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                delay: idx * 0.04,
              }}
              className="relative"
            >
              <div
                className="relative cursor-pointer overflow-hidden rounded-xl border-4 border-black bg-white transition-all hover:-translate-y-1"
                style={{
                  boxShadow: `6px 6px 0 0 ${color}`,
                }}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <HalftoneOverlay color={color} opacity={0.1} />

                <div
                  className="absolute top-0 left-0 h-full w-2"
                  style={{ backgroundColor: color }}
                />

                <div className="flex items-center gap-3 px-6 py-5">
                  <motion.span
                    className="font-title flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-black text-lg font-black text-white"
                    style={{ backgroundColor: color }}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                  <h3 className="text-lg font-bold text-black md:text-xl">
                    {faq.question}
                  </h3>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border-t-2 border-dashed border-black bg-gray-50"
                    >
                      <div className="px-6 py-5 text-base leading-relaxed text-gray-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
