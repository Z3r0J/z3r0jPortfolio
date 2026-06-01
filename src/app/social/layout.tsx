import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect | Jean Carlos Reyes',
  description: 'Link in bio - all my social media in one place',
};

export default function SocialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
