const trustItems = [
  "NC Licensed P-1 Contractor",
  "Insured & Bonded",
  "Family-Owned",
  "Military & Veteran Discount",
  "24/7 Emergency Service",
];

export default function TrustBar() {
  return (
    <div className="bg-[#080f1e] py-4 border-y border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {trustItems.map((item) => (
            <li key={item} className="flex items-center gap-2 text-white/60 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
