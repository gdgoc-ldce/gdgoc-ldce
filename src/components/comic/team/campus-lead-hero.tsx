"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GOOGLE_COLORS, type TeamMember } from "./types";

function HalftoneOverlay({
  color,
  opacity = 0.15,
}: {
  color: string;
  opacity?: number;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: "6px 6px",
        opacity,
      }}
    />
  );
}

interface CampusLeadHeroProps {
  member: TeamMember;
}

export function CampusLeadHero({ member }: CampusLeadHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <HalftoneOverlay color="#fff" opacity={0.03} />

      <div className="absolute inset-0 overflow-hidden">
        {/* <motion.div
          className="absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: GOOGLE_COLORS.blue }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: GOOGLE_COLORS.red }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 h-48 w-48 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: GOOGLE_COLORS.green }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 h-40 w-40 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: GOOGLE_COLORS.yellow }}
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity }}
        /> */}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative"
          >
            <div className="relative h-72 w-72 md:h-96 md:w-96">
              <div
                className="absolute inset-0 rounded-2xl border-4 border-gray-700"
                style={{
                  transform: "rotate(6deg)",
                  backgroundColor: GOOGLE_COLORS.blue,
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl border-4 border-gray-700"
                style={{
                  transform: "rotate(3deg)",
                  backgroundColor: GOOGLE_COLORS.red,
                }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border-4 border-white shadow-[8px_8px_0_0_#1f2937]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center"
                    style={{ backgroundColor: GOOGLE_COLORS.blue }}
                  >
                    <span className="text-8xl font-bold text-black">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <HalftoneOverlay color="#000" opacity={0.1} />
              </div>
            </div>

            <motion.div
              className="absolute -top-4 -right-4 rounded-lg border-4 border-gray-800 px-4 py-2 shadow-[4px_4px_0_0_#1f2937]"
              style={{ backgroundColor: GOOGLE_COLORS.yellow }}
              initial={{ rotate: 12, scale: 0 }}
              animate={{ rotate: 12, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <span className="font-title text-lg font-bold text-gray-900 md:text-xl">
                Campus Lead
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <div className="mb-4 flex flex-wrap justify-center gap-2 md:justify-start">
              {(["blue", "red", "green", "yellow"] as const).map(
                (color, idx) => (
                  <motion.span
                    key={color}
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: GOOGLE_COLORS[color] }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  />
                ),
              )}
            </div>

            <h1 className="font-title text-5xl font-bold tracking-wide text-black md:text-7xl">
              {member.name}
            </h1>

            <motion.div
              className="mt-4 inline-block"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <div
                className="h-2 w-full origin-left"
                style={{
                  background: `linear-gradient(90deg, ${GOOGLE_COLORS.blue}, ${GOOGLE_COLORS.red}, ${GOOGLE_COLORS.yellow}, ${GOOGLE_COLORS.green})`,
                }}
              />
            </motion.div>

            <p className="mt-6 max-w-md text-lg text-gray-900 md:text-xl">
              {member.bio ?? "Leading GDGOC LDCE with passion and vision"}
            </p>

            {/* <motion.div
              className="mt-8 inline-flex items-center gap-2 rounded-lg border-4 border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
            >
              <span className="text-lg font-semibold text-black">
                GDG on Campus LDCE
              </span>
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* <div className="absolute right-0 bottom-0 left-0 h-24 bg-linear-to-t from-gray-50 to-transparent" /> */}
    </section>
  );
}
