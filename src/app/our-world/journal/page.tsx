import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';

const journalEntries = [
  {
    title: 'The Barely Zero Story: Two Years in the Making',
    excerpt: 'How a small Shanghai lab tested over 200 fabric blends to create the textile that would become our signature.',
    date: 'January 2026',
    category: 'Innovation',
    image: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=1200',
    aspect: 'aspect-[16/10]',
  },
  {
    title: 'Morning Rituals: Dressing from the Inside Out',
    excerpt: 'On the philosophy of dressing from the inside out, and why the first thing you put on shapes everything after.',
    date: 'December 2025',
    category: 'Conversations',
    image: 'https://neiwai.life/cdn/shop/files/20210702NEIWAI00061.jpg?v=1729636421&width=800',
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Shanghai to New York: Designing for Two Worlds',
    excerpt: 'Navigating cultural sensibilities in intimate apparel — and finding universals in comfort.',
    date: 'November 2025',
    category: 'Culture',
    image: 'https://neiwai.life/cdn/shop/files/AboutUs_min.png?v=1722883181&width=800',
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'The Art of Invisible Construction',
    excerpt: 'A visual essay on the seam engineering behind our bestselling Anchored Cup bra.',
    date: 'October 2025',
    category: 'Craft',
    image: 'https://neiwai.life/cdn/shop/files/20250908-104140.jpg?v=1757353319&width=1200',
    aspect: 'aspect-[16/10]',
  },
];

export default function JournalPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 lg:px-20 max-w-[1440px] mx-auto">
        <FadeIn>
          <Overline>Our World</Overline>
          <h1 className="font-display text-[40px] lg:text-[56px] font-light text-ink mt-4 leading-[1.1]">
            Journal
          </h1>
          <p className="font-body text-[16px] text-taupe mt-4 max-w-[480px]">
            Stories from the studio. Conversations about craft, comfort, and the quiet details that matter.
          </p>
        </FadeIn>
      </section>

      {/* Journal Grid — Asymmetric */}
      <section className="px-6 lg:px-20 max-w-[1440px] mx-auto pb-24 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Featured (large) */}
          <FadeIn className="lg:col-span-7">
            <article className="group cursor-pointer">
              <div className={`${journalEntries[0].aspect} overflow-hidden bg-sand relative`}>
                <Image
                  src={journalEntries[0].image}
                  alt={journalEntries[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 mb-2">
                  <Overline>{journalEntries[0].category}</Overline>
                  <span className="font-body text-[11px] text-stone">
                    {journalEntries[0].date}
                  </span>
                </div>
                <h2 className="font-display text-[24px] lg:text-[28px] font-light text-ink leading-[1.25] group-hover:text-accent transition-colors duration-300">
                  {journalEntries[0].title}
                </h2>
                <p className="font-body text-[14px] text-taupe mt-2 leading-relaxed max-w-[500px]">
                  {journalEntries[0].excerpt}
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Side column */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-10">
            {journalEntries.slice(1, 3).map((entry, index) => (
              <FadeIn key={entry.title} delay={0.1 + index * 0.1}>
                <article className="group cursor-pointer">
                  <div className={`${entry.aspect} overflow-hidden bg-sand relative`}>
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Overline>{entry.category}</Overline>
                      <span className="font-body text-[11px] text-stone">{entry.date}</span>
                    </div>
                    <h3 className="font-display text-[20px] font-light text-ink leading-[1.3] group-hover:text-accent transition-colors duration-300">
                      {entry.title}
                    </h3>
                    <p className="font-body text-[13px] text-taupe mt-1.5 leading-relaxed">
                      {entry.excerpt}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <FadeIn delay={0.3} className="mt-10">
          <article className="group cursor-pointer">
            <div className={`${journalEntries[3].aspect} overflow-hidden bg-sand relative`}>
              <Image
                src={journalEntries[3].image}
                alt={journalEntries[3].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="100vw"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-3 mb-2">
                <Overline>{journalEntries[3].category}</Overline>
                <span className="font-body text-[11px] text-stone">{journalEntries[3].date}</span>
              </div>
              <h2 className="font-display text-[24px] lg:text-[28px] font-light text-ink leading-[1.25] group-hover:text-accent transition-colors duration-300">
                {journalEntries[3].title}
              </h2>
              <p className="font-body text-[14px] text-taupe mt-2 leading-relaxed max-w-[600px]">
                {journalEntries[3].excerpt}
              </p>
            </div>
          </article>
        </FadeIn>
      </section>
    </>
  );
}
