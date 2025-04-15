
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import { Landmark, Globe, Map, Compass, BookOpen } from 'lucide-react';

const CulturalTours = () => {
  const tours = [
    {
      id: "maharashtra-heritage",
      title: "Maharashtra Heritage Tour",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Pune, Maharashtra",
      date: "June 15-20, 2025",
      duration: "6 Days / 5 Nights",
      description: "Explore ancient temples, historic forts, and traditional villages while experiencing authentic Maharashtrian culture.",
      icon: Landmark
    },
    {
      id: "rajasthan-royalty",
      title: "Rajasthan Royalty Explorer",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Jaipur, Rajasthan",
      date: "September 10-18, 2025",
      duration: "9 Days / 8 Nights",
      description: "Journey through the Land of Kings, visiting majestic palaces, vibrant markets, and experiencing desert culture.",
      icon: Globe
    },
    {
      id: "kerala-backwaters",
      title: "Kerala Cultural Immersion",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Kochi, Kerala",
      date: "August 5-12, 2025",
      duration: "8 Days / 7 Nights",
      description: "Experience traditional Kathakali performances, ayurvedic practices, and the serene lifestyle of God's Own Country.",
      icon: BookOpen
    },
    {
      id: "himachal-village",
      title: "Himachal Village Experience",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Shimla, Himachal Pradesh",
      date: "July 15-21, 2025",
      duration: "7 Days / 6 Nights",
      description: "Live with local families in traditional Himalayan villages and learn about their customs, crafts, and cuisine.",
      icon: Map
    }
  ];

  return (
    <MainLayout>
      <HeroSection
        title="Cultural Tours"
        subtitle="Immerse yourself in India's rich heritage and traditions through our carefully curated cultural experiences."
        ctaText="Book Your Tour"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Explore Cultural Tours" 
            subtitle="Discover the rich tapestry of traditions, heritage sites, and local customs through our immersive cultural tour experiences."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {tours.map((tour) => (
              <Link 
                key={tour.id}
                to={`/tours/cultural/${tour.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <tour.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <Compass className="h-5 w-5 mr-2" />
                    <span>{tour.location}</span>
                  </div>
                  
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{tour.date}</span>
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-adventure-600 font-medium group-hover:text-adventure-800 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CulturalTours;
