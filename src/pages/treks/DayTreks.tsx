
import MainLayout from '@/components/layout/MainLayout';
import TrekCategorySection from '@/components/sections/TrekCategorySection';
import HeroSection from '@/components/ui/HeroSection';
import { getDayTreks } from '@/data/treksData';

const DayTreks = () => {
  const dayTreks = getDayTreks();
  
  return (
    <MainLayout>
      <HeroSection
        title="Day Treks"
        subtitle="Perfect single-day adventures for those with limited time but unlimited enthusiasm."
        ctaText="Book Your Adventure"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <TrekCategorySection
        title="Day Treks"
        subtitle="Explore beautiful trails and return the same day with these convenient trekking options."
        treks={dayTreks}
      />
    </MainLayout>
  );
};

export default DayTreks;
