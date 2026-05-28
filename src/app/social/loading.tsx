import { Container, GlassCard, Skeleton } from '@/components/ui';

export default function SocialLoading() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pt-28">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent-cyan/10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-purple/10 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-md mx-auto">
          {/* Profile */}
          <div className="flex flex-col items-center text-center mb-10">
            {/* Photo */}
            <div className="relative mb-6">
              <Skeleton className="h-32 w-32 sm:h-36 sm:w-36 rounded-full" />
            </div>
            {/* Name */}
            <Skeleton className="h-8 w-56 mb-3" />
            {/* Title */}
            <Skeleton className="h-4 w-64 mb-2" />
            {/* Tagline subtitle */}
            <Skeleton className="h-3 w-48" />
          </div>

          {/* Tagline pill */}
          <div className="flex justify-center mb-6">
            <Skeleton className="h-7 w-40 rounded-full" />
          </div>

          {/* Link cards */}
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <GlassCard key={i} hover={false} className="p-4 flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-xl shrink-0" />
                <div className="flex-1 min-w-0 space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-40" />
                </div>
                <Skeleton className="h-4 w-4 rounded-full shrink-0" />
              </GlassCard>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Skeleton className="h-4 w-32 mx-auto" />
          </div>
        </div>
      </Container>
    </main>
  );
}
