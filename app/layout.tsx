import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { doctor } from "@/data/doctor";
import { SITE_URL, buildStructuredData } from "@/lib/structuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const title = `${doctor.name} | ${doctor.title} in ${doctor.city}`;
const description = `${doctor.name} is a Paediatrician and Neonatologist practising in ${doctor.city}, providing evidence-based, personalised and compassionate care for newborns, infants, children and adolescents.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${doctor.name}`,
  },
  description,
  applicationName: doctor.name,
  authors: [{ name: doctor.name }],
  keywords: [
    `paediatrician in ${doctor.city}`,
    `neonatologist in ${doctor.city}`,
    "child specialist Chennai",
    "newborn care",
    "general paediatrics",
    doctor.name,
  ],
  alternates: { canonical: "/" },
  // No social image: no photograph of the doctor has been supplied, and no
  // stand-in may be presented as her.
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: doctor.name,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-dvh antialiased">
        {/*
          Marks the document as scripted before the first reveal is parsed.
          Without it the reveal styles never hide anything, so the page still
          renders completely with JavaScript disabled.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildStructuredData()),
          }}
        />
      </body>
    </html>
  );
}
