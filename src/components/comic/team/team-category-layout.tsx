"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { GOOGLE_COLORS, type GoogleColor, type TeamMember } from "./types";

const colorKeys: GoogleColor[] = ["blue", "red", "green", "yellow"];

function HalftoneOverlay({
  color,
  opacity = 0.15,
}: {
  color: string;
  opacity?: number;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        background: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: "4px 4px",
        opacity,
      }}
    />
  );
}

function ExplosionBurst({ color }: { color: string }) {
  return (
    <motion.div
      className="pointer-events-none absolute -inset-4 z-0"
      initial={{ scale: 0, rotate: -30 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon
          points="50,0 61,35 97,35 68,57 79,91 50,70 21,91 32,57 3,35 39,35"
          fill={color}
          opacity="0.15"
        />
      </svg>
    </motion.div>
  );
}

function ZapLines({ color, side }: { color: string; side: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none absolute top-1/2 z-30 -translate-y-1/2 ${side === "left" ? "-left-8" : "-right-8"}`}
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 origin-center"
          style={{
            backgroundColor: color,
            width: `${20 - i * 3}px`,
            top: `${i * 8 - 16}px`,
            [side]: 0,
            transform: `rotate(${side === "left" ? -15 + i * 5 : 15 - i * 5}deg)`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 - i * 0.15 }}
          transition={{ delay: 0.2 + i * 0.05, duration: 0.2 }}
        />
      ))}
    </div>
  );
}

function ComicBadge({
  text,
  color,
  rotate,
}: {
  text: string;
  color: string;
  rotate: number;
}) {
  return (
    <motion.div
      className="absolute -top-3 -right-3 z-50"
      initial={{ scale: 0, rotate: rotate * 2 }}
      whileInView={{ scale: 1, rotate }}
      transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.3 }}
    >
      <div
        className="font-title relative px-3 py-1.5 text-xs font-black tracking-widest text-white"
        style={{
          backgroundColor: color,
          clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
          textShadow: "1px 1px 0 rgba(0,0,0,0.3)",
        }}
      >
        <div
          className="absolute inset-0 border-2 border-gray-900"
          style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
        />
        {text}
      </div>
      <motion.div
        className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-2 border-t-0 border-l-0 border-gray-900"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

function POWBurst({
  color,
  position = "bottom-left",
}: {
  color: string;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}) {
  const positions = {
    "bottom-left": "-bottom-2 -left-2",
    "bottom-right": "-bottom-2 -right-2",
    "top-left": "-top-2 -left-2",
    "top-right": "-top-2 -right-2",
  };
  const rotations = {
    "bottom-left": -12,
    "bottom-right": 12,
    "top-left": -25,
    "top-right": 25,
  };
  return (
    <motion.div
      className={`pointer-events-none absolute z-40 ${positions[position]}`}
      initial={{ scale: 0, rotate: rotations[position] * 2 }}
      whileInView={{ scale: 1, rotate: rotations[position] }}
      transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
    >
      <svg width="45" height="36" viewBox="0 0 50 40">
        <path
          d="M5,20 L10,5 L20,15 L25,0 L30,15 L40,5 L45,20 L40,35 L30,25 L25,40 L20,25 L10,35 Z"
          fill={color}
          stroke="#1f2937"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
}

function LeadCrown() {
  return (
    <motion.div
      className="absolute -top-6 left-1/2 z-50 -translate-x-1/2"
      initial={{ y: -20, opacity: 0, scale: 0 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
    >
      <svg width="48" height="32" viewBox="0 0 48 32">
        <path
          d="M4,28 L8,12 L16,20 L24,4 L32,20 L40,12 L44,28 Z"
          fill="#F4B400"
          stroke="#1f2937"
          strokeWidth="2.5"
        />
        <circle
          cx="8"
          cy="10"
          r="3"
          fill="#F4B400"
          stroke="#1f2937"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="2"
          r="3"
          fill="#F4B400"
          stroke="#1f2937"
          strokeWidth="2"
        />
        <circle
          cx="40"
          cy="10"
          r="3"
          fill="#F4B400"
          stroke="#1f2937"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
}

function LeadSparkles({ color }: { color: string }) {
  return (
    <>
      {[
        { top: "10%", left: "-8%", delay: 0.3, size: 16 },
        { top: "30%", right: "-10%", delay: 0.4, size: 20 },
        { bottom: "40%", left: "-12%", delay: 0.5, size: 14 },
        { top: "15%", right: "-6%", delay: 0.35, size: 12 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute z-30"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
          }}
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: pos.delay }}
        >
          <svg width={pos.size} height={pos.size} viewBox="0 0 24 24">
            <path
              d="M12,0 L14,10 L24,12 L14,14 L12,24 L10,14 L0,12 L10,10 Z"
              fill={color}
              stroke="#1f2937"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}
    </>
  );
}

interface ComicMemberCardProps {
  member: TeamMember;
  index: number;
}

function ComicMemberCard({ member, index }: ComicMemberCardProps) {
  const color = colorKeys[index % colorKeys.length]!;
  const accentColor = GOOGLE_COLORS[color];
  const isLead = member.isLead;
  const cardRef = useRef<HTMLDivElement>(null);

  const rotations = [-4, 3, -2, 4, -3, 2, -5, 3.5];
  const rotation = rotations[index % rotations.length]!;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotate: rotation * 2, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.12,
        rotate: 0,
        zIndex: 50,
        transition: { duration: 0.3, type: "spring", stiffness: 300 },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group perspective-1000 relative"
      style={{ zIndex: 10 }}
    >
      <POWBurst
        color={GOOGLE_COLORS.yellow}
        position={
          index % 4 === 0
            ? "bottom-left"
            : index % 4 === 1
              ? "bottom-right"
              : index % 4 === 2
                ? "top-right"
                : "top-left"
        }
      />

      {index % 3 === 0 && <ExplosionBurst color={accentColor} />}
      {/* {index % 4 === 1 && <ZapLines color={accentColor} side="right" />}
      {index % 4 === 3 && <ZapLines color={accentColor} side="left" />} */}

      {isLead && (
        <>
          <LeadCrown />
          <LeadSparkles color={accentColor} />
          <ComicBadge text="LEAD" color="#DB4437" rotate={15} />
        </>
      )}

      <motion.div
        className="relative overflow-visible"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div
          className={`relative overflow-hidden border-4 bg-white ${isLead ? "border-yellow-500" : "border-gray-900"}`}
          style={{
            boxShadow: isLead
              ? `8px 8px 0 0 ${GOOGLE_COLORS.yellow}, 12px 12px 0 0 #1f2937, 0 0 30px ${accentColor}40`
              : `8px 8px 0 0 ${accentColor}, 12px 12px 0 0 #1f2937`,
            clipPath:
              "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
          }}
        >
          <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-200">
            {member.image ? (
              <>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-all duration-500 group-hover:scale-115 group-hover:saturate-110"
                />
                <motion.div
                  className="absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}50 0%, transparent 50%, ${accentColor}30 100%)`,
                  }}
                />
              </>
            ) : (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{
                  background: `
                    repeating-linear-gradient(
                      45deg,
                      ${accentColor}20,
                      ${accentColor}20 10px,
                      ${accentColor}10 10px,
                      ${accentColor}10 20px
                    )
                  `,
                }}
              >
                <motion.div
                  className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-gray-900 text-4xl font-black text-white"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: `4px 4px 0 0 #1f2937`,
                  }}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {member.name.charAt(0)}
                </motion.div>
              </div>
            )}

            <HalftoneOverlay color="#000" opacity={0.06} />

            <div
              className="absolute inset-x-0 bottom-0 h-32"
              style={{
                background: `linear-gradient(to top, ${accentColor} 0%, ${accentColor}cc 30%, transparent 100%)`,
              }}
            />

            <motion.div
              className="absolute inset-0 border-8 border-white/0 transition-all duration-300 group-hover:border-white/20"
              style={{ clipPath: "inset(4px)" }}
            />
          </div>

          <div
            className="relative border-t-4 border-gray-900 px-4 py-4"
            style={{ backgroundColor: accentColor }}
          >
            <HalftoneOverlay color="#000" opacity={0.1} />

            <div
              className="absolute -top-5 left-4 h-3 w-3/4 skew-x-[-20deg] border-2 border-gray-900 bg-white"
              style={{ boxShadow: "2px 2px 0 0 #1f2937" }}
            />

            <div className="relative z-20">
              <motion.h3
                className={`font-title text-lg leading-none font-black tracking-wide md:text-xl ${
                  color === "yellow" ? "text-gray-900" : "text-white"
                }`}
                style={{
                  textShadow:
                    color === "yellow" ? "none" : "2px 2px 0 rgba(0,0,0,0.3)",
                }}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                {member.name.toUpperCase()}
              </motion.h3>
              <motion.p
                className={`mt-1 text-sm font-bold ${
                  color === "yellow" ? "text-gray-800" : "text-white/90"
                }`}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                {member.role}
              </motion.p>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute -inset-2 -z-10 rounded-xl opacity-0 blur-none transition-all duration-300 group-hover:opacity-0 group-hover:blur-3xl"
          style={{ backgroundColor: accentColor }}
        />
      </motion.div>
    </motion.article>
  );
}

