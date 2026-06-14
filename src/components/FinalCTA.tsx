export default function FinalCTA() {
  return (
    <section className={`relative overflow-hidden bg-bg-deep py-16 md:py-20`}>
      <div className={`relative mx-auto max-w-[1200px] px-6 lg:px-10`}>
        <div className={`bg-bg-surface p-8 md:p-12 lg:p-16`}>
          <p
            className={`mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-accent`}
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Start shipping
          </p>
          <h2
            className={`max-w-3xl text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-text-primary md:text-5xl lg:text-6xl`}
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Ready to wake up launched?
          </h2>
          <p className={`mt-6 max-w-2xl text-[16px] leading-[1.7] text-text-secondary md:text-[17px]`}>
            Turn your next idea into a live product overnight. No credit card, no setup — just describe what you want shipped.
          </p>
          <div className={`mt-8 flex flex-wrap items-center gap-4`}>
            <a
              href={`#`}
              className={`inline-flex items-center gap-2 bg-accent px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent/90`}
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Start building for free
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
