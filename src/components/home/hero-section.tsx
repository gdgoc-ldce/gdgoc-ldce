import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-end px-6 pt-16 text-center">
      <div className="mb-4 inline-flex items-center gap-4 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        <span className="text-gray-700">Google Developer Groups on Campus</span>
      </div>

      <h1 className="font-title mb-8 max-w-5xl text-7xl leading-[0.9] font-bold tracking-tight text-gray-900 uppercase md:text-8xl lg:text-9xl">
        FOR DEVS AT{" "}
        <span className="bg-black bg-clip-text text-transparent">LDCE</span>
      </h1>

      <p className="mb-10 max-w-2xl text-xl text-gray-600 md:text-2xl">
        Join us in building innovative solutions, learning cutting-edge
        technologies, and connecting with fellow developers.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href={"/events"}>
          <button className="cursor-pointer rounded-full border border-gray-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-gray-900 backdrop-blur-sm transition-all hover:border-gray-400 hover:bg-white">
            View Events
          </button>
        </Link>
      </div>
    </section>
  );
}
