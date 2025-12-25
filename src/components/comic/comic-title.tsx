import type { ReactNode } from "react";

const googleColors: Record<string, string> = {
  red: "#DB4437",
  green: "#0F9D58",
  blue: "#4285F4",
  yellow: "#F4B400",
  white: "#FFFFFF",
};

export default function ComicTitle({
  children,
  bg,
  halftone = true,
  wide = true,
  titleFonts = true,
}: {
  children: ReactNode;
  bg: "red" | "green" | "blue" | "yellow" | "white";
  halftone?: boolean;
  wide?: boolean;
  titleFonts?: boolean;
}) {
  return (
    <div className="relative my-5 w-fit">
      <div
        style={{
          color: bg === "white" ? "#000000" : "#FFFFFF",
          backgroundColor: googleColors[bg],
          clipPath: "polygon(0% 20%, 100% 5%, 95% 100%, 2% 95%)",
        }}
        className="relative z-10 p-4 text-center text-2xl font-bold md:text-7xl"
      >
        <div
          className={`relative z-20 font-extrabold ${wide ? "tracking-widest" : "tracking-normal"} ${titleFonts ? "font-title" : "font-sans"}`}
        >
          {children}
        </div>
        {halftone && (
          <span
            style={{
              clipPath: "polygon(0% 20%, 100% 5%, 95% 100%, 2% 95%)",
            }}
            className="absolute -top-1 -left-1 z-5 h-full w-full scale-110 bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-size-[5px_5px] opacity-75"
          ></span>
        )}
      </div>
      <span
        style={{
          clipPath: "polygon(0% 20%, 100% 5%, 95% 100%, 2% 95%)",
        }}
        className="absolute top-0 h-full w-full scale-113 bg-black"
      ></span>

      <span
        style={{
          clipPath: "polygon(0% 20%, 100% 5%, 95% 100%, 2% 95%)",
        }}
        className="absolute -top-3 -left-3 z-5 h-full w-full scale-110 bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-size-[5px_5px] opacity-30"
      ></span>
    </div>
  );
}
