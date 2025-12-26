"use client";

import { motion } from "framer-motion";
import { ComicPanel } from "./comic-panel";
import { GOOGLE_COLORS, type TeamMember } from "./types";

interface ComicLayoutProps {
  members: TeamMember[];
}

export function ComicLayout({ members }: ComicLayoutProps) {
  const rows = Math.ceil(members.length / 3);

  return (
    <section className="relative" aria-label="Team members comic layout">
      <div className="hidden md:block">
        <div className="relative flex h-[80vh] gap-1">
          {members
            .slice(0, Math.min(members.length, 6))
            .map((member, index) => (
              <div
                key={member.id}
                className="relative flex-1"
                style={{
                  marginTop: index % 2 === 0 ? "0" : "2rem",
                  marginBottom: index % 2 === 0 ? "2rem" : "0",
                }}
              >
                <ComicPanel
                  member={member}
                  index={index}
                  totalPanels={members.length}
                />
              </div>
            ))}
        </div>

        {members.length > 6 && (
          <div className="relative mt-1 flex h-[60vh] gap-1">
            {members.slice(6, 12).map((member, index) => (
              <div
                key={member.id}
                className="relative flex-1"
                style={{
                  marginTop: index % 2 === 1 ? "0" : "1.5rem",
                  marginBottom: index % 2 === 1 ? "1.5rem" : "0",
                }}
              >
                <ComicPanel
                  member={member}
                  index={index + 6}
                  totalPanels={members.length}
                />
              </div>
            ))}
          </div>
        )}

        {members.length > 12 && (
          <div className="relative mt-1 flex h-[50vh] gap-1">
            {members.slice(12).map((member, index) => (
              <div
                key={member.id}
                className="relative flex-1"
                style={{
                  marginTop: index % 2 === 0 ? "0" : "1rem",
                  marginBottom: index % 2 === 0 ? "1rem" : "0",
                }}
              >
                <ComicPanel
                  member={member}
                  index={index + 12}
                  totalPanels={members.length}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1 md:hidden">
        {members
          .map((member, index) => {
            const isWide = index % 5 === 0 || index % 5 === 3;
            const heights = [
              "h-[35vh]",
              "h-[25vh]",
              "h-[30vh]",
              "h-[40vh]",
              "h-[28vh]",
            ];

            return (
              <div key={member.id} className="flex gap-1">
                {isWide ? (
                  <div className={`w-full ${heights[index % heights.length]}`}>
                    <ComicPanel
                      member={member}
                      index={index}
                      totalPanels={members.length}
                    />
                  </div>
                ) : (
                  <>
                    <div className={`w-1/2 ${heights[index % heights.length]}`}>
                      <ComicPanel
                        member={member}
                        index={index}
                        totalPanels={members.length}
                      />
                    </div>
                    {members[index + 1] && (
                      <div
                        className={`w-1/2 ${heights[(index + 1) % heights.length]}`}
                      >
                        <ComicPanel
                          member={members[index + 1]!}
                          index={index + 1}
                          totalPanels={members.length}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })
          .filter((_, index) => {
            const isWide = index % 5 === 0 || index % 5 === 3;
            const prevIsNarrow = (index - 1) % 5 !== 0 && (index - 1) % 5 !== 3;
            return isWide || !prevIsNarrow || index === 0;
          })}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "200%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          className="absolute top-1/4 h-1 w-32 bg-white"
          style={{ boxShadow: "0 0 20px 10px rgba(255,255,255,0.5)" }}
        />
      </div>
    </section>
  );
}
