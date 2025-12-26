import type { ReactNode } from "react";
import { GOOGLE_COLORS, type GoogleColor } from "./types";

interface BadgeProps {
  children: ReactNode;
  color: GoogleColor;
  className?: string;
}

export function Badge({ children, color, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-md border-2 border-gray-800 px-2 py-0.5 text-xs font-bold tracking-wider text-white uppercase shadow-[2px_2px_0_0_#1f2937] ${className}`}
      style={{ backgroundColor: GOOGLE_COLORS[color] }}
    >
      {children}
    </span>
  );
}

interface NumberBadgeProps {
  number: number;
  color: GoogleColor;
  size?: "sm" | "md";
}

export function NumberBadge({ number, color, size = "md" }: NumberBadgeProps) {
  const sizeClasses =
    size === "sm"
      ? "h-8 w-8 text-sm border-2 shadow-[2px_2px_0_0_#1f2937]"
      : "h-10 w-10 text-lg border-3 shadow-[3px_3px_0_0_#1f2937]";

  return (
    <div
      className={`font-title flex items-center justify-center rounded-full font-bold text-white ${sizeClasses}`}
      style={{ backgroundColor: GOOGLE_COLORS[color] }}
    >
      {number}
    </div>
  );
}

interface InfoBoxProps {
  title: string;
  children: ReactNode;
  color?: GoogleColor;
}

export function InfoBox({ title, children, color = "yellow" }: InfoBoxProps) {
  return (
    <div
      className="relative rounded-lg border-3 border-gray-800 p-4 shadow-[4px_4px_0_0_#1f2937]"
      style={{ backgroundColor: `${GOOGLE_COLORS[color]}20` }}
    >
      <span
        className="font-title absolute -top-3 left-4 rounded-md border-2 border-gray-800 bg-white px-2 py-0.5 text-sm tracking-wide"
        style={{ color: GOOGLE_COLORS[color] }}
      >
        {title}
      </span>
      <div className="mt-2">{children}</div>
    </div>
  );
}

interface ListProps {
  items: string[];
  color?: GoogleColor;
  numbered?: boolean;
}

export function List({ items, color = "blue", numbered = false }: ListProps) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm">
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-800 text-xs font-bold text-white"
            style={{ backgroundColor: GOOGLE_COLORS[color] }}
          >
            {numbered ? i + 1 : "✓"}
          </span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

interface DividerProps {
  color?: GoogleColor;
}

export function Divider({ color = "blue" }: DividerProps) {
  return (
    <div className="my-4 flex items-center gap-2">
      <div className="h-0.5 flex-1 bg-gray-300" />
      <div
        className="h-3 w-3 rotate-45 border-2 border-gray-800"
        style={{ backgroundColor: GOOGLE_COLORS[color] }}
      />
      <div className="h-0.5 flex-1 bg-gray-300" />
    </div>
  );
}
