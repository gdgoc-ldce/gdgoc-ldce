import GdgLogo from "@/components/gdg-logo";
import Navigation from "@/components/navbar";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import TechnologiesSection from "@/components/home/technologies-section";
import CtaSection from "@/components/home/cta-section";
import Footer from "@/components/footer";
import UpcomingSection from "@/components/home/upcoming-section";
import { Testimonials } from "@/components/home/testimonials";
import { FaqSection } from "@/components/home/faq";

export default function Home() {
  return (
    <>
      <GdgLogo />
      <section className="relative z-10 flex flex-col gap-32 scroll-smooth">
        <HeroSection />
        <hr className="mx-auto hidden w-120 md:block" />
        <AboutSection />
        <UpcomingSection />
        <div>
          <Testimonials />
        </div>
        <FaqSection />
        <CtaSection />
      </section>
    </>
  );
}
