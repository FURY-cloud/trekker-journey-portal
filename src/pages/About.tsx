
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/HeroSection';
import SectionTitle from '@/components/ui/SectionTitle';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import { Shield, Activity, Heart, Award, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Founder & Lead Guide",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "A passionate trekker with over 10 years of experience in the Sahyadri range, Rahul founded Alpine Trekkers to share his love for mountains and adventure."
    },
    {
      name: "Ananya Patel",
      role: "Operations Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "With a background in hospitality and a love for the outdoors, Ananya ensures that every trek runs smoothly from planning to execution."
    },
    {
      name: "Vikram Desai",
      role: "Senior Trek Leader",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      bio: "Certified in wilderness first aid and an experienced mountaineer, Vikram prioritizes safety while making each trek a fun and educational experience."
    },
    {
      name: "Priya Joshi",
      role: "Community Manager",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "A social media enthusiast and avid photographer, Priya manages our online community and captures the beautiful moments from our treks."
    }
  ];

  return (
    <MainLayout>
      <HeroSection
        title="About Alpine Trekkers"
        subtitle="We're a team of passionate adventurers dedicated to providing safe, sustainable, and unforgettable trekking experiences."
        ctaText="Join Our Next Trek"
        ctaLink="/treks"
        backgroundImage="https://images.unsplash.com/photo-1438565434616-3ef039228b15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="Founded in 2020, Alpine Trekkers grew from a passion for adventure and a desire to share the beauty of Maharashtra's mountains with others."
              />
              <div className="space-y-4 text-gray-600">
                <p>
                  What started as weekend treks with friends has evolved into a community of adventure enthusiasts who share a love for nature, culture, and the great outdoors.
                </p>
                <p>
                  Based in Pune, we specialize in treks across the magnificent Sahyadri range, from beginner-friendly day hikes to challenging multi-day expeditions. Our team of experienced guides and trek leaders are committed to creating safe, sustainable, and memorable experiences for all our participants.
                </p>
                <p>
                  At Alpine Trekkers, we believe that adventure is not just about reaching the summit—it's about the journey, the people you meet, and the memories you create along the way.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600" alt="Trek scene" className="rounded-lg h-48 object-cover w-full" />
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600" alt="Trek scene" className="rounded-lg h-64 object-cover w-full" />
              </div>
              <div className="space-y-4 mt-6">
                <img src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600" alt="Trek scene" className="rounded-lg h-64 object-cover w-full" />
                <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600" alt="Trek scene" className="rounded-lg h-48 object-cover w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Values" 
            subtitle="These core principles guide everything we do at Alpine Trekkers."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-adventure-100 p-4 rounded-full inline-flex mb-4">
                <Shield className="h-8 w-8 text-adventure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">We prioritize the safety and well-being of our trekkers above all else.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-adventure-100 p-4 rounded-full inline-flex mb-4">
                <Activity className="h-8 w-8 text-adventure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adventure</h3>
              <p className="text-gray-600">We create experiences that challenge, inspire, and bring joy to our participants.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-adventure-100 p-4 rounded-full inline-flex mb-4">
                <Heart className="h-8 w-8 text-adventure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">We respect and protect the environments we explore, leaving no trace behind.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-adventure-100 p-4 rounded-full inline-flex mb-4">
                <Users className="h-8 w-8 text-adventure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">We foster connections and build a supportive community of adventure enthusiasts.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The passionate individuals behind Alpine Trekkers who make your adventures possible."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-adventure-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      
      <TestimonialsSection />
      
      <CtaSection />
    </MainLayout>
  );
};

export default About;
