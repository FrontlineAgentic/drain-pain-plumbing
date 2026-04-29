interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[#0A1628] pt-16 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {label && (
          <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-widest mb-4">
            {label}
          </p>
        )}
        <h1
          className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-xl max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
