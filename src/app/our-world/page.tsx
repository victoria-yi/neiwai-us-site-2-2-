import FadeIn from '@/components/ui/FadeIn';

export default function OurWorldPage() {
  return (
    <>
      {/* Hero — preview style with background image */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-[120px] lg:pt-[160px] pb-24"
        style={{
          backgroundImage: 'url(/images/our-world/hero-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 w-full flex flex-col items-center text-center">
          <FadeIn delay={0.2} duration={1}>
            <div className="font-chinese-serif text-[clamp(3rem,6vw,5rem)] font-light tracking-[0.4em] text-white mb-6 ml-[25px]">
              内外
            </div>
          </FadeIn>
          <FadeIn delay={0.5} duration={1}>
            <h1 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-light italic text-white tracking-wide mb-8 ml-[10px]">
              Inside and Outside
            </h1>
          </FadeIn>
          <FadeIn delay={0.7} duration={1}>
            <div className="w-10 h-px bg-white/60 mx-auto mb-8" />
          </FadeIn>
          <FadeIn delay={0.9} duration={1}>
            <p className="font-body text-[15px] font-light text-white/90 max-w-[480px] leading-[1.8] mx-auto">
              Born from a philosophy of duality.
              <br />
              Designed for the space between.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy + Shanghai (top) + Considered Practices (below) */}
      <section className="bg-[#F5F5F5] py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          {/* Our Philosophy + Shanghai — centered editorial */}
          <FadeIn>
            <div className="max-w-[640px] mx-auto text-center">
              <p className="font-body text-[11px] tracking-[0.25em] uppercase text-prose mb-6">
                Our Philosophy
              </p>
              <h2 className="font-display text-[clamp(1.75rem,2.5vw,2.25rem)] font-light leading-[1.4] text-ink mb-12 tracking-wide">
                The harmony between inner comfort and outer beauty
              </h2>
              <div className="space-y-8 text-[15px] leading-[2.1] text-prose text-center">
                <p>
                  NEIWAI (内外) was founded with a simple belief: the relationship between what we
                  wear closest to our skin and how we move through the world is more intimate than
                  fashion acknowledges.
                </p>
                <p>
                  内 (nèi) means <em>inside</em> — the private self, the body as it truly is, the
                  comfort that begins at the skin. 外 (wài) means <em>outside</em> — the world we
                  meet each day, the confidence that radiates from genuine comfort.
                </p>
                <p>
                  Between these two characters lives our purpose: to dissolve the boundary between
                  inside and outside, creating garments so attuned to the body that they become an
                  extension of self. Not armor. Not decoration. A second skin.
                </p>
              </div>
              <div className="mt-14 pt-10 border-t border-stone/40">
                <p className="text-[15px] leading-[2.1] text-prose italic text-center max-w-[520px] mx-auto">
                  From our atelier in Shanghai, we design intimates defined by restraint, material
                  obsession, and the pursuit of the invisible — garments so attuned to the body they
                  disappear entirely.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Considered Practices — below Philosophy, numbered cards */}
          <FadeIn delay={0.1}>
            <div className="mt-20 lg:mt-28 text-center">
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-prose mb-10">
                Considered Practices
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-7 rounded-sm bg-white/60 border border-stone/20">
                  <span className="font-body text-[11px] text-stone/80 tracking-widest mb-3 block">01</span>
                  <h3 className="font-body text-[13px] font-medium tracking-[0.1em] uppercase text-ink mb-3">
                    Materials
                  </h3>
                  <p className="font-body text-[13px] font-light leading-[1.85] text-prose">
                    OEKO-TEX certified fabrics sourced from partners who share our standards —
                    PrimaLoft®, VITA, and True Carbon Zero by TENCEL™ among them. Recycled nylon in
                    select products.
                  </p>
                </div>
                <div className="p-7 rounded-sm bg-white/60 border border-stone/20">
                  <span className="font-body text-[11px] text-stone/80 tracking-widest mb-3 block">02</span>
                  <h3 className="font-body text-[13px] font-medium tracking-[0.1em] uppercase text-ink mb-3">
                    Manufacturing
                  </h3>
                  <p className="font-body text-[13px] font-light leading-[1.85] text-prose">
                    Partner factories audited annually for fair labor practices. Zero-waste cutting
                    patterns reduce textile waste by 15%. FSC-certified, plastic-free packaging
                    throughout.
                  </p>
                </div>
                <div className="p-7 rounded-sm bg-white/60 border border-stone/20">
                  <span className="font-body text-[11px] text-stone/80 tracking-widest mb-3 block">03</span>
                  <h3 className="font-body text-[13px] font-medium tracking-[0.1em] uppercase text-ink mb-3">
                    Community
                  </h3>
                  <p className="font-body text-[13px] font-light leading-[1.85] text-prose">
                    We partner with organizations advancing women&apos;s health and dignity —
                    including I Support the Girls, which distributes essential intimates to women in
                    crisis, and The Pink Agenda, funding breast cancer research and awareness.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </>
  );
}
