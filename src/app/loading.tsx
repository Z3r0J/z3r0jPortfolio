export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-glass-border border-t-accent-cyan animate-spin" />
        <span className="text-sm text-text-secondary font-mono">Loading...</span>
      </div>
    </div>
  );
}
