import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { footerLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";

const socialIcons: Record<string, IconName> = {
  Instagram: "instagram",
  Facebook: "facebook",
  LinkedIn: "linkedin",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white/70">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1fr] lg:gap-10 lg:py-20">
          {/* ---------- Brand ---------- */}
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-[34ch] text-[0.9375rem] leading-[1.72] text-white/55">
              A dedicated pediatric practice in Chennai led by {doctor.name}, offering
              unhurried, evidence-based care from infancy through adolescence.
            </p>

            <ul className="mt-7 flex items-center gap-2.5">
              {clinic.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-label={`${clinic.shortName} on ${item.label}`}
                    className="grid h-10 w-10 place-items-center rounded-full text-white/60 ring-1 ring-white/15 transition-[color,background-color,border-color,transform] duration-300 ease-premium hover:-translate-y-0.5 hover:bg-white/10 hover:text-white hover:ring-white/30"
                  >
                    <Icon name={socialIcons[item.label] ?? "globe"} className="h-[1.1rem] w-[1.1rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Navigation ---------- */}
          <nav aria-label="Footer">
            <h2 className="text-eyebrow text-white/55">Navigation</h2>
            <ul className="mt-6 space-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-[0.9375rem] text-white/65 transition-colors duration-300 ease-premium hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- Contact ---------- */}
          <div>
            <h2 className="text-eyebrow text-white/55">Contact</h2>
            <ul className="mt-6 space-y-4 text-[0.9375rem]">
              <li>
                <a
                  href={clinic.phone.href}
                  className="link-underline text-white/65 transition-colors duration-300 ease-premium hover:text-white"
                >
                  {clinic.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={clinic.email.href}
                  className="link-underline break-all text-white/65 transition-colors duration-300 ease-premium hover:text-white"
                >
                  {clinic.email.display}
                </a>
              </li>
              <li>
                <address className="not-italic leading-[1.7] text-white/55">
                  {clinic.address.line1}
                  <br />
                  {clinic.address.line2}
                </address>
              </li>
            </ul>
          </div>

          {/* ---------- Hours ---------- */}
          <div>
            <h2 className="text-eyebrow text-white/55">Opening hours</h2>
            <dl className="mt-6 space-y-4 text-[0.9375rem]">
              <div>
                <dt className="text-white/85">{clinic.hours.days}</dt>
                <dd className="mt-1.5 space-y-1 text-white/55">
                  <span className="block">{clinic.hours.morning}</span>
                  <span className="block">{clinic.hours.evening}</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Sunday</dt>
                <dd className="text-white/55">{clinic.hours.closed}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* ---------- Legal ---------- */}
        <div className="border-t border-white/10 py-8">
          <p className="max-w-[70ch] text-[0.8125rem] leading-relaxed text-white/55">
            This website is for informational purposes and does not replace professional
            medical advice. {doctor.name} &middot; Medical Registration No.{" "}
            {doctor.registrationNumber}.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-[0.8125rem] text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {clinic.name}. All rights reserved.
            </p>
            <p className="text-white/50">
              Demonstration template — doctor and clinic details are fictional.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
