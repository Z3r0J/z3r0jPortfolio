import Container from './Container';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export default function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      {fullWidth ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
