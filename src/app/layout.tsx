import type { Metadata } from "next";
import RootLayoutClient from "./RootLayoutClient";

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
  return <RootLayoutClient>{children}</RootLayoutClient>;
}