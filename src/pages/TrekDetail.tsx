
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import SectionTitle from '@/components/ui/SectionTitle';
import { Calendar, MapPin, Clock, BarChart, Users, Shield } from 'lucide-react';
import CtaSection from '@/components/sections/CtaSection';

// Sample data - in a real application this would come from an API
const treksData = {
  "kalsubai-peak": {
    title: "Kalsubai Peak Trek",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500",
    location: "Ahmednagar, Maharashtra",
    date: "May 15-16, 2025",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    price: 2500,
    maxGroupSize: 15,
    description: `
      <p>Embark on an exciting journey to Kalsubai Peak, the highest peak in Maharashtra at 1,646 meters (5,400 feet). Known as the "Everest of Maharashtra," this trek offers stunning views of the surrounding landscape and a chance to challenge yourself.</p>
      
      <p>The trail takes you through lush green forests, small villages, and beautiful streams. The trek is moderately difficult, suitable for beginners with good fitness levels. The final ascent includes iron ladders attached to the rock face, adding an element of adventure.</p>
      
      <p>At the summit, you'll be rewarded with breathtaking panoramic views of the Bhandardara Dam and the surrounding Sahyadri mountain range. The peak also houses a small temple dedicated to the local deity Kalsubai.</p>
    `,
    itinerary: [
      {
        day: "Day 1",
        title: "Departure from Pune and Trek to Base Camp",
        description: "We'll depart from Pune early morning and drive to Bari village, the starting point of our trek. After a briefing session and breakfast, we'll begin our ascent to the base camp. The trek passes through beautiful landscapes and small villages. We'll set up camp for the night and enjoy dinner under the stars."
      },
      {
        day: "Day 2",
        title: "Summit Climb and Return",
        description: "We'll wake up early for a sunrise summit climb. The final ascent includes iron ladders attached to the rock face. At the summit, enjoy the panoramic views and visit the temple. After spending some time at the peak, we'll begin our descent back to Bari village and drive back to Pune, arriving by evening."
      }
    ],
    included: [
      "Transportation from Pune to trek start point and back",
      "Meals as per itinerary (breakfast, lunch, dinner on Day 1; breakfast, lunch on Day 2)",
      "Camping equipment (tents, sleeping bags)",
      "Professional trek leader and support staff",
      "First aid kit and basic medical support",
      "Permits and forest fees"
    ],
    excluded: [
      "Personal expenses",
      "Travel insurance",
      "Any items not mentioned in the inclusions",
      "Tips for guides and support staff",
      "Additional snacks and beverages"
    ]
  },
  "rajgad-fort": {
    title: "Rajgad Fort Trek",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500",
    location: "Pune, Maharashtra",
    date: "May 22-23, 2025",
    duration: "2 Days / 1 Night",
    difficulty: "Difficult",
    price: 2800,
    maxGroupSize: 12,
    description: `
      <p>Rajgad Fort, meaning "King of Forts," was the capital of the Maratha Empire for 26 years. Located at an elevation of 4,600 feet, this magnificent fort offers a perfect blend of history, architecture, and natural beauty.</p>
      
      <p>The trek takes you through dense forests, rocky terrain, and steep climbs. The fort is spread over a large area with three main points - Balekilla (central fortification), Padmavati Machi, and Sanjivani Machi.</p>
      
      <p>Explore the well-preserved structures including the palace, water cisterns, caves, and temples. The panoramic views from the fort, especially during sunrise and sunset, are breathtaking.</p>
    `,
    itinerary: [
      {
        day: "Day 1",
        title: "Departure from Pune and Trek to the Fort",
        description: "Early morning departure from Pune to Gunjavane village. After a briefing session, we'll begin our ascent through the challenging trail. The trek takes approximately 3-4 hours. Upon reaching the fort, we'll explore Padmavati Machi and set up camp. Enjoy dinner with a bonfire under the stars."
      },
      {
        day: "Day 2",
        title: "Fort Exploration and Return",
        description: "Wake up early to witness the beautiful sunrise. After breakfast, we'll explore Balekilla and Sanjivani Machi, learning about the fort's rich history. In the afternoon, we'll begin our descent and drive back to Pune, arriving by evening."
      }
    ],
    included: [
      "Transportation from Pune to trek start point and back",
      "Meals as per itinerary (breakfast, lunch, dinner on Day 1; breakfast, lunch on Day 2)",
      "Camping equipment (tents, sleeping bags)",
      "Professional trek leader and support staff",
      "First aid kit and basic medical support",
      "Permits and forest fees"
    ],
    excluded: [
      "Personal expenses",
      "Travel insurance",
      "Any items not mentioned in the inclusions",
      "Tips for guides and support staff",
      "Additional snacks and beverages"
    ]
  }
};

