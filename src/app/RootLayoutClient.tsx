"use client"

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
const reithSerif = localFont({
  src: './fonts/BBC Reith Serif.woff2',
  variable: '--font-reith-serif',
});

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/logo.png" type="image/x-icon" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2653792412029642"
          crossOrigin="anonymous"></script>
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
      <body className={`${reithSerif.variable} ${geistMono.variable} antialiased bg-[#F2EEE3] font-serif`}>
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