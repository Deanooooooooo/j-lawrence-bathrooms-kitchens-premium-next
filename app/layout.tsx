import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://deanooooooooo.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const ogImage = `${siteUrl}${basePath}/images/completed-bathroom-reel-thumb.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "J.Lawrence Bathrooms and Kitchens | Bathroom & Kitchen Fitting in Basildon",
  description:
    "J.Lawrence Bathrooms and Kitchens is an experienced kitchen and bathroom fitter in Basildon covering renovations and general maintenance.",
  alternates: {
    canonical: `${siteUrl}${basePath}/`
  },
  openGraph: {
    title: "J.Lawrence Bathrooms and Kitchens | Basildon",
    description:
      "Bathroom and kitchen fitting, renovation and general maintenance enquiries in Basildon.",
    url: `${siteUrl}${basePath}/`,
    siteName: "J.Lawrence Bathrooms and Kitchens",
    images: [
      {
        url: ogImage,
        width: 946,
        height: 1682,
        alt: "Completed bathroom work by J.Lawrence Bathrooms and Kitchens"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "J.Lawrence Bathrooms and Kitchens | Basildon",
    description: "Bathroom and kitchen fitting enquiries in Basildon.",
    images: [ogImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  );
}
