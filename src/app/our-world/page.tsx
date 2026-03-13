import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';

export default function OurWorldPage() {
  return (
    <>
      {/* Section 1: Our Story */}
      <section className="pt-[160px] lg:pt-[196px] pb-24 lg:pb-32 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center">
          <FadeIn>
            <p className="font-pdp-title text-[14px] lg:text-[15px] text-ink leading-[1.8]">
              NEIWAI (ney·why), meaning &ldquo;inside and outside,&rdquo; was founded in Shanghai in 2012.
              We seamlessly blend aesthetics and functionality for styles that are &ldquo;Made To Live In.&rdquo;
              Our lingerie, loungewear, and activewear prioritize comfort that moves with you throughout your day.
              We unite the luxurious feel of our premium fabrics with innovative designs, fostering a state of
              ease and harmony, inside and out.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 2 & 3: Meet Barely Zero + A cleaner planet — side by side, text overlaid on image */}
      <section className="-mt-[10px] py-16 lg:py-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Meet Barely Zero — text on image */}
          <FadeIn>
            <Link href="/bras" className="group block">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/our-world/meet-barely-zero.png"
                  alt="Barely Zero wireless bras and underwear"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-charcoal/30" />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 lg:p-8 text-center font-pdp-title">
                  <h2 className="font-pdp-title text-[28px] lg:text-[36px] font-light text-cream leading-[1.25]">
                    Meet Barely Zero
                  </h2>
                  <p className="font-pdp-title text-[15px] lg:text-[16px] text-cream/90 mt-3 leading-relaxed max-w-[320px]">
                    Experience all-day comfort with our best-selling wireless bra collection.
                  </p>
                  <span className="font-pdp-title text-[13px] text-cream/80 mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Shop Barely Zero
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* A cleaner planet — text on image */}
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <Image
                src="/images/our-world/cleaner-planet.png"
                alt="Barely Zero sustainable packaging"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-charcoal/30" />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 lg:p-8 text-center font-pdp-title">
                <span className="font-pdp-title text-[11px] tracking-[0.14em] uppercase text-cream/70">
                  Sustainability
                </span>
                <h2 className="font-pdp-title text-[28px] lg:text-[36px] font-light text-cream mt-2 leading-[1.25]">
                  A cleaner planet
                </h2>
                <p className="font-pdp-title text-[15px] lg:text-[16px] text-cream/90 mt-3 leading-relaxed max-w-[320px]">
                  We carefully source materials from high-quality, eco-conscious suppliers like PrimaLoft®, VITA,
                  True Carbon Zero by TENCEL™ and other brands that share our commitment to a cleaner planet.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 5: Giving Back — centered, black Optima */}
      <section className="pt-16 lg:pt-24 pb-[144px] lg:pb-[176px] px-6 lg:px-20 max-w-[1440px] mx-auto">
        <FadeIn>
          <div className="max-w-[720px] mx-auto text-center font-pdp-title text-ink">
            <Overline className="font-pdp-title text-ink">Giving Back</Overline>
            <h2 className="font-pdp-title text-[28px] lg:text-[36px] font-light text-ink mt-4 leading-[1.25]">
              Supporting women&apos;s health and advancement
            </h2>
            <p className="font-pdp-title text-[16px] text-ink mt-6 leading-[1.8]">
              NEIWAI is proud to partner with organizations that support women&apos;s health and advancement.
              Some of our partners include:
            </p>
            <ul className="mt-8 space-y-6 text-center">
              <li className="font-pdp-title text-[15px] text-ink leading-relaxed">
                <span className="underline">I Support the Girls</span> collects and distributes bras,
                menstrual hygiene products, and other essentials to women experiencing homelessness or distress.
                Our NYC Store is a bra and menstrual hygiene product donation site for ISTG!
              </li>
              <li className="font-pdp-title text-[15px] text-ink leading-relaxed">
                <span className="underline">The Pink Agenda</span> raises money for breast cancer research
                and builds awareness of the disease among young professionals.
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* Section 6: The Atelier — full-width banner with all text overlaid */}
      <section className="font-pdp-title">
        <div className="relative w-full min-h-[72vh] overflow-hidden">
          <Image
            src="/images/our-world/atelier-banner.png"
            alt="The Atelier"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-between px-6 lg:px-20 py-16 lg:py-24">
            <div className="flex flex-col items-center w-full">
            <span className="font-pdp-title text-[14px] lg:text-[16px] font-medium tracking-[0.14em] uppercase text-white">
              The Atelier
            </span>
            <div className="mt-12 lg:mt-16 w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              <FadeIn delay={0.05}>
                <div>
                  <span className="font-pdp-title text-[12px] text-white/80 tracking-wide">01</span>
                  <h3 className="font-pdp-title text-[20px] lg:text-[24px] font-light text-white mt-2">
                    Material Research
                  </h3>
                  <p className="font-pdp-title text-[14px] lg:text-[15px] text-white/90 mt-4 leading-[1.7]">
                    We begin with fabric. Every season, our textile engineers test dozens of new fiber combinations
                    — seeking the perfect balance of stretch, recovery, breathability, and that unmistakable
                    &ldquo;barely there&rdquo; hand feel.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div>
                  <span className="font-pdp-title text-[12px] text-white/80 tracking-wide">02</span>
                  <h3 className="font-pdp-title text-[20px] lg:text-[24px] font-light text-white mt-2">
                    Pattern Engineering
                  </h3>
                  <p className="font-pdp-title text-[14px] lg:text-[15px] text-white/90 mt-4 leading-[1.7]">
                    Traditional pattern making meets computational design. Each silhouette is refined across hundreds
                    of iterations, eliminating every unnecessary seam and optimizing for invisible comfort.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div>
                  <span className="font-pdp-title text-[12px] text-white/80 tracking-wide">03</span>
                  <h3 className="font-pdp-title text-[20px] lg:text-[24px] font-light text-white mt-2">
                    Fit Testing
                  </h3>
                  <p className="font-pdp-title text-[14px] lg:text-[15px] text-white/90 mt-4 leading-[1.7]">
                    Every garment is tested on 30+ body types across our full size range. We adjust, retest, and
                    refine until the fit disappears — until the wearer forgets they&apos;re wearing anything at all.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div>
                  <span className="font-pdp-title text-[12px] text-white/80 tracking-wide">04</span>
                  <h3 className="font-pdp-title text-[20px] lg:text-[24px] font-light text-white mt-2">
                    Quality Assurance
                  </h3>
                  <p className="font-pdp-title text-[14px] lg:text-[15px] text-white/90 mt-4 leading-[1.7]">
                    Before a single piece reaches you, it passes through 12 quality checkpoints. We test for
                    colorfastness, fabric integrity, seam strength, and the subjective measure that matters most:
                    how does it feel?
                  </p>
                </div>
              </FadeIn>
            </div>
            </div>
            <blockquote className="font-pdp-title text-[14px] lg:text-[15px] font-light text-white/90 italic max-w-[640px] mx-auto text-center leading-[1.35] pb-6 lg:pb-8">
              &ldquo;Every piece begins with the question: can you feel nothing at all?&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
