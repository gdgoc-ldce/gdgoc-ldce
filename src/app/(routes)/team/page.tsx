"use client";

import { useState } from "react";
import {
  ComicTitle,
  ExpandingPanel,
  CategoryNav,
  TeamCategoryLayout,
  TEAM_CATEGORIES,
  type TeamCategory,
  type TeamMember,
} from "@/components/comic";
import teamData from "@/data/team.json";

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory | "all">(
    "all",
  );

  const members = teamData.members as TeamMember[];

  const categoriesToShow =
    activeCategory === "all"
      ? TEAM_CATEGORIES
      : TEAM_CATEGORIES.filter((c) => c.id === activeCategory);

  const getMembersByCategory = (categoryId: TeamCategory) =>
    members
      .filter((m) => m.category === categoryId)
      .sort((a, b) => a.order - b.order);

  return (
    <main className="min-h-screen">
      <header className="border-b-4 border-white/20 bg-white py-8">
        <div className="container mx-auto flex flex-col items-center px-4">
          <ComicTitle bg="red">Our Heroes</ComicTitle>
          <p className="mt-4 text-center text-lg text-gray-600">
            The amazing team behind GDG on Campus LDCE
          </p>
        </div>
      </header>

      <nav className="relative top-0 z-50 border-b-4 border-white/20 py-4">
        <div className="container mx-auto px-4">
          <CategoryNav
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </nav>

      <div className="h-[10vh]" />

      {categoriesToShow.map((category) => (
        <div key={category.id}>
          <ExpandingPanel>
            <div className="flex h-full w-full flex-col">
              <div className="border-b-4 border-gray-800 bg-white px-6 py-4">
                <span className="mr-3 text-3xl">{category.icon}</span>
                <span className="font-title text-2xl font-bold">
                  {category.label}
                </span>
                <p className="mt-1 text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
              <TeamCategoryLayout members={getMembersByCategory(category.id)} />
            </div>
          </ExpandingPanel>
          <div className="h-[30vh]" />
        </div>
      ))}

      <footer className="border-t-4 border-white/20 bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block rotate-1 rounded-xl border-4 border-gray-800 bg-yellow-400 px-8 py-4 shadow-[6px_6px_0_0_#1f2937]">
            <p className="font-title text-xl font-bold text-gray-900">
              Want to join our team?{" "}
              <a
                href="mailto:gdg@ldce.ac.in"
                className="underline decoration-4 underline-offset-4 hover:text-blue-800"
              >
                Get in touch!
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
