import React from "react";

interface LargeBentoCardProps {
  title: string;
  description?: string;
  content?: React.ReactNode;
  color: string;
  textColor?: string;
  className?: string;
}

export default function LargeBentoCard({
  title,
  description,
  content,
  color,
  textColor = "text-white",
  className = "",
}: LargeBentoCardProps) {
  const isYellow = color === "#FBBC04";
  const descriptionColor = isYellow
    ? "text-yellow-900"
    : textColor === "text-white"
      ? `${textColor.replace("white", "white")} opacity-90`
      : textColor;

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl p-8 transition-all hover:scale-[1.02] ${textColor} ${className}`}
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="relative z-10">
        <h3 className="font-title mb-4 text-5xl font-bold tracking-widest whitespace-pre-line">
          {title}
        </h3>
        {content ? (
          <div className={`text-lg leading-relaxed ${descriptionColor}`}>
            {content}
          </div>
        ) : (
          <p className={`text-lg leading-relaxed ${descriptionColor}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
