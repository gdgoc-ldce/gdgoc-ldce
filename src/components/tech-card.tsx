interface TechCardProps {
  name: string;
  color: string;
  textColor?: string;
  className?: string;
}

export default function TechCard({
  name,
  color,
  textColor = "text-white",
  className = "",
}: TechCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl p-6 text-center transition-all hover:scale-[1.05] ${textColor} ${className}`}
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="font-title relative z-10 text-3xl font-bold tracking-widest">
        {name}
      </div>
    </div>
  );
}
