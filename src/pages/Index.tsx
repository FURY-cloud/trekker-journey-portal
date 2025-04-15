
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/HeroSection';
import UpcomingTreksSection from '@/components/sections/UpcomingTreksSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Camera, Users, Mountain, Navigation } from 'lucide-react';

const Index = () => {
  // Featured trek categories
  const categories = [
    {
      title: "Weekend Treks",
      description: "Perfect 1-2 day getaways for busy professionals",
      icon: Mountain,
      link: "/treks?category=weekend",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
    },
    {
      title: "Day Hikes",
      description: "Rejuvenating single-day adventures near Pune",
      icon: Navigation,
      link: "/treks?category=day",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
    },
    {
      title: "Cultural Tours",
      description: "Discover local traditions and historical sites",
      icon: MapPin,
      link: "/tours/cultural",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
    },
    {
      title: "Special Expeditions",
      description: "Multi-day adventures to breathtaking destinations",
      icon: Calendar,
      link: "/treks?category=special",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
    },
    {
      title: "Photography Tours",
      description: "Capture stunning landscapes and wildlife",
      icon: Camera,
      link: "/tours/photography",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
    },
    {
      title: "Group Adventures",
      description: "Team building and private group bookings",
      icon: Users,
      link: "/contact",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
    }
  ];

  return (
    <MainLayout>
      <HeroSection
        title="Discover Adventure in Every Step"
        subtitle="Experience breathtaking treks and cultural tours across the Sahyadri range and beyond with Alpine Trekkers, Pune's premier adventure travel company."
        ctaText="Explore Our Treks"
        ctaLink="/treks"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Adventure Experiences for Everyone</h2>
            <p className="text-lg text-gray-600">
              From beginner-friendly day hikes to challenging multi-day expeditions, discover the perfect adventure that matches your interests and experience level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-lg hover-scale"
              >
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full inline-flex mb-4">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-200 mb-4">{category.description}</p>
                    <div className="flex items-center text-white transition-transform duration-300 group-hover:translate-x-2">
                      <span className="font-medium">Explore</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <UpcomingTreksSection />
      
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-adventure-800">
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500" 
            alt="Mountain landscape" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to Sustainable Adventure
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              At Alpine Trekkers, we believe in preserving the beauty of nature for future generations. Our eco-friendly practices ensure that we minimize our environmental impact while maximizing your adventure experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/about" 
                className="bg-white text-adventure-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-200"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      
      <TestimonialsSection />
      
      <CtaSection />
    </MainLayout>
  );
};

export default Index;
