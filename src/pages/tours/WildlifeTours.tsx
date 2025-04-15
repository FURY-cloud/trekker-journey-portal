
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import { Binoculars, Compass, PawPrint, Fish, Leaf } from 'lucide-react';

const WildlifeTours = () => {
  const tours = [
    {
      id: "ranthambore-safari",
      title: "Ranthambore Tiger Safari",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Ranthambore, Rajasthan",
      date: "October 15-19, 2025",
      duration: "5 Days / 4 Nights",
      description: "Explore one of India's premier tiger reserves and spot the majestic Bengal tigers in their natural habitat.",
      icon: PawPrint
    },
    {
      id: "kaziranga-rhino",
      title: "Kaziranga Rhino Expedition",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Kaziranga, Assam",
      date: "November 10-16, 2025",
      duration: "7 Days / 6 Nights",
      description: "Witness the endangered one-horned rhinoceros and diverse wildlife in this UNESCO World Heritage site.",
      icon: Binoculars
    },
    {
      id: "periyar-sanctuary",
      title: "Periyar Wildlife Sanctuary",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Thekkady, Kerala",
      date: "September 5-10, 2025",
      duration: "6 Days / 5 Nights",
      description: "Boat through the serene waters of Periyar Lake and spot elephants, tigers, and numerous bird species.",
      icon: Fish
    },
    {
      id: "corbett-adventure",
      title: "Jim Corbett National Park",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Nainital, Uttarakhand",
      date: "April 15-20, 2025",
      duration: "6 Days / 5 Nights",
      description: "India's oldest national park offers the opportunity to see tigers, elephants, and diverse Himalayan wildlife.",
      icon: Leaf
    }
  ];

  return (
    <MainLayout>
      <HeroSection
        title="Wildlife Tours"
        subtitle="Experience India's breathtaking biodiversity through our expertly guided wildlife expeditions."
        ctaText="Book Your Tour"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Explore Wildlife Tours" 
            subtitle="Discover India's incredible biodiversity through our carefully crafted wildlife tours, designed to bring you close to nature while ensuring sustainable and responsible tourism practices."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {tours.map((tour) => (
              <Link 
                key={tour.id}
                to={`/tours/wildlife/${tour.id}`}
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

export default WildlifeTours;
