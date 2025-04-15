
import MainLayout from '@/components/layout/MainLayout';
import TrekCategorySection from '@/components/sections/TrekCategorySection';
import HeroSection from '@/components/ui/HeroSection';
import { getUpcomingTreks } from '@/data/treksData';

const UpcomingTreks = () => {
  const upcomingTreks = getUpcomingTreks();
  
  return (
    <MainLayout>
      <HeroSection
        title="Upcoming Treks"
        subtitle="Join us on our next scheduled adventures into the stunning wilderness."
        ctaText="Book Your Adventure"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <TrekCategorySection
        title="Upcoming Treks"
        subtitle="Secure your spot on one of our upcoming adventures before they fill up."
        treks={upcomingTreks}
      />
    </MainLayout>
  );
};

export default UpcomingTreks;
