const trustItems = [
  "NC Licensed P-1 Contractor",
  "Insured & Bonded",
  "Family-Owned",
  "Military & Veteran Discount",
  "24/7 Emergency Service",
];

export default function TrustBar() {
  return (
    <div className="bg-[#1B3A5C] py-4 border-y border-[#E8651A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {trustItems.map((item) => (
            <li key={item} className="flex items-center gap-2 text-white text-sm font-medium">
              <span className="text-[#22C55E] font-bold">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
