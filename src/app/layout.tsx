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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add the AdSense script here */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2653792412029642"
          strategy="afterInteractive" // Load script after the page is interactive
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F2EEE3] font-mono`}
      >
        <LanguageProvider>
          <div>
            <div className="h-6 w-full" />
            <Navbar />
            <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] grainy-light">
              <div className="flex-1 flex flex-col h-full">
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
