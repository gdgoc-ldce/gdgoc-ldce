"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MemberPanel } from "./member-panel";
import {
  GOOGLE_COLORS,
  TEAM_CATEGORIES,
  type TeamMember,
  type TeamCategory,
} from "./types";

interface TeamGridProps {
  members: TeamMember[];
  activeCategory: TeamCategory | "all";
}

export function TeamGrid({ members, activeCategory }: TeamGridProps) {
  const filteredMembers =
    activeCategory === "all"
      ? members
      : members.filter((m) => m.category === activeCategory);

  const sortedMembers = [...filteredMembers].sort((a, b) => a.order - b.order);

  const categoryInfo =
    activeCategory !== "all"
      ? TEAM_CATEGORIES.find((c) => c.id === activeCategory)
      : null;

  return (
    <section aria-label="Team members">
      {categoryInfo && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-xl border-4 border-gray-800 bg-white px-6 py-3 shadow-[6px_6px_0_0_#1f2937]">
            <span className="text-3xl">{categoryInfo.icon}</span>
            <div className="text-left">
              <h2
                className="font-title text-xl font-bold"
                style={{ color: GOOGLE_COLORS[categoryInfo.color] }}
              >
                {categoryInfo.label}
              </h2>
              <p className="text-sm text-gray-600">
                {categoryInfo.description}
              </p>
            </div>
          </div>
        </motion.header>
      )}

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {sortedMembers.map((member, index) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <MemberPanel member={member} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {sortedMembers.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center"
        >
          <p className="font-title text-2xl text-gray-400">
            No team members in this category yet
          </p>
        </motion.div>
      )}
    </section>
  );
}