interface TeamCategoryLayoutProps {
  members: TeamMember[];
}

export function TeamCategoryLayout({ members }: TeamCategoryLayoutProps) {
  const leads = members.filter((m) => m.isLead);
  const regularMembers = members.filter((m) => !m.isLead);
  const allMembers = [...leads, ...regularMembers];

  return (
    <div className="relative overflow-hidden px-4 py-12 md:px-8 md:py-16">
      {/* <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, ${GOOGLE_COLORS.blue}15 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, ${GOOGLE_COLORS.red}15 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, ${GOOGLE_COLORS.yellow}10 0%, transparent 50%),
            linear-gradient(to bottom, #f9fafb, #f3f4f6)
          `,
        }}
      /> */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* <motion.div
        className="font-title pointer-events-none absolute top-10 left-10 text-[120px] leading-none font-black text-gray-900/3 md:text-[200px]"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        TEAM
      </motion.div> */}

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12 lg:grid-cols-4 xl:gap-14">
        {allMembers.map((member, i) => (
          <ComicMemberCard key={member.id} member={member} index={i} />
        ))}
      </div>

      {/* <motion.div
        className="font-title pointer-events-none absolute right-10 bottom-10 text-[100px] leading-none font-black text-gray-900/3 md:text-[180px]"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        GDG
      </motion.div> */}
    </div>
  );
}
