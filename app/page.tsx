import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { KidFriendlyFeatures } from "@/components/sections/KidFriendlyFeatures";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { Expertise } from "@/components/sections/Expertise";
import { MilestoneGuide } from "@/components/sections/MilestoneGuide";
import { Philosophy } from "@/components/sections/Philosophy";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Appointment } from "@/components/sections/Appointment";
import { ClinicLocation } from "@/components/sections/ClinicLocation";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustStats />
        <KidFriendlyFeatures />
        <AboutDoctor />
        <Expertise />
        <MilestoneGuide />
        <Philosophy />
        <ExperienceTimeline />
        <Appointment />
        <ClinicLocation />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
