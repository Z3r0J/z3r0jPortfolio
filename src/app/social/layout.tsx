import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social | <Jean Carlos/>',
  description: 'Social media links for Jean Carlos Reyes',
};

export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
