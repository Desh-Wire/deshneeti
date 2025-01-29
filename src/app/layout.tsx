"use client"

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "./LanguageContext";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Deshneeti.com - Latest Indian Politics News & Analysis",
  description: "Stay informed with the latest Indian politics news, in-depth analysis, and comprehensive coverage of current affairs at Deshneeti.com",
  metadataBase: new URL('https://www.deshneeti.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/img/logo.png',
    apple: '/img/logo.png',
  },
  openGraph: {
    title: "Deshneeti.com - Latest Indian Politics News & Analysis",
    description: "Stay informed with the latest Indian politics news, in-depth analysis, and comprehensive coverage of current affairs at Deshneeti.com",
    url: 'https://www.deshneeti.com',
    siteName: 'Deshneeti',
    images: [
      {
        url: '/img/logo.png',
        width: 800,
        height: 600,
        alt: 'Deshneeti Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/img/logo.png" type="image/x-icon" />
        {/* Add Google AdSense script */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2653792412029642"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* Add Google Analytics script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HCS8DFP1R0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HCS8DFP1R0');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F2EEE3] font-mono`}
      >
        <LanguageProvider>
          <div>
            <div className="h-6 w-full" />
            <Navbar />
            <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] grainy-light w-full overflow-x-hidden">
              <div className="flex-1 flex flex-col h-full w-full">
                {children}
              </div>
              <Footer />
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
