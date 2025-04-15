
import MainLayout from '@/components/layout/MainLayout';
import TrekCategorySection from '@/components/sections/TrekCategorySection';
import HeroSection from '@/components/ui/HeroSection';
import { getMultiDayTreks } from '@/data/treksData';

const MultiDayTreks = () => {
  const multiDayTreks = getMultiDayTreks();
  
  return (
    <MainLayout>
      <HeroSection
        title="Multi-Day Treks"
        subtitle="Immersive trekking experiences spanning multiple days for more adventure and exploration."
        ctaText="Book Your Adventure"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <TrekCategorySection
        title="Multi-Day Treks"
        subtitle="Our multi-day treks offer deeper wilderness immersion with overnight camping and extended exploration."
        treks={multiDayTreks}
      />
    </MainLayout>
  );
};

export default MultiDayTreks;
