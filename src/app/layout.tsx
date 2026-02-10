import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import BgGrad from "@/components/ui/bg-grad";
import Clarity from "@/lib/Clarity";

const inter = Inter_Tight({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RefractWeb",
  description: "RefractWeb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      {process.env.NODE_ENV === "production" && <Clarity />}
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className + " " + geistMono.variable}>
        <BgGrad />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
