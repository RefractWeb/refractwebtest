import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import BgGrad from "@/components/ui/bg-grad";
import Clarity from "@/lib/Clarity";
import { GoogleAnalytics } from "@next/third-parties/google";
import Awards from "@/components/Awards";

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
  title: {
    default: "RefractWeb - Defining Digital Identity",
    template: "%s | RefractWeb",
  },
  description:
    "We merge the precision of code with the power of design, orchestrating a single identity that signals authority everywhere.",
  metadataBase: new URL("https://refractweb.com"),
  keywords: [
    "Digital Identity",
    "Web Design",
    "Software Development",
    "Branding",
    "RefractWeb",
  ],
  authors: [{ name: "RefractWeb x AuraDevs" }],
  creator: "RefractWeb",
  publisher: "RefractWeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "RefractWeb - Defining Digital Identity",
    description: "We merge the precision of code with the power of design.",
    url: "https://refractweb.com",
    siteName: "RefractWeb",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RefractWeb - Defining Digital Identity",
    description: "We merge the precision of code with the power of design.",
    creator: "@refractweb",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                if (isSafari) {
                  document.documentElement.classList.add('is-safari');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className + " " + geistMono.variable}>
        <Awards />
        <BgGrad />
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-L1N9QVJ4FX" />
    </html>
  );
}
