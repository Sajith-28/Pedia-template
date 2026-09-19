import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contact, quickEnquiryMessage, whatsappUrl } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { expertiseAreas, findExpertiseArea } from "@/data/expertise";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { accents } from "@/lib/accents";
import { cx } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return expertiseAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = findExpertiseArea(slug);

  if (!area) return {};

  const url = `/expertise/${area.slug}`;

  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${area.title} | ${doctor.name}`,
      description: area.description,
      images: [
        {
          url: area.image.src,
          width: area.image.width,
          height: area.image.height,
          alt: area.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${area.title} | ${doctor.name}`,
      description: area.description,
      images: [area.image.src],
    },
  };
}

export default async function ExpertiseDetailPage({ params }: Params) {
  const { slug } = await params;
  const area = findExpertiseArea(slug);

  if (!area) notFound();

  const accent = accents[area.accent];
  const others = expertiseAreas.filter((item) => item.slug !== area.slug);
  const quickUrl = whatsappUrl(quickEnquiryMessage);

  return (
    <>
      <Header />

      <main id="main" className="pt-[76px] lg:pt-[92px]">
        <article>
          {/* ---------- Hero ---------- */}
          <div className="relative overflow-hidden bg-canvas-soft pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="animate-drift-a absolute -left-[12%] top-[6%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,var(--color-brand-100)_0%,transparent_65%)] opacity-50" />
              <div className="animate-drift-b absolute -right-[10%] bottom-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--color-coral-100)_0%,transparent_65%)] opacity-40" />
            </div>

            <Container className="relative">
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-ink-soft">
                  <li>
                    <Link
                      href="/"
                      className="link-underline transition-colors duration-300 ease-premium hover:text-brand-700"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-line-strong">
                    /
                  </li>
                  <li>
                    <Link
                      href="/#expertise"
                      className="link-underline transition-colors duration-300 ease-premium hover:text-brand-700"
                    >
                      Areas of Expertise
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-line-strong">
                    /
                  </li>
                  <li aria-current="page" className="font-medium text-ink">
                    {area.title}
                  </li>
                </ol>
              </nav>

              <Reveal distance={20} className="mt-8 lg:mt-10">
                <div className="relative overflow-hidden rounded-frame shadow-panel">
                  <div className="relative aspect-[16/10] sm:aspect-[2/1] lg:aspect-[21/9]">
                    <Image
                      src={area.image.src}
                      alt={area.image.alt}
                      fill
                      priority
                      placeholder="blur"
                      blurDataURL={area.image.blurDataURL}
                      sizes="(min-width: 1560px) 1464px, 94vw"
                      className="object-cover"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent"
                    />
                  </div>

                  <span
                    className={cx(
                      "absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-xl shadow-soft sm:left-7 sm:top-7",
                      accent.chip,
                    )}
                  >
                    <Icon name={area.icon} className="h-[1.4rem] w-[1.4rem]" />
                  </span>
                </div>
              </Reveal>

              <Reveal distance={18} className="mt-10 max-w-3xl lg:mt-12">
                <p className="text-eyebrow flex items-center gap-3 text-brand-600">
                  <span
                    aria-hidden="true"
                    className="h-px w-7 bg-gradient-to-r from-coral-500 to-brand-400"
                  />
                  Areas of Expertise
                </p>

                <h1 className="mt-5 font-display text-[2rem] font-bold uppercase leading-[1.1] tracking-[0.005em] text-ink sm:text-[2.4rem] lg:text-[2.9rem]">
                  {area.title}
                </h1>

                <p className="mt-6 text-[1.0625rem] leading-[1.75] text-ink-muted sm:text-[1.125rem]">
                  {area.description}
                </p>
              </Reveal>
            </Container>
          </div>

          {/* ---------- Body ---------- */}
          <div className="bg-canvas py-20 sm:py-24 lg:py-28">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-start lg:gap-12">
                <Reveal distance={20}>
                  <div className="rounded-panel bg-surface p-7 ring-1 ring-line sm:p-9 lg:p-10">
                    <h2 className="font-display text-[1.375rem] font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[1.625rem]">
                      Care with {doctor.name}
                    </h2>
                    <p className="mt-4 text-[1rem] leading-[1.75] text-ink-muted">
                      {area.title} is one of the areas {doctor.name}, {doctor.title},
                      consults in. Every consultation follows the same principles.
                    </p>

                    <ul className="mt-8 space-y-6">
                      {doctor.philosophy.pillars.map((pillar) => (
                        <li key={pillar.title} className="flex items-start gap-4">
                          <span
                            className={cx(
                              "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full",
                              accent.chip,
                            )}
                          >
                            <Icon name="check" className="h-4 w-4" strokeWidth={2} />
                          </span>
                          <div>
                            <h3 className="font-display text-[1.0625rem] font-bold tracking-[-0.01em] text-ink">
                              {pillar.title}
                            </h3>
                            <p className="mt-1.5 text-[0.9375rem] leading-[1.7] text-ink-muted">
                              {pillar.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-8 border-t border-line pt-6 text-[0.875rem] leading-[1.7] text-ink-soft">
                      This page is for general information. For advice about your child,
                      please book a consultation.
                    </p>
                  </div>
                </Reveal>

                <aside className="flex flex-col gap-6">
                  {/* CTA */}
                  <Reveal delay={100} distance={20}>
                    <div className="rounded-panel bg-surface p-7 ring-1 ring-line shadow-soft sm:p-8">
                      <h2 className="font-display text-[1.25rem] font-bold leading-snug tracking-[-0.02em] text-ink">
                        Book a consultation
                      </h2>
                      <p className="mt-3 text-[0.9375rem] leading-[1.7] text-ink-muted">
                        Send an appointment enquiry with your child&rsquo;s details and it
                        opens in WhatsApp, ready to send.
                      </p>

                      <ButtonLink href="/#appointment" size="md" className="mt-6 w-full">
                        <Icon name="calendar" className="h-4 w-4" />
                        Book an Appointment
                      </ButtonLink>

                      {quickUrl ? (
                        <a
                          href={quickUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-3 inline-flex w-full select-none items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-[0.9375rem] font-bold text-white shadow-soft transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-[#1DA851] hover:shadow-lift active:translate-y-0"
                        >
                          <Icon
                            name="whatsapp"
                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                          />
                          WhatsApp
                        </a>
                      ) : null}

                      {contact.isConfigured ? (
                        <ButtonLink
                          href={contact.telHref}
                          variant="ghost"
                          size="md"
                          className="mt-1 w-full"
                        >
                          <Icon name="phone" className="h-4 w-4" />
                          {contact.display}
                        </ButtonLink>
                      ) : null}
                    </div>
                  </Reveal>

                  {/* Doctor summary */}
                  <Reveal delay={160} distance={20}>
                    <div className="rounded-panel bg-brand-950 p-7 text-white shadow-soft sm:p-8">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-teal-300">
                          <Icon name="stethoscope" className="h-5 w-5" />
                        </span>
                        <h2 className="font-display text-[1.0625rem] font-bold tracking-[-0.015em]">
                          {doctor.name}
                        </h2>
                      </div>

                      <p className="mt-5 text-[0.9375rem] text-white/85">{doctor.title}</p>
                      <p className="mt-1.5 text-[0.875rem] text-white/55">
                        {doctor.qualifications}
                      </p>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {doctor.interests.map((interest) => (
                          <li
                            key={interest}
                            className="rounded-full bg-white/10 px-3 py-1.5 text-[0.75rem] font-medium text-white/80 ring-1 ring-white/15"
                          >
                            {interest}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-6 border-t border-white/10 pt-5 text-[0.8125rem] text-white/55">
                        Currently practising in {doctor.city}
                      </p>
                    </div>
                  </Reveal>
                </aside>
              </div>

              {/* ---------- Other areas ---------- */}
              <div className="mt-20 border-t border-line pt-14 lg:mt-24 lg:pt-16">
                <Reveal>
                  <h2 className="font-display text-[1.5rem] font-bold leading-snug tracking-[-0.02em] text-ink sm:text-[1.75rem]">
                    Other areas of expertise
                  </h2>
                </Reveal>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {others.map((item, index) => (
                    <Reveal key={item.slug} as="li" delay={(index % 3) * 80} distance={16}>
                      <Link
                        href={`/expertise/${item.slug}`}
                        className="group flex h-full items-center gap-4 rounded-card bg-surface p-4 ring-1 ring-line transition-[transform,box-shadow] duration-500 ease-premium hover:-translate-y-1 hover:shadow-soft"
                      >
                        <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-canvas-soft">
                          <Image
                            src={item.image.src}
                            alt=""
                            fill
                            loading="lazy"
                            sizes="64px"
                            className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
                          />
                        </span>
                        <span className="flex-1 font-display text-[0.9375rem] font-bold leading-snug tracking-[-0.01em] text-ink transition-colors duration-300 ease-premium group-hover:text-brand-800">
                          {item.title}
                        </span>
                        <Icon
                          name="arrowRight"
                          className="h-4 w-4 shrink-0 text-brand-600 transition-transform duration-500 ease-premium group-hover:translate-x-1"
                        />
                      </Link>
                    </Reveal>
                  ))}
                </ul>

                <Reveal className="mt-12">
                  <Link
                    href="/#expertise"
                    className="group inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brand-700 transition-colors duration-300 ease-premium hover:text-brand-800"
                  >
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 rotate-180 transition-transform duration-500 ease-premium group-hover:-translate-x-1.5"
                    />
                    Back to Areas of Expertise
                  </Link>
                </Reveal>
              </div>
            </Container>
          </div>
        </article>
      </main>

      <Footer linkPrefix="/" />
      <FloatingContact />
    </>
  );
}
