interface GradientTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  className?: string;
}

export default function GradientText({
  children,
  as: Tag = 'span',
  className = '',
}: GradientTextProps) {
  return <Tag className={`gradient-text ${className}`}>{children}</Tag>;
}
