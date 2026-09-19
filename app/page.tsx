import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Credentials } from "@/components/sections/Credentials";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { Expertise } from "@/components/sections/Expertise";
import { Philosophy } from "@/components/sections/Philosophy";
import { Appointment } from "@/components/sections/Appointment";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { FloatingContact } from "@/components/ui/FloatingContact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Credentials />
        <AboutDoctor />
        <Expertise />
        <Philosophy />
        <Appointment />
        <Contact />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
