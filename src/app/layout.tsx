import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sivarsa - Your Growth Partner from Idea to Impact",
  description: "Sivarsa is your trusted growth partner, offering software development, HR & talent management, and growth marketing services to help businesses scale from idea to impact.",
  keywords: ["growth partner", "software development", "HR management", "talent management", "growth marketing", "digital transformation"],
  openGraph: {
    title: "Sivarsa - Your Growth Partner from Idea to Impact",
    description: "Sivarsa is your trusted growth partner, offering software development, HR & talent management, and growth marketing services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
