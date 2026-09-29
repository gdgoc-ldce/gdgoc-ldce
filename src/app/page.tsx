// TEMP: maintenance mode. Original home page is preserved below; restore it and
// rename src/app/_routes back to src/app/(routes) to go live again.
export default function Home() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-[Bebas_Neue] text-5xl md:text-7xl">
        Under Maintenance
      </h1>
      <p className="max-w-md text-lg opacity-80">
        We&apos;re making some improvements to the GDGOC LDCE website. Please
        check back soon!
      </p>
    </section>
  );
}

// import GdgLogo from "@/components/gdg-logo";
// import HeroSection from "@/components/home/hero-section";
// import AboutSection from "@/components/home/about-section";
// import CtaSection from "@/components/home/cta-section";
// import UpcomingSection from "@/components/home/upcoming-section";
// import { Testimonials } from "@/components/home/testimonials";
// import { FaqSection } from "@/components/home/faq";
//
// export default function Home() {
//   return (
//     <>
//       <GdgLogo />
//       <section className="relative z-10 flex flex-col gap-32 scroll-smooth">
//         <HeroSection />
//         <hr className="mx-auto hidden w-120 md:block" />
//         <AboutSection />
//         <UpcomingSection />
//         <div>
//           <Testimonials />
//         </div>
//         <FaqSection />
//         <CtaSection />
//       </section>
//     </>
//   );
// }
