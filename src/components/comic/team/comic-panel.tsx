"use client";

import { motion } from "framer-motion";
import { GOOGLE_COLORS, type TeamMember } from "./types";

interface ComicPanelProps {
  member: TeamMember;
  index: number;
  totalPanels: number;
}

export function ComicPanel({ member, index, totalPanels }: ComicPanelProps) {
  const colorValue = GOOGLE_COLORS[member.color];

  const clipPaths = [
    "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    "polygon(0 0, 100% 0, 100% 100%, 0 90%)",
    "polygon(0 5%, 100% 0, 100% 100%, 0 95%)",
    "polygon(0 0, 100% 10%, 100% 100%, 0 100%)",
    "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
    "polygon(5% 0, 95% 0, 100% 100%, 0 100%)",
  ];

  const clipPath = clipPaths[index % clipPaths.length];

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      className="group relative cursor-pointer"
      style={{ clipPath }}
    >
      <div
        className="relative h-full w-full overflow-hidden border-4 border-gray-900"
        style={{ clipPath }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colorValue}40 0%, ${colorValue}80 100%)`,
          }}
        />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "4px 4px",
          }}
        />

        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-title text-[8rem] font-black opacity-30"
              style={{ color: colorValue }}
            >
              {member.name.charAt(0)}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        <div
          className="absolute -top-4 -right-4 h-20 w-20 rotate-12"
          style={{
            background: `radial-gradient(ellipse at center, white 0%, white 50%, transparent 50%)`,
          }}
        />

        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <div
              className="mb-2 inline-block -rotate-2 border-3 border-gray-900 px-3 py-1 font-bold text-gray-900 shadow-[3px_3px_0_0_#1f2937]"
              style={{ backgroundColor: colorValue }}
            >
              <span className="text-xs tracking-wider uppercase">
                {member.role}
              </span>
            </div>

            <h3 className="font-title text-2xl font-black tracking-wide text-white uppercase drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] md:text-3xl">
              {member.name}
            </h3>

            {member.bio && (
              <p className="mt-2 line-clamp-2 text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {member.bio}
              </p>
            )}
          </motion.div>
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 border-4 border-white opacity-0 transition-opacity duration-300 group-hover:opacity-50"
          style={{ clipPath }}
        />
      </div>
    </motion.article>
  );
}
