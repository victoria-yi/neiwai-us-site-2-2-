import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import TextLink from '@/components/ui/TextLink';

export default function OurWorldPage() {
  return (
    <>
      {/* Section 1: Opening — Full-bleed hero */}
      <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden flex items-end">
        <Image
          src="https://neiwai.life/cdn/shop/files/AboutUs_min.png?v=1722883181&width=1920"
          alt="NEIWAI — Inside and Outside"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-charcoal/10" />

        <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-20 pb-16 lg:pb-24">
          <FadeIn>
            <p className="font-display text-[64px] lg:text-[96px] font-light text-cream/30 leading-none">
              内外
            </p>
            <h1 className="font-display text-[36px] lg:text-[52px] font-light text-cream mt-2 leading-[1.1]">
              Inside and Outside
            </h1>
            <p className="font-body text-[16px] text-cream/70 mt-4 max-w-[400px]">
              Born from a philosophy of duality. Designed for the space between.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2: Philosophy — Scrolling narrative */}
      <section className="py-24 lg:py-40 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-[720px] mx-auto">
          <FadeIn>
            <Overline>Our Philosophy</Overline>
            <h2 className="font-display text-[32px] lg:text-[44px] font-light text-ink mt-6 leading-[1.2]">
              The harmony between inner comfort and outer beauty
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-body text-[16px] text-taupe mt-10 leading-[1.8]">
              NEIWAI (内外) was founded in 2012 with a simple belief: 
              the relationship between what we wear closest to our skin and how we 
              move through the world is more intimate than fashion acknowledges.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-body text-[16px] text-taupe mt-6 leading-[1.8]">
              内 (nèi) means &ldquo;inside&rdquo; — the private self, the body as it truly is, 
              the comfort that begins at the skin. 外 (wài) means &ldquo;outside&rdquo; — the 
              world we meet each day, the confidence that radiates from genuine comfort.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-body text-[16px] text-taupe mt-6 leading-[1.8]">
              Between these two characters lives our purpose: to dissolve the boundary 
              between inside and outside, creating garments so attuned to the body that 
              they become an extension of self. Not armor. Not decoration. A second skin.
            </p>
          </FadeIn>
        </div>

        {/* Full-width image break */}
        <FadeIn delay={0.1}>
          <div className="mt-20 lg:mt-32 relative h-[40vh] lg:h-[50vh] overflow-hidden">
            <Image
              src="https://neiwai.life/cdn/shop/files/20250908-104140.jpg?v=1757353319&width=1920"
              alt="NEIWAI atelier and design process"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </FadeIn>

        <div className="max-w-[720px] mx-auto mt-20 lg:mt-32">
          <FadeIn>
            <h2 className="font-display text-[28px] lg:text-[36px] font-light text-ink leading-[1.25]">
              An Eastern design sensibility
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-body text-[16px] text-taupe mt-8 leading-[1.8]">
              NEIWAI draws from a tradition of contrasts held in exquisite tension: 
              traditional and modern, Eastern and Western, intimate and cosmopolitan. 
              A design language defined by restraint, material obsession, and quiet 
              confidence — born where ancient craft meets contemporary vision.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-body text-[16px] text-taupe mt-6 leading-[1.8]">
              We don&apos;t chase trends. We pursue the invisible: the perfect weight of 
              fabric against skin, the seamless construction that eliminates awareness 
              of wearing anything at all, the color palette that harmonizes with every 
              skin tone and every wardrobe.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 3: The Atelier */}
      <section className="py-24 lg:py-40 bg-sand/30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <FadeIn className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://neiwai.life/cdn/shop/files/20250908-104305.jpg?v=1757370825&width=1200"
                  alt="NEIWAI Atelier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <div className="w-full lg:w-1/2">
              <FadeIn>
                <Overline>The Atelier</Overline>
                <h2 className="font-display text-[28px] lg:text-[36px] font-light text-ink mt-4 leading-[1.25]">
                  Where material science meets intention
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="font-body text-[15px] text-taupe mt-6 leading-[1.8]">
                  Every NEIWAI garment begins in our atelier, where textile 
                  engineers and pattern makers work side by side. The Barely Zero fabric 
                  took two years of development — testing hundreds of nylon-spandex blends 
                  to find the one that delivers four-way stretch, moisture management, and 
                  that signature &ldquo;nothing there&rdquo; feeling.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="font-body text-[15px] text-taupe mt-4 leading-[1.8]">
                  Every piece begins with the question: can you feel nothing at all?
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="mt-8">
                  <TextLink href="/our-world/atelier">Visit the Atelier</TextLink>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Sustainability */}
      <section className="py-24 lg:py-40 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-[720px] mx-auto">
          <FadeIn>
            <Overline>Considered Practices</Overline>
            <h2 className="font-display text-[28px] lg:text-[36px] font-light text-ink mt-4">
              Made with intention
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="font-body text-[13px] font-medium tracking-wide text-ink mb-3">
                  Materials
                </h3>
                <p className="font-body text-[14px] text-taupe leading-relaxed">
                  Responsibly sourced fabrics with OEKO-TEX certification. 
                  Our Barely Zero fabric uses recycled nylon in select colorways.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h3 className="font-body text-[13px] font-medium tracking-wide text-ink mb-3">
                  Manufacturing
                </h3>
                <p className="font-body text-[14px] text-taupe leading-relaxed">
                  Partner factories audited annually for fair labor practices. 
                  Zero-waste cutting patterns reduce textile waste by 15%.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="font-body text-[13px] font-medium tracking-wide text-ink mb-3">
                  Packaging
                </h3>
                <p className="font-body text-[14px] text-taupe leading-relaxed">
                  FSC-certified packaging. Plastic-free shipping materials. 
                  Compostable garment bags made from cornstarch.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
