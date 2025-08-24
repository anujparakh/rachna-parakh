import Image from 'next/image';
import LinkButton from './LinkButton';

interface AboutSectionProps {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  aboutImage: {
    src: string;
    alt: string;
  };
  ctaButton: {
    text: string;
    href: string;
  };
}

export default function AboutSection({
  title,
  subtitle,
  paragraphs,
  aboutImage,
  ctaButton,
}: AboutSectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Content Column */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-heading mb-6 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-body/80 mb-6 font-light">
              {subtitle}
            </p>
          )}

          <div className="space-y-6 text-lg md:text-xl text-body leading-relaxed font-thin">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <LinkButton href={ctaButton.href}>{ctaButton.text}</LinkButton>
          </div>
        </div>

        {/* Image Column */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
