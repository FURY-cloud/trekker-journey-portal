
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: "rahul-sharma",
      name: "Rahul Sharma",
      role: "Founder & Lead Trekker",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      bio: "With over 15 years of trekking experience across the Himalayas, Rahul founded Alpine Trekkers to share his passion for adventure and sustainable travel."
    },
    {
      id: "priya-patel",
      name: "Priya Patel",
      role: "Wildlife Expert & Guide",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      bio: "A zoologist by training, Priya specializes in wildlife tours and has published research on conservation practices in Indian national parks."
    },
    {
      id: "amit-desai",
      name: "Amit Desai",
      role: "Photography Instructor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      bio: "Award-winning photographer Amit leads our photography tours, helping travelers capture the perfect shots while respecting natural environments."
    },
    {
      id: "meera-singh",
      name: "Meera Singh",
      role: "Cultural Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      bio: "With a background in anthropology, Meera creates immersive cultural experiences that connect travelers with local communities and traditions."
    },
    {
      id: "vikram-roy",
      name: "Vikram Roy",
      role: "Safety Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      bio: "A certified mountaineer and first aid expert, Vikram ensures all our adventures maintain the highest safety standards."
    },
    {
      id: "anjali-kumar",
      name: "Anjali Kumar",
      role: "Sustainability Director",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
      bio: "Anjali oversees our eco-friendly practices and community development initiatives, ensuring responsible tourism principles guide all our operations."
    }
  ];

  return (
    <MainLayout>
      <HeroSection
        title="Meet Our Team"
        subtitle="Get to know the passionate experts who craft and guide your unforgettable adventures."
        ctaText="Join Our Team"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="The Alpine Trekkers Family" 
            subtitle="Our team of passionate adventurers, experts, and guides bring together decades of experience to create safe, sustainable, and unforgettable experiences for our travelers."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member) => (
              <Link 
                key={member.id}
                to={`/team/${member.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-adventure-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  
                  <div className="flex items-center text-adventure-600 group-hover:text-adventure-800 transition-colors">
                    <span className="font-medium">Read More</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
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

export default Team;
