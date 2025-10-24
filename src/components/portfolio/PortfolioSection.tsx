interface PortfolioSectionProps {
  title: string;
  titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
  children: React.ReactNode;
  className?: string;
}

export default function PortfolioSection({
  title,
  children,
  className = '',
  titleSize = 'text-2xl',
}: PortfolioSectionProps) {
  const titleBottomMargin =
    titleSize === 'text-2xl'
      ? 'mb-6'
      : titleSize === 'text-3xl'
        ? 'mb-8'
        : 'mb-10';
  return (
    <section className={`mb-16 ${className}`}>
      <h3
        className={`${titleSize} font-semibold text-foreground ${titleBottomMargin} text-center`}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}
