import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://coursebot.com'),
  title: 'CourseBot - AI Student Support Assistant for Online Educators',
  description: 'Stop answering the same questions. CourseBot gives your students instant 24/7 answers while giving you back 10+ hours every week. Train it once, it handles 80% of questions forever.',
  keywords: ['AI student support', 'course creator tools', 'online education', 'student questions automation', 'LMS integration', 'course support chatbot'],
  authors: [{ name: 'CourseBot' }],
  creator: 'CourseBot',
  publisher: 'CourseBot',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coursebot.com',
    title: 'CourseBot - AI Student Support Assistant for Online Educators',
    description: 'Stop answering the same questions. CourseBot gives your students instant 24/7 answers while giving you back 10+ hours every week.',
    siteName: 'CourseBot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CourseBot - AI Student Support Assistant for Online Educators',
    description: 'Stop answering the same questions. CourseBot gives your students instant 24/7 answers while giving you back 10+ hours every week.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
