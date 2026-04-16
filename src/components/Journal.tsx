import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    img: blog1,
    category: "Guides",
    title: "The South West Coast Path: A Walker's Guide",
    excerpt: "Discover the best sections of England's longest waymarked trail, from dramatic cliff-top walks to hidden coves.",
    date: "12 March 2026",
    readTime: "5 min read",
  },
  {
    img: blog2,
    category: "Things To Do",
    title: "Cornwall's Best Seafood Restaurants",
    excerpt: "From harbourside fish & chips to Michelin-starred dining, our guide to the finest seafood in Cornwall.",
    date: "28 February 2026",
    readTime: "4 min read",
  },
  {
    img: blog3,
    category: "Guides",
    title: "10 Secret Beaches Only Locals Know",
    excerpt: "Escape the crowds and discover Cornwall's most beautiful hidden beaches, accessible only to those in the know.",
    date: "15 February 2026",
    readTime: "6 min read",
  },
];

const Journal = () => (
  <section style={{ paddingTop: "6vw", paddingBottom: "6vw" }}>
    <div className="pc-container">
      <div className="text-center mb-[2.5vw]">
        <p
          className="text-sandy-gold text-xs mb-4"
          style={{ letterSpacing: "5px", textTransform: "uppercase" }}
        >
          The Journal
        </p>
        <h2 className="text-brand-dark" style={{ fontSize: "clamp(32px, 3vw, 42px)" }}>
          The Cornwall Journal
        </h2>
        <div className="gold-bar gold-bar--center" />
        <p className="text-brand-muted mt-6 max-w-[600px] mx-auto">
          Guides, inspiration and local knowledge
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2.5vw]">
        {posts.map((p) => (
          <a key={p.title} href="#" className="block border-b-2 border-sandy-gold cursor-pointer group">
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <span
                className="absolute top-4 left-4 bg-white border-2 border-sandy-gold px-3 py-1 text-xs text-brand-dark"
                style={{ textTransform: "uppercase", letterSpacing: "3px" }}
              >
                {p.category}
              </span>
            </div>
            <div className="pt-5 pb-6">
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 22,
                  fontWeight: 400,
                  color: "#3a3a3a",
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p className="text-brand-body mt-3 leading-relaxed line-clamp-2" style={{ fontSize: 15, lineHeight: 1.6 }}>
                {p.excerpt}
              </p>
              <div className="flex items-center gap-0 mt-4">
                <span
                  className="text-brand-muted"
                  style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "3px" }}
                >
                  {p.date}
                </span>
                <span className="text-brand-muted mx-2" style={{ fontSize: 12 }}>•</span>
                <span
                  className="text-brand-muted"
                  style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "3px" }}
                >
                  {p.readTime}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-[2.5vw]">
        <button className="btn-flat">Explore The Journal</button>
      </div>
    </div>
  </section>
);

export default Journal;
