import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | <Jean Carlos/>',
  description: 'Portfolio projects by Jean Carlos Reyes',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
