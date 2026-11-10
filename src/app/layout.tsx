import type { Metadata } from 'next';
import { Oswald, Roboto, Sora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppBot from '@/components/WhatsAppBot';
import PageLoader from '@/components/PageLoader';
import RevealObserver from '@/components/RevealObserver';

// Typefaces: Oswald for all titles and headings, Roboto for all other text, Sora for the logo wordmark.
const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-sora', display: 'swap' });
const oswald = Oswald({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-oswald', display: 'swap' });
// Roboto (variable, all weights): every non-title text across the site.
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://techverge.africa'),
  title: {
    default: 'Techverge Africa Ltd | Engineering the Future of African Enterprise',
    template: '%s | Techverge Africa Ltd',
  },
  description:
    'Techverge Africa Ltd delivers production-grade software development, secure cloud infrastructure, and custom AI integrations built to scale your business across the continent.',
  keywords: [
    'Techverge Africa Ltd',
    'Ghana software development',
    'Kumasi tech company',
    'Enterprise software Ghana',
    'Cloud computing Africa',
    'Artificial intelligence Africa',
    'IT consultancy Kumasi',
    'Digital transformation Africa',
  ],
  authors: [{ name: 'Techverge Africa Ltd', url: 'https://techverge.africa' }],
  creator: 'Techverge Africa Ltd',
  publisher: 'Techverge Africa Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: 'https://techverge.africa',
    siteName: 'Techverge Africa Ltd',
    title: 'Techverge Africa Ltd | Engineering the Future of African Enterprise',
    description:
      'Techverge Africa Ltd delivers production-grade software development, secure cloud infrastructure, and custom AI integrations built to scale your business across the continent.',
    images: [
      {
        url: '/images/logo.png',
        width: 563,
        height: 400,
        alt: 'Techverge Africa Ltd Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techverge Africa Ltd | Engineering the Future of African Enterprise',
    description:
      'Production-grade software development, secure cloud infrastructure, and custom AI integrations built for African enterprise.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${oswald.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-surface-0 text-ink font-sans antialiased flex flex-col">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-action-primary text-white font-semibold rounded-button"
        >
          Skip to main content
        </a>
        <PageLoader />
        <RevealObserver />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppBot />
      </body>
    </html>
  );
}
