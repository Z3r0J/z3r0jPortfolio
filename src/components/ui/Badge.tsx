interface BadgeProps {
  children: React.ReactNode;
  color?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'pink' | 'blue' | 'default';
  className?: string;
}

const colorMap: Record<string, string> = {
  cyan: 'bg-accent-cyan-muted text-accent-cyan border-accent-cyan/20',
  purple: 'bg-accent-purple-muted text-accent-purple border-accent-purple/20',
  emerald: 'bg-accent-emerald-muted text-accent-emerald border-accent-emerald/20',
  amber: 'bg-accent-amber-muted text-accent-amber border-accent-amber/20',
  pink: 'bg-accent-pink-muted text-accent-pink border-accent-pink/20',
  blue: 'bg-accent-blue-muted text-accent-blue border-accent-blue/20',
  default: 'bg-white/5 text-text-secondary border-white/10',
};

export default function Badge({ children, color = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
