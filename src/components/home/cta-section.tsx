import Link from "next/link";

export default function CtaSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-32">
      <div className="group relative overflow-hidden rounded-3xl bg-[#4285F4] p-12 text-center text-white md:p-16">
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="relative z-10">
          <h2 className="font-title mb-6 text-5xl font-bold tracking-tight uppercase md:text-7xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl opacity-90 md:text-2xl">
            Be a part of our vibrant developer community at LDCE. Whether you're
            a beginner or an experienced coder, there's a place for you here to
            learn, grow, and innovate!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={"https://linktr.ee/gdgoc_ldce"} target="_blank">
              <button className="font-title rounded-full bg-white px-10 py-5 text-lg font-bold tracking-widest text-blue-600 uppercase shadow-xl transition-all hover:scale-105 hover:bg-gray-100">
                Join Community →
              </button>
            </Link>
            <a
              href="/contact"
              className="font-title rounded-full border-2 border-white bg-transparent px-10 py-5 text-lg font-bold tracking-widest text-white uppercase transition-all hover:scale-105 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
