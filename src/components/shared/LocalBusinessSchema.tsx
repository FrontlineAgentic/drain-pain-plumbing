export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Drain Pain Plumbing",
    telephone: "+19105421263",
    url: "https://www.drainpainplumbing.com",
    logo: "https://www.drainpainplumbing.com/images/logo.png",
    image: "https://www.drainpainplumbing.com/images/logo.png",
    description:
      "Licensed plumber serving Jacksonville NC, Camp Lejeune, Richlands, Sneads Ferry, and Swansboro. Drain cleaning, hydro-jetting, water heaters, 24/7 emergency service.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jacksonville",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: [
      "Jacksonville, NC",
      "Richlands, NC",
      "Camp Lejeune, NC",
      "Sneads Ferry, NC",
      "Swansboro, NC",
    ],
    openingHours: "Mo-Su 00:00-24:00",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
