"use client";

import { motion } from "framer-motion";
import { GOOGLE_COLORS, type TeamMember } from "./types";

interface MemberPanelProps {
  member: TeamMember;
  index: number;
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  website: GlobeIcon,
};

export function MemberPanel({ member, index }: MemberPanelProps) {
  const colorValue: string = GOOGLE_COLORS[member.color];
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: index * 0.1,
      }}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-2xl border-4 border-gray-800 bg-white shadow-[8px_8px_0_0_#1f2937] transition-shadow duration-300 hover:shadow-[12px_12px_0_0_#1f2937] ${
          isEven ? "rotate-1" : "-rotate-1"
        }`}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, ${colorValue} 1px, transparent 1px)`,
            backgroundSize: "10px 10px",
          }}
        />

        <header
          className="relative border-b-4 border-gray-800 px-4 py-3"
          style={{ backgroundColor: `${colorValue}30` }}
        >
          <div
            className="absolute top-0 left-0 h-full w-2"
            style={{ backgroundColor: colorValue }}
          />
          <span
            className="font-title text-sm font-bold tracking-wider uppercase"
            style={{ color: colorValue }}
          >
            {member.role}
          </span>
        </header>

        <div className="relative flex flex-col gap-4 p-6 md:flex-row md:items-start">
          <div className="relative mx-auto shrink-0 md:mx-0">
            <div
              className="h-28 w-28 overflow-hidden rounded-xl border-4 border-gray-800 shadow-[4px_4px_0_0_#1f2937]"
              style={{ backgroundColor: `${colorValue}20` }}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-title text-4xl font-bold text-gray-300">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            <div
              className="absolute -right-2 -bottom-2 flex h-8 w-8 items-center justify-center rounded-full border-3 border-gray-800 text-sm font-bold text-white"
              style={{ backgroundColor: colorValue }}
            >
              {index + 1}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="font-title text-2xl font-bold text-gray-800">
              {member.name}
            </h3>

            {member.bio && (
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {member.bio}
              </p>
            )}

            {member.socialLinks &&
              Object.keys(member.socialLinks).length > 0 && (
                <nav
                  className="mt-4 flex justify-center gap-2 md:justify-start"
                  aria-label="Social links"
                >
                  {Object.entries(member.socialLinks).map(([platform, url]) => {
                    if (!url) return null;
                    const Icon =
                      socialIcons[platform as keyof typeof socialIcons];

                    return (
                      <motion.a
                        key={platform}
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-gray-800 bg-white text-gray-700 shadow-[2px_2px_0_0_#1f2937] transition-colors hover:text-white"
                        style={
                          { "--hover-bg": colorValue } as React.CSSProperties
                        }
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: colorValue,
                          color: "#fff",
                        }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    );
                  })}
                </nav>
              )}
          </div>
        </div>

        <div
          className="absolute top-4 right-4 rotate-12 opacity-10"
          style={{ color: colorValue }}
        >
          <svg className="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}
