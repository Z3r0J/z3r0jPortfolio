import { Container, Skeleton } from '@/components/ui';

export default function Loading() {
  return (
    <main>
      {/* Hero skeleton */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background gradient orbs (decorative, no animation) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent-cyan/10 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-purple/10 blur-[100px]" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Greeting */}
            <Skeleton className="h-6 w-72 max-w-full mb-6" />

            {/* Name - two big lines */}
            <Skeleton className="h-16 sm:h-20 md:h-24 w-3/4 mb-3" />
            <Skeleton className="h-16 sm:h-20 md:h-24 w-1/2 mb-6" />

            {/* Title */}
            <Skeleton className="h-7 w-80 max-w-full mb-8" />

            {/* Description lines */}
            <div className="space-y-3 mb-10 max-w-2xl">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Skeleton className="h-12 w-full sm:w-48 rounded-full" />
              <Skeleton className="h-12 w-full sm:w-40 rounded-full" />
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap items-center gap-3">
              <Skeleton className="h-4 w-12" />
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-7 w-16 rounded-full" />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
