import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { Expertise } from "@/components/sections/Expertise";
import { Philosophy } from "@/components/sections/Philosophy";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Appointment } from "@/components/sections/Appointment";
import { ClinicLocation } from "@/components/sections/ClinicLocation";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustStats />
        <AboutDoctor />
        <Expertise />
        <Philosophy />
        <ExperienceTimeline />
        <Appointment />
        <ClinicLocation />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
