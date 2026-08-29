import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { clinic } from "@/data/clinic";
import { doctor } from "@/data/doctor";
import { media } from "@/lib/media";
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

const title = `${doctor.name} | Pediatrician in ${clinic.address.city}`;
const description =
  "Dr. Aarav Mehta is a consultant pediatrician in Chennai providing compassionate, evidence-based care for infants, children and adolescents.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${clinic.name}`,
  },
  description,
  applicationName: clinic.name,
  authors: [{ name: doctor.name }],
  keywords: [
    "pediatrician in Chennai",
    "child specialist Chennai",
    "children's clinic Anna Nagar",
    "newborn care",
    "vaccination guidance",
    doctor.name,
    clinic.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: clinic.name,
    title,
    description,
    images: [
      {
        url: media.doctorPortrait.src,
        width: media.doctorPortrait.width,
        height: media.doctorPortrait.height,
        alt: media.doctorPortrait.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [media.doctorPortrait.src],
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
