import { clinicAddress, contact } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { footerLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";

/**
 * `linkPrefix` is "/" on pages other than the home page, so the in-page
 * anchors below resolve against the home page instead of the current route.
 */
export function Footer({ linkPrefix = "" }: { linkPrefix?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white/70">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-14 lg:py-20">
          {/* ---------- Identity ---------- */}
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-[38ch] text-[0.9375rem] leading-[1.72] text-white/55">
              {doctor.qualifications}. Comprehensive care for newborns, infants, children
              and adolescents, currently practising in {doctor.city}.
            </p>
          </div>

          {/* ---------- Navigation ---------- */}
          <nav aria-label="Footer">
            <h2 className="text-eyebrow text-white/55">Navigation</h2>
            <ul className="mt-6 space-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`${linkPrefix}${link.href}`}
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
                <address className="not-italic leading-[1.7] text-white/55">
                  {clinicAddress.line1}
                  <br />
                  {clinicAddress.line2}
                </address>
              </li>
              {contact.isConfigured ? (
                <li>
                  <a
                    href={contact.telHref}
                    className="link-underline text-white/65 transition-colors duration-300 ease-premium hover:text-white"
                  >
                    {contact.display}
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={`${linkPrefix}#appointment`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-[0.875rem] font-medium text-white/90 ring-1 ring-white/15 transition-colors duration-300 ease-premium hover:bg-white/15"
                >
                  <Icon name="calendar" className="h-4 w-4" />
                  Book an appointment
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- Legal ---------- */}
        <div className="border-t border-white/10 py-8">
          <p className="max-w-[70ch] text-[0.8125rem] leading-relaxed text-white/55">
            This website is for informational purposes and does not replace professional
            medical advice. For urgent medical emergencies, please contact your nearest
            emergency facility.
          </p>
          <p className="mt-5 text-[0.8125rem] text-white/55">
            &copy; {year} {doctor.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
