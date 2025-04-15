
import { Shield, Users, Heart, Award, Leaf, Map } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our priority. All our trips include first-aid kits, emergency protocols, and experienced guides."
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Our team of certified guides and instructors are passionate about providing authentic and enriching experiences."
  },
  {
    icon: Heart,
    title: "Memorable Experiences",
    description: "We create moments that stay with you long after you've returned from your adventure."
  },
  {
    icon: Award,
    title: "Quality Equipment",
    description: "We use only the best equipment to ensure your comfort and safety throughout your journey."
  },
  {
    icon: Leaf,
    title: "Sustainable Travel",
    description: "We're committed to protecting the environments we explore with eco-friendly practices."
  },
  {
    icon: Map,
    title: "Unique Destinations",
    description: "Discover hidden gems and off-the-beaten-path locations with our carefully crafted itineraries."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          title="Why Choose Alpine Trekkers"
          subtitle="We combine adventure with safety, sustainability, and meaningful cultural experiences to give you the journey of a lifetime."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="bg-adventure-100 p-3 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-adventure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
