import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import '../styles/tailwind.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'RoofDoneRestore — Expert Roofing & Storm Restoration',
  description: 'Licensed roofing and storm damage restoration specialists. We handle insurance claims, roof repair, replacement, and gutter installation. Free inspections. 5-year warranty.',
  keywords: 'roofing, storm damage, roof repair, insurance claim, roof replacement, gutter installation, restoration contractor',
  openGraph: {
    title: 'RoofDoneRestore — Expert Roofing & Storm Restoration',
    description: 'Licensed roofing and storm damage restoration. Free inspections. Insurance claim experts. 5-year warranty.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className={manrope.className}>
        {children}
</body>
    </html>
  );
}