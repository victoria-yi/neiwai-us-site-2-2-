import HeroSection from '@/components/home/HeroSection';
import FeaturedBras from '@/components/home/FeaturedBras';
import EditorialBras from '@/components/home/EditorialBras';
import BrandMoment from '@/components/home/BrandMoment';
import BestSellers from '@/components/home/BestSellers';
import Testimonial from '@/components/home/Testimonial';
import InTheWorld from '@/components/home/InTheWorld';
import Newsletter from '@/components/home/Newsletter';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Featured Bras — side by side */}
      <FeaturedBras />

      {/* 3. Editorial — Pure Comfort, Bandeau, Featherlight */}
      <EditorialBras />

      {/* 4. Brand Philosophy */}
      <BrandMoment />

      {/* 5. Briefs & Leggings — 3 best sellers */}
      <BestSellers />

      {/* 6. Customer Reviews — rotating */}
      <Testimonial />

      {/* 7. In the World */}
      <InTheWorld />

      {/* 8. Newsletter */}
      <Newsletter />
    </>
  );
}
