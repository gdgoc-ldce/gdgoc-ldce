"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComicTitle,
  TeamCategoryLayout,
  CampusLeadHero,
  TEAM_CATEGORIES,
  GOOGLE_COLORS,
  type TeamCategory,
  type TeamMember,
} from "@/components/comic";
import teamData from "@/data/team.json";
import Link from "next/link";

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory | "all">(
    "all",
  );

  const members = teamData.members as TeamMember[];
  const campusLead = members.find((m) => m.category === "campus-lead");
  const teamMembers = members.filter((m) => m.category !== "campus-lead");

  const categoriesToShow =
    activeCategory === "all"
      ? TEAM_CATEGORIES
      : TEAM_CATEGORIES.filter((c) => c.id === activeCategory);

  const getMembersByCategory = (categoryId: TeamCategory) =>
    teamMembers
      .filter((m) => m.category === categoryId)
      .sort((a, b) => a.order - b.order);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-center">
        {campusLead && <CampusLeadHero member={campusLead} />}
      </div>
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col items-center justify-center text-center"
          >
            <div className="relative w-fit">
              <ComicTitle bg="blue" shadow={false}>
                Meet The Team
              </ComicTitle>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
              The amazing people who make GDG on Campus LDCE possible
            </p>
          </motion.div>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory("all")}
              className={`font-title rounded-xl border-4 px-5 py-2.5 text-lg font-bold transition-all ${
                activeCategory === "all"
                  ? "border-gray-800 bg-gray-800 text-white shadow-[4px_4px_0_0_#4285F4]"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
              }`}
            >
              All Teams
            </motion.button>
            {TEAM_CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`font-title rounded-xl border-4 px-5 py-2.5 text-lg font-bold transition-all ${
                  activeCategory === category.id
                    ? "border-gray-800 text-white shadow-[4px_4px_0_0_#1f2937]"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                }`}
                style={{
                  backgroundColor:
                    activeCategory === category.id
                      ? GOOGLE_COLORS[category.color]
                      : undefined,
                }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {categoriesToShow.map((category, categoryIndex) => {
        const categoryMembers = getMembersByCategory(category.id);
        if (categoryMembers.length === 0) return null;

        return (
          <motion.section
            key={category.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="relative pb-16"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8 flex items-center gap-4"
              >
                <div
                  className="h-16 w-2 rounded-full"
                  style={{ backgroundColor: GOOGLE_COLORS[category.color] }}
                />
                <div>
                  <h2 className="font-title text-3xl font-bold text-gray-900 md:text-4xl">
                    {category.label}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </motion.div>
            </div>

            <TeamCategoryLayout members={categoryMembers} />

            {/* {categoryIndex < categoriesToShow.length - 1 && (
              <div className="mt-16 flex justify-center">
                <div className="flex gap-2">
                  {(["blue", "red", "yellow", "green"] as const).map(
                    (color) => (
                      <div
                        key={color}
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: GOOGLE_COLORS[color] }}
                      />
                    ),
                  )}
                </div>
              </div>
            )} */}
          </motion.section>
        );
      })}

      <footer className="border-t-4 border-gray-200 bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ rotate: -2, scale: 0.9 }}
            whileInView={{ rotate: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="inline-block"
          >
            <div className="rounded-xl border-4 border-gray-800 bg-yellow-400 px-8 py-6 shadow-[6px_6px_0_0_#1f2937]">
              <p className="font-title text-2xl font-bold text-gray-900">
                Want to join our team?
              </p>
              <Link
                href="mailto:gdgocldce@gmail.com"
                className="mt-2 inline-block font-semibold text-gray-800 underline decoration-4 underline-offset-4 transition-colors hover:text-blue-700"
              >
                Get in touch!
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
