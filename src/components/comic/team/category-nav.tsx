"use client";

import { motion } from "framer-motion";
import {
  GOOGLE_COLORS,
  TEAM_CATEGORIES,
  type GoogleColor,
  type TeamCategory,
} from "./types";

interface CategoryNavProps {
  activeCategory: TeamCategory | "all";
  onCategoryChange: (category: TeamCategory | "all") => void;
}

export function CategoryNav({
  activeCategory,
  onCategoryChange,
}: CategoryNavProps) {
  const allCategories = [
    {
      id: "all" as const,
      label: "All Heroes",
      icon: "🦸",
      color: "blue" as GoogleColor,
    },
    ...TEAM_CATEGORIES,
  ];

  return (
    <nav
      className="relative mx-auto max-w-5xl rounded-2xl border-4 border-gray-800 bg-white p-2 shadow-[6px_6px_0_0_#1f2937]"
      role="navigation"
      aria-label="Team categories"
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
          }}
        />
      </div>

      <ul className="relative flex flex-wrap justify-center gap-2">
        {allCategories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <li key={category.id}>
              <motion.button
                onClick={() => onCategoryChange(category.id)}
                className={`font-title relative flex items-center gap-2 rounded-xl border-3 border-gray-800 px-4 py-2 text-sm font-bold tracking-wide transition-colors ${
                  isActive
                    ? "text-white"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
                style={{
                  backgroundColor: isActive
                    ? GOOGLE_COLORS[category.color]
                    : undefined,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-pressed={isActive}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.label}</span>

                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 -z-10 rounded-xl border-3 border-gray-800"
                    style={{ backgroundColor: GOOGLE_COLORS[category.color] }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
