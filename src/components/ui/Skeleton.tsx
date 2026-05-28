interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-white/[0.04] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/[0.06] before:to-transparent before:animate-[shimmer_1.5s_infinite] ${className}`}
      aria-hidden="true"
    />
  );
}
