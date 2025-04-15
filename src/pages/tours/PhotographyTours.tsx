import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import { Camera, Image, Compass, Mountain, Sun } from 'lucide-react';

const PhotographyTours = () => {
  const tours = [
    {
      id: "ladakh-landscapes",
      title: "Ladakh Landscape Photography",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Leh, Ladakh",
      date: "June 20-28, 2025",
      duration: "9 Days / 8 Nights",
      description: "Capture the stark beauty of high-altitude deserts, ancient monasteries, and the vibrant culture of Ladakh.",
      icon: Mountain
    },
    {
      id: "varanasi-ghats",
      title: "Varanasi: Life Along the Ghats",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Varanasi, Uttar Pradesh",
      date: "November 5-10, 2025",
      duration: "6 Days / 5 Nights",
      description: "Document the spiritual essence, daily rituals, and timeless traditions along the sacred Ganges River.",
      icon: Sun
    },
    {
      id: "western-ghats-monsoon",
      title: "Western Ghats Monsoon Magic",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Sahyadri Range, Maharashtra",
      date: "July 10-16, 2025",
      duration: "7 Days / 6 Nights",
      description: "Photograph cascading waterfalls, misty valleys, and vibrant flora during the monsoon season.",
      icon: Image
    },
    {
      id: "rajasthan-colors",
      title: "Rajasthan: Colors of India",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      location: "Jaipur, Jodhpur, Udaipur",
      date: "February 15-24, 2025",
      duration: "10 Days / 9 Nights",
      description: "Capture the vibrant hues, architectural marvels, and cultural richness of Rajasthan.",
      icon: Camera
    }
  ];

  return (
    <MainLayout>
      <HeroSection
        title="Photography Tours"
        subtitle="Capture breathtaking landscapes, vibrant cultures, and unforgettable moments through our specialized photography expeditions."
        ctaText="Book Your Tour"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Explore Photography Tours" 
            subtitle="Join our expert photographers on carefully crafted journeys to some of India's most photogenic locations, designed to help you capture stunning images while improving your photography skills."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {tours.map((tour) => (
              <Link 
                key={tour.id}
                to={`/tours/photography/${tour.id}`}
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

export default PhotographyTours;
