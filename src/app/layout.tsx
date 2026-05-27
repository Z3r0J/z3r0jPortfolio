import type { Metadata } from 'next';
import { Barlow, Lato, Poppins } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import BootstrapClient from '@/components/BootstrapClient';
import Menu from '@/components/Menu/Menu';
import LangProvider from '@/providers/LangProvider';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-barlow',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lato',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: '<Jean Carlos/>',
  description: 'Portfolio of Jean Carlos Reyes',
  icons: { icon: '/icon_jc.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${lato.variable} ${poppins.variable}`}>
      <body className="min-vh-100" style={{ fontFamily: 'var(--font-barlow), Noto Color Emoji, sans-serif' }}>
        <LangProvider>
          <BootstrapClient />
          <Menu />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
