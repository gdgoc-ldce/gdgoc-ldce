"use client";
import React from "react";
import BentoCard from "../bento-card";
import LargeBentoCard from "../large-bento-card";
const STATS = [
  { value: "500+", label: "Members" },
  { value: "50+", label: "Events" },
  { value: "100+", label: "Projects" },
];
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-4">
    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-current opacity-80" />
    {children}
  </li>
);

const BENTO_ITEMS = [
  {
    type: "large" as const,
    title: "About GDGoC LDCE",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          The official Google Developer Groups On Campus chapter for L.D.
          College of Engineering.
        </p>
        <div>
          <h4 className="mb-2 font-bold opacity-100">Our Vision:</h4>
          <ul className="flex flex-col gap-1.5">
            <ListItem>Empower students to grow through technology</ListItem>
            <ListItem>Bridge the gap between theory and practice</ListItem>
            <ListItem>
              Enhance students&apos; employability and career readiness
            </ListItem>
          </ul>
        </div>
      </div>
    ),
    color: "#4285F4",
    className: "col-span-1 row-span-2 md:col-span-2",
  },
  {
    type: "regular" as const,
    title: "Our Mission",
    description:
      "To provide 360° learning opportunities that guide students from beginner to advanced levels through practical sessions and collaborative projects.",
    color: "#EA4335",
    className: "col-span-1",
  },
  {
    type: "regular" as const,
    title: "Our Identity",
    description: "One Vision. One Mission. One Community.",
    color: "#FBBC04",
    textColor: "text-gray-900",
    className: "col-span-1",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto mb-16 max-w-7xl px-6">
      <div className="mb-4 text-center text-sm font-bold tracking-widest text-blue-600 uppercase">
        About Us
      </div>
      <h2 className="font-title mb-6 text-center text-6xl font-bold tracking-tight text-gray-900 uppercase md:text-7xl">
        One Vision. One Mission. One Community.
      </h2>
      <p className="mx-auto mb-16 max-w-2xl text-center text-xl text-gray-600">
        GDGoC LDCE is your gateway to the world of technology, providing the
        resources and network to help you succeed.
      </p>

      <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-3">
        {BENTO_ITEMS.map((item, index) =>
          item.type === "large" ? (
            <LargeBentoCard
              key={index}
              title={item.title}
              description={item.description}
              content={item.content}
              color={item.color}
              textColor={item.textColor}
              className={item.className}
            />
          ) : (
            <BentoCard
              key={index}
              title={item.title}
              description={item.description}
              content={item.content}
              color={item.color}
              textColor={item.textColor}
              className={item.className}
            />
          ),
        )}
      </div>

      {/* <div className="mx-auto mt-16 grid w-full max-w-3xl grid-cols-3 gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="mb-1 text-4xl font-bold text-gray-900">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
