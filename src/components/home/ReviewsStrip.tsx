import { fetchGoogleReviews } from "@/lib/places";

export const revalidate = 86400;

export default async function ReviewsStrip() {
  const reviews = await fetchGoogleReviews();

  if (reviews.length === 0) return null;

  return (
    <section className="py-20 bg-[#080f1e] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] to-[#080f1e] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <p className="text-[#E8651A] font-semibold text-sm uppercase tracking-[0.25em] mb-3">Reviews</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Jacksonville Homeowners Say
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-400 text-xl">★</span>
            ))}
            <span className="ml-2 text-white/40 text-sm">Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div key={i} className="reveal bg-white/4 border border-white/8 rounded-2xl p-6 hover:bg-white/6 hover:border-white/15 transition-all">
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {review.profile_photo_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#E8651A]/20 border border-[#E8651A]/30 flex items-center justify-center text-[#E8651A] text-xs font-bold">
                    {review.author_name[0]}
                  </div>
                )}
                <div>
                  <p className="text-white font-semibold text-sm">{review.author_name}</p>
                  <p className="text-white/35 text-xs">{review.relative_time_description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
