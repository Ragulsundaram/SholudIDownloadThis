import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CompareProvider } from "@/components/CompareProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShouldIDownloadThis — Know what you're agreeing to",
  description:
    "Plain-English privacy ratings for the apps you're about to install. We read the policy so you don't have to.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-page text-ink">
        <CompareProvider>{children}</CompareProvider>
      </body>
    </html>
  );
}
