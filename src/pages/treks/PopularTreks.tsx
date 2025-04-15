
import MainLayout from '@/components/layout/MainLayout';
import TrekCategorySection from '@/components/sections/TrekCategorySection';
import HeroSection from '@/components/ui/HeroSection';
import { getPopularTreks } from '@/data/treksData';

const PopularTreks = () => {
  const popularTreks = getPopularTreks();
  
  return (
    <MainLayout>
      <HeroSection
        title="Popular Treks"
        subtitle="Discover our most beloved and frequently booked trekking experiences."
        ctaText="Book Your Adventure"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <TrekCategorySection
        title="Popular Treks"
        subtitle="These treks have become favorites among our adventurers for their stunning views and unforgettable experiences."
        treks={popularTreks}
      />
    </MainLayout>
  );
};

export default PopularTreks;
