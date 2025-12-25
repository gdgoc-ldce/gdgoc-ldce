"use client";

import Image from "next/image";
import { GOOGLE_COLORS, type GoogleColor, type TeamMember } from "./types";
import ComicTitle from "../comic-title";

const colorKeys: GoogleColor[] = ["blue", "red", "green", "yellow"];

function getGridColor(
  index: number,
  cols: number,
  leadCount: number,
): GoogleColor {
  const row = Math.floor(index / cols);
  const col = index % cols;
  const startOffset = leadCount % colorKeys.length;
  const colorIndex = (row * 2 + col + startOffset) % colorKeys.length;
  return colorKeys[colorIndex]!;
}

function getLinearColor(index: number): GoogleColor {
  return colorKeys[index % colorKeys.length]!;
}

interface MemberCardProps {
  member: TeamMember;
  bgColor: GoogleColor;
}

function MemberCard({ member, bgColor }: MemberCardProps) {
  const bg = GOOGLE_COLORS[bgColor];
  const isYellow = bgColor === "yellow";
  const textColor = isYellow ? "text-gray-900" : "text-white";
  const subTextColor = isYellow ? "text-gray-700" : "text-white/80";
  const factBg = isYellow ? "bg-gray-900/10" : "bg-white/20";

  return (
    <div
      className={`relative flex h-full gap-4 border-8 border-black p-4 ${textColor}`}
      style={{ backgroundColor: bg }}
    >
      <span
        style={{
          clipPath: "polygon(0% 00%, 100% 00%, 100% 100%, 0% 100%)",
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
          maskImage: "radial-gradient(circle, black 1.5px, transparent 1.5px)",
          WebkitMaskImage:
            "radial-gradient(circle, black 1.5px, transparent 1.5px)",
          maskSize: "6px 6px",
          WebkitMaskSize: "6px 6px",
        }}
        className="absolute left-0 z-5 h-full w-full"
      ></span>
      <div className="absolute bottom-0 left-0 w-full shrink-0 overflow-hidden rounded-lg">
        {member.image && (
          <Image
            height={80}
            width={80}
            src={"/sample.png"}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="absolute -bottom-5 left-0 z-10 text-black">
        <ComicTitle
          bg={"white"}
          halftone={false}
          wide={false}
          titleFonts={false}
        >
          <div className="text-2xl">{member.name}</div>
          {member.role && <p className={`text-lg`}>{member.role}</p>}
          {member.facts && (
            <ul className="mt-2 flex gap-1 text-black">
              {member.facts.map((fact, i) => (
                <li
                  key={i}
                  className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-black`}
                >
                  {fact}
                </li>
              ))}
            </ul>
          )}
        </ComicTitle>
      </div>
    </div>
  );
}

function DoodleCard({ bgColor }: { bgColor: GoogleColor }) {
  const bg = GOOGLE_COLORS[bgColor];
  const isYellow = bgColor === "yellow";
  const strokeColor = isYellow ? "#1f2937" : "#ffffff";

  return (
    <div
      className="relative flex h-full items-center justify-center border-8 border-black p-4"
      style={{ backgroundColor: bg }}
    >
      <span
        style={{
          clipPath: "polygon(0% 00%, 100% 00%, 100% 100%, 0% 100%)",
          background:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)",
          maskImage: "radial-gradient(circle, black 1.5px, transparent 1.5px)",
          WebkitMaskImage:
            "radial-gradient(circle, black 1.5px, transparent 1.5px)",
          maskSize: "6px 6px",
          WebkitMaskSize: "6px 6px",
        }}
        className="absolute left-0 z-5 h-full w-full"
      ></span>

      <svg
        viewBox="0 0 100 100"
        className="relative z-10 h-24 w-24 opacity-60"
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="50" cy="50" r="8" fill={strokeColor} />
        <path d="M50 30 L50 15" />
        <path d="M50 70 L50 85" />
        <path d="M30 50 L15 50" />
        <path d="M70 50 L85 50" />
        <path d="M36 36 L25 25" />
        <path d="M64 64 L75 75" />
        <path d="M64 36 L75 25" />
        <path d="M36 64 L25 75" />
        <path d="M20 20 Q25 15, 30 20 Q35 25, 40 20" />
        <path d="M60 80 Q65 75, 70 80 Q75 85, 80 80" />
      </svg>
    </div>
  );
}

interface TeamCategoryLayoutProps {
  members: TeamMember[];
}

export function TeamCategoryLayout({ members }: TeamCategoryLayoutProps) {
  const leads = members.filter((m) => m.isLead);
  const regularMembers = members.filter((m) => !m.isLead);
  const total = members.length;

  if (total <= 6) {
    return (
      <>
        <div className="flex flex-col md:hidden">
          {members.map((member, i) => (
            <MemberCard
              key={member.id}
              member={member}
              bgColor={getLinearColor(i)}
            />
          ))}
        </div>

        <div className="hidden h-full flex-1 items-stretch md:flex">
          {members.map((member, i) => (
            <div key={member.id} className="flex-1">
              <MemberCard
                member={member}
                bgColor={colorKeys[i % colorKeys.length]!}
              />
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col md:hidden">
        {members.map((member, i) => (
          <MemberCard
            key={member.id}
            member={member}
            bgColor={getLinearColor(i)}
          />
        ))}
      </div>

      <div className="hidden h-full flex-1 md:flex">
        {leads.map((lead, i) => (
          <div key={lead.id} className="flex h-full w-100 shrink-0 flex-col">
            <div className="row-span-2 h-full">
              <MemberCard
                member={lead}
                bgColor={colorKeys[i % colorKeys.length]!}
              />
            </div>
          </div>
        ))}

        <div className="grid flex-1 auto-rows-fr grid-cols-2 lg:grid-cols-3">
          {regularMembers.map((member, i) => (
            <MemberCard
              key={member.id}
              member={member}
              bgColor={getGridColor(i, 3, leads.length)}
            />
          ))}
          {regularMembers.length % 2 !== 0 && (
            <DoodleCard
              bgColor={getGridColor(regularMembers.length, 3, leads.length)}
            />
          )}
        </div>
      </div>
    </>
  );
}
