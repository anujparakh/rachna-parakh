interface PortfolioTextSectionProps {
  title: string;
  content: string;
  maxWidth?: 'max-w-2xl' | 'max-w-3xl' | 'max-w-4xl';
  titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
}

export default function PortfolioTextSection({
  title,
  content,
  maxWidth = 'max-w-2xl',
  titleSize = 'text-2xl',
}: PortfolioTextSectionProps) {
  return (
    <section className="mb-16">
      <h3
        className={`${titleSize} font-semibold text-foreground mb-6 text-center text-heading`}
      >
        {title}
      </h3>
      <div className={`${maxWidth} mx-auto`}>
        <p className="text-muted-foreground text-left text-body">{content}</p>
      </div>
    </section>
  );
}
