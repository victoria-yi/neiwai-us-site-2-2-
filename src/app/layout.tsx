import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NEIWAI — A Second Skin, Reimagined',
  description:
    'NEIWAI (内外) — Intimates and lifestyle brand. Engineered for invisible comfort. Designed for the space between inner comfort and outer beauty.',
  keywords: ['NEIWAI', 'intimates', 'barely zero', 'wireless bra', 'comfort', 'quiet luxury'],
  openGraph: {
    title: 'NEIWAI — A Second Skin, Reimagined',
    description: 'Intimates and lifestyle brand. Engineered for invisible comfort.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-cream text-ink font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
