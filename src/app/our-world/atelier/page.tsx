import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';

const atelierImages = [
  'https://neiwai.life/cdn/shop/files/20250908-104140.jpg?v=1757353319&width=1200',
  'https://neiwai.life/cdn/shop/files/20250908-104305.jpg?v=1757370825&width=1200',
  'https://neiwai.life/cdn/shop/files/20250908-131826.png?v=1757362737&width=1200',
  'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI158792.jpg?v=1764127456&width=1200',
];

export default function AtelierPage() {
  const atelierSteps = [
    {
      title: 'Material Research',
      description: 'We begin with fabric. Every season, our textile engineers test dozens of new fiber combinations — seeking the perfect balance of stretch, recovery, breathability, and that unmistakable "barely there" hand feel.',
      image: atelierImages[0],
    },
    {
      title: 'Pattern Engineering',
      description: 'Traditional pattern making meets computational design. Each silhouette is refined across hundreds of iterations, eliminating every unnecessary seam and optimizing for invisible comfort.',
      image: atelierImages[1],
    },
    {
      title: 'Fit Testing',
      description: 'Every garment is tested on 30+ body types across our full size range. We adjust, retest, and refine until the fit disappears — until the wearer forgets they\'re wearing anything at all.',
      image: atelierImages[2],
    },
    {
      title: 'Quality Assurance',
      description: 'Before a single piece reaches you, it passes through 12 quality checkpoints. We test for colorfastness, fabric integrity, seam strength, and the subjective measure that matters most: how does it feel?',
      image: atelierImages[3],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden flex items-end">
        <Image
          src="https://neiwai.life/cdn/shop/files/20250908-104140.jpg?v=1757353319&width=1920"
          alt="The NEIWAI Atelier"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/15 to-transparent" />

        <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-20 pb-16">
          <FadeIn>
            <Overline className="text-cream/60">Our World</Overline>
            <h1 className="font-display text-[40px] lg:text-[56px] font-light text-cream mt-3 leading-[1.1]">
              The Atelier
            </h1>
            <p className="font-body text-[16px] text-cream/70 mt-3 max-w-[480px]">
              Behind every garment, a process of obsessive refinement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 lg:py-40 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="space-y-24 lg:space-y-40">
          {atelierSteps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-20 items-center`}
            >
              <FadeIn className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>

              <div className="w-full lg:w-1/2">
                <FadeIn delay={0.1}>
                  <span className="font-body text-[12px] text-taupe tracking-wide">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-[28px] lg:text-[36px] font-light text-ink mt-2">
                    {step.title}
                  </h2>
                  <p className="font-body text-[15px] text-taupe mt-4 leading-[1.8] max-w-[440px]">
                    {step.description}
                  </p>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-24 lg:py-32 px-6 text-center bg-sand/30">
        <FadeIn>
          <blockquote className="font-display text-[28px] lg:text-[40px] font-light text-ink italic max-w-[700px] mx-auto leading-[1.35]">
            &ldquo;Every piece begins with the question: can you feel nothing at all?&rdquo;
          </blockquote>
        </FadeIn>
      </section>
    </>
  );
}
