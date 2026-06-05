import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CompareProvider } from "@/components/CompareProvider";
import { AgenationDevTool } from "@/components/AgenationDevTool";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "ShouldIDownloadThis - Know what you're agreeing to",
  description:
    "Plain-English privacy ratings for the apps you're about to install. We read the policy so you don't have to.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-page text-ink" suppressHydrationWarning>
        <CompareProvider>{children}</CompareProvider>
        <AgenationDevTool />
      </body>
    </html>
  );
}
