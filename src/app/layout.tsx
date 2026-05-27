import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Menu from '@/components/Menu/Menu';
import LangProvider from '@/providers/LangProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Jean Carlos Reyes | Fullstack .NET Developer',
  description:
    'Portfolio of Jean Carlos Reyes - Application Development Engineer at Banco de Reservas. Specializing in C#, .NET, React, Next.js, and Node.js. Based in Dominican Republic.',
  keywords: [
    'fullstack developer',
    '.NET developer',
    'React developer',
    'C#',
    'Node.js',
    'portfolio',
    'Dominican Republic',
    'software engineer',
    'Banco de Reservas',
  ],
  authors: [{ name: 'Jean Carlos Reyes', url: 'https://jreyes.vercel.app' }],
  creator: 'Jean Carlos Reyes',
  icons: { icon: '/icon_jc.png' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jreyes.vercel.app',
    title: 'Jean Carlos Reyes | Fullstack .NET Developer',
    description:
      'Application Development Engineer at Banco de Reservas. Building high-quality applications with C#, React, and Node.js.',
    siteName: 'Jean Carlos Reyes Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jean Carlos Reyes | Fullstack .NET Developer',
    description:
      'Application Development Engineer at Banco de Reservas. Building high-quality applications with C#, React, and Node.js.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased">
        <LangProvider>
          <Menu />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
