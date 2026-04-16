const Newsletter = () => (
  <section className="pc-section bg-brand-light">
    <div className="pc-container">
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="text-brand-dark" style={{ fontSize: "clamp(32px, 3vw, 42px)" }}>
          Cornwall Inspiration, Delivered
        </h2>
        <div className="gold-bar gold-bar--center" />
        <p className="text-brand-muted mt-6">
          Join our newsletter for seasonal guides and exclusive property previews
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent border-0 border-b-2 border-sandy-gold text-brand-dark px-2 py-3 outline-none placeholder:text-brand-muted text-base"
          />
          <button className="btn-flat">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;
