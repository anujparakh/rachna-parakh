interface PhilosophyItem {
  title: string;
  description: string;
}

interface PhilosophySectionProps {
  title: string;
  items: PhilosophyItem[];
}

export default function PhilosophySection({
  title,
  items,
}: PhilosophySectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extralight text-heading mb-8">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-bold text-heading mb-4">
                {item.title}
              </h3>
              <p className="text-body font-thin leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
