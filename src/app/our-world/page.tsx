import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';

export default function OurWorldPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-[120px] lg:pt-[160px] pb-24">
        <FadeIn delay={0.2} duration={1}>
          <div className="font-display text-[clamp(3rem,6vw,5rem)] font-light tracking-[0.4em] text-ink mb-6">
            内外
          </div>
        </FadeIn>
        <FadeIn delay={0.5} duration={1}>
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-light italic text-prose tracking-wide mb-8">
            Inside and Outside
          </h1>
        </FadeIn>
        <FadeIn delay={0.7} duration={1}>
          <div className="w-10 h-px bg-stone mb-8" />
        </FadeIn>
        <FadeIn delay={0.9} duration={1}>
          <p className="font-body text-[15px] font-light text-prose max-w-[480px] leading-[1.8]">
            Born from a philosophy of duality.
            <br />
            Designed for the space between.
          </p>
        </FadeIn>
        <FadeIn delay={1} duration={1}>
          <div className="w-px h-20 bg-gradient-to-b from-transparent to-stone mt-16" />
        </FadeIn>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 px-6 lg:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeIn>
            <div>
              <div className="font-body text-[11px] tracking-[0.2em] uppercase text-prose mb-8">
                Our Philosophy
              </div>
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.3] text-ink mb-8">
                The harmony between inner comfort and outer beauty
              </h2>
              <div className="space-y-6">
                <p className="font-body text-[15px] font-light leading-[1.9] text-prose">
                  NEIWAI (内外) was founded with a simple belief: the relationship between what we wear
                  closest to our skin and how we move through the world is more intimate than fashion
                  acknowledges.
                </p>
                <p className="font-body text-[15px] font-light leading-[1.9] text-prose">
                  内 (nèi) means <em>inside</em> — the private self, the body as it truly is, the
                  comfort that begins at the skin. 外 (wài) means <em>outside</em> — the world we meet
                  each day, the confidence that radiates from genuine comfort.
                </p>
                <p className="font-body text-[15px] font-light leading-[1.9] text-prose">
                  Between these two characters lives our purpose: to dissolve the boundary between
                  inside and outside, creating garments so attuned to the body that they become an
                  extension of self. Not armor. Not decoration. A second skin.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/our-world/meet-barely-zero.png"
                  alt="NEIWAI — Inside and Outside"
                  fill
                  className="object-cover object-[30%_center] grayscale-[15%] contrast-[0.95]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 70%, rgba(246,244,240,0.3))',
                  }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center items-center py-8">
        <div className="w-[60px] h-px bg-stone" />
      </div>

      {/* Shanghai */}
      <FadeIn>
        <div className="max-w-[680px] mx-auto text-left px-6 lg:px-20 py-12 lg:py-16">
          <p className="font-body text-[15px] font-light leading-[2] text-prose">
            From our atelier in Shanghai, we design intimates defined by restraint, material
            obsession, and the pursuit of the invisible — garments so attuned to the body they
            disappear entirely.
          </p>
        </div>
      </FadeIn>

      {/* Shanghai Image */}
      <FadeIn>
        <div className="relative w-full h-[65vh] min-h-[420px] overflow-hidden">
          <Image
            src="/images/our-world/cleaner-planet.png"
            alt="Shanghai"
            fill
            className="object-cover grayscale-[30%] contrast-[0.9] brightness-[0.92]"
            sizes="100vw"
          />
        </div>
      </FadeIn>

      {/* Atelier Hero */}
      <FadeIn>
        <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden flex items-end">
          <Image
            src="/images/our-world/atelier-banner.png"
            alt="The NEIWAI Atelier, Shanghai"
            fill
            className="object-cover grayscale-[20%] contrast-[0.9] brightness-[0.85]"
            sizes="100vw"
          />
          <div className="relative z-10 p-12 lg:p-16">
            <div className="font-body text-[11px] tracking-[0.2em] uppercase text-white/60 mb-4">
              The Atelier
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-light text-white tracking-wide leading-tight">
              Where material science
              <br />
              meets intention
            </h2>
          </div>
        </div>
      </FadeIn>

      {/* Practices */}
      <section className="bg-sand py-16 lg:py-24 px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="font-body text-[11px] tracking-[0.2em] uppercase text-prose text-center mb-12">
              Considered Practices
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <FadeIn delay={0.05}>
              <div>
                <h3 className="font-body text-[13px] font-medium tracking-[0.1em] uppercase text-ink mb-4">
                  Materials
                </h3>
                <p className="font-body text-[14px] font-light leading-[1.8] text-prose">
                  OEKO-TEX certified fabrics sourced from partners who share our standards —
                  PrimaLoft®, VITA, and True Carbon Zero by TENCEL™ among them. Recycled nylon in
                  select products.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <h3 className="font-body text-[13px] font-medium tracking-[0.1em] uppercase text-ink mb-4">
                  Manufacturing
                </h3>
                <p className="font-body text-[14px] font-light leading-[1.8] text-prose">
                  Partner factories audited annually for fair labor practices. Zero-waste cutting
                  patterns reduce textile waste by 15%. FSC-certified, plastic-free packaging
                  throughout.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <h3 className="font-body text-[13px] font-medium tracking-[0.1em] uppercase text-ink mb-4">
                  Community
                </h3>
                <p className="font-body text-[14px] font-light leading-[1.8] text-prose">
                  We partner with organizations advancing women&apos;s health and dignity —
                  including I Support the Girls, which distributes essential intimates to women in
                  crisis, and The Pink Agenda, funding breast cancer research and awareness.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Links */}
      <section className="py-16 lg:py-24 px-6 lg:px-20 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            <Link
              href="/bras"
              className="font-body text-[13px] tracking-wide text-ink hover:text-accent transition-colors"
            >
              Shop Bras
            </Link>
            <Link
              href="/our-world/atelier"
              className="font-body text-[13px] tracking-wide text-ink hover:text-accent transition-colors"
            >
              The Atelier
            </Link>
            <Link
              href="/our-world/journal"
              className="font-body text-[13px] tracking-wide text-ink hover:text-accent transition-colors"
            >
              Journal
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