// We'll add more trek details as needed

const TrekDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Default to kalsubai-peak if the id doesn't match any trek
  const trekData = id && treksData[id as keyof typeof treksData] 
    ? treksData[id as keyof typeof treksData] 
    : treksData["kalsubai-peak"];

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Moderate: 'bg-blue-100 text-blue-800',
    Difficult: 'bg-orange-100 text-orange-800',
    Extreme: 'bg-red-100 text-red-800'
  };

  const difficultyColor = difficultyColors[trekData.difficulty as keyof typeof difficultyColors];

  return (
    <MainLayout>
      <div className="bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={trekData.image}
            alt={trekData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
              {trekData.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-3 py-2 rounded-md">
                <MapPin size={18} className="text-white mr-2" />
                <span className="text-white">{trekData.location}</span>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-md px-3 py-2 rounded-md">
                <Calendar size={18} className="text-white mr-2" />
                <span className="text-white">{trekData.date}</span>
              </div>
              
              <div className="flex items-center bg-white/10 backdrop-blur-md px-3 py-2 rounded-md">
                <Clock size={18} className="text-white mr-2" />
                <span className="text-white">{trekData.duration}</span>
              </div>
              
              <div className={`flex items-center px-3 py-2 rounded-md ${difficultyColor}`}>
                <BarChart size={18} className="mr-2" />
                <span>{trekData.difficulty}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Book Now - ₹{trekData.price.toLocaleString()}
              </button>
              <button className="btn-outline border-white text-white hover:bg-white/10">
                Download Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle 
                title="Overview" 
                subtitle={<div dangerouslySetInnerHTML={{ __html: trekData.description }} />}
              />
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Itinerary</h3>
                <div className="space-y-6">
                  {trekData.itinerary.map((day, index) => (
                    <div key={index} className="border-l-2 border-adventure-500 pl-6 relative">
                      <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-adventure-500"></div>
                      <h4 className="text-lg font-semibold text-adventure-800">{day.day}: {day.title}</h4>
                      <p className="mt-2 text-gray-600">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
                <h3 className="text-xl font-semibold mb-4">Trek Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-adventure-500 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium">Date</h4>
                      <p className="text-gray-600">{trekData.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-adventure-500 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">{trekData.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-adventure-500 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium">Duration</h4>
                      <p className="text-gray-600">{trekData.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <BarChart className="h-5 w-5 text-adventure-500 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium">Difficulty</h4>
                      <p className="text-gray-600">{trekData.difficulty}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-adventure-500 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-medium">Group Size</h4>
                      <p className="text-gray-600">Max {trekData.maxGroupSize} people</p>
                    </div>
                  </div>
                </div>
                
                <div className="my-6 border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold mb-4">Price</h3>
                  <p className="text-3xl font-bold text-adventure-600 mb-4">₹{trekData.price.toLocaleString()}</p>
                  <button className="btn-primary w-full">Book This Trek</button>
                </div>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-500">
                    Need help with booking? Call us at <a href="tel:+917337336001" className="text-adventure-600 font-medium">+91 7337336001</a> or <a href="/contact" className="text-adventure-600 font-medium">contact us</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                What's Included
              </h3>
              <ul className="space-y-2">
                {trekData.included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Shield className="h-6 w-6 text-red-600 mr-2" />
                What's Not Included
              </h3>
              <ul className="space-y-2">
                {trekData.excluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </MainLayout>
  );
};

export default TrekDetail;
