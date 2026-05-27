import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-8xl font-bold gradient-text">404</h1>
      <p className="text-xl text-text-secondary">Page not found</p>
      <Link
        href="/"
        className="rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/20"
      >
        Go Home
      </Link>
    </div>
  );
}
