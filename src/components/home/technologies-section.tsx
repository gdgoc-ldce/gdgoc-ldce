import TechCard from "../tech-card";

const TECHNOLOGIES = [
  { name: "CLOUD", color: "#4285F4", className: "" },
  { name: "ANDROID", color: "#EA4335", className: "col-span-2" },
  {
    name: "FIREBASE",
    color: "#FBBC04",
    textColor: "text-gray-900",
    className: "",
  },
  { name: "AI/ML", color: "#34A853", className: "" },
  { name: "FLUTTER", color: "#EA4335", className: "" },
  { name: "WEB", color: "#4285F4", className: "" },
  {
    name: "ANALYTICS",
    color: "#34A853",
    className: "col-span-2 md:col-span-1",
  },
  {
    name: "TENSORFLOW",
    color: "#FBBC04",
    textColor: "text-gray-900",
    className: "col-span-2",
  },
];

export default function TechnologiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-4 text-center text-sm font-bold tracking-widest text-blue-600 uppercase">
        Technologies
      </div>
      <h2 className="font-title mb-6 text-center text-6xl font-bold tracking-tight text-gray-900 uppercase md:text-7xl">
        What We Work With
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-xl text-gray-600">
        Learn and build with industry-leading technologies
      </p>

      <div className="grid auto-rows-[120px] grid-cols-2 gap-4 md:grid-cols-4">
        {TECHNOLOGIES.map((tech) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            color={tech.color}
            textColor={tech.textColor}
            className={tech.className}
          />
        ))}
      </div>
    </section>
  );
}
