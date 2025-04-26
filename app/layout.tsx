import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kara Amina — FullStack Developer",
  description:
    "Building beautiful interfaces and powerful backends.",
  generator: "Next.js",
  applicationName: "Kara Amina",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "backed developer",
    "creative",
    "fullstack developer",
    "pl/sql",
    "tech",
    "sql",
    "software",
    "portfolio",
    "frontend developer portfolio",
    "backend developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Kara amina — FullStack Developer",
    description:
      "Building beautiful interfaces and powerful backends.",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Kara amina — FullStack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#21312f]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
