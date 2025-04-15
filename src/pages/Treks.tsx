
import MainLayout from '@/components/layout/MainLayout';
import SectionTitle from '@/components/ui/SectionTitle';
import TrekCard from '@/components/ui/TrekCard';
import HeroSection from '@/components/ui/HeroSection';
import { useState } from 'react';

// Sample data - in a real application this would come from an API
const treks = [
  {
    id: "kalsubai-peak",
    title: "Kalsubai Peak Trek",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    location: "Ahmednagar, Maharashtra",
    date: "May 15-16, 2025",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    price: 2500,
    category: "weekend"
  },
  {
    id: "rajgad-fort",
    title: "Rajgad Fort Trek",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    location: "Pune, Maharashtra",
    date: "May 22-23, 2025",
    duration: "2 Days / 1 Night",
    difficulty: "Difficult",
    price: 2800,
    category: "weekend"
  },
  {
    id: "harishchandragad",
    title: "Harishchandragad Trek",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    location: "Ahmednagar, Maharashtra",
    date: "June 5-6, 2025",
    duration: "2 Days / 1 Night",
    difficulty: "Difficult",
    price: 3000,
    category: "weekend"
  },
  {
    id: "sandhan-valley",
    title: "Sandhan Valley Trek",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    location: "Nashik, Maharashtra",
    date: "June 12-13, 2025",
    duration: "2 Days / 1 Night",
    difficulty: "Extreme",
    price: 3500,
    category: "weekend"
  },
  {
    id: "lohagad-fort",
    title: "Lohagad Fort Trek",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    location: "Pune, Maharashtra",
    date: "May 21, 2025",
    duration: "1 Day",
    difficulty: "Easy",
    price: 1200,
    category: "day"
  },
  {
    id: "torna-fort",
    title: "Torna Fort Trek",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    location: "Pune, Maharashtra",
    date: "May 28, 2025",
    duration: "1 Day",
    difficulty: "Moderate",
    price: 1500,
    category: "day"
  },
  {
    id: "valley-of-flowers",
    title: "Valley of Flowers Trek",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    location: "Uttarakhand",
    date: "July 10-16, 2025",
    duration: "7 Days / 6 Nights",
    difficulty: "Moderate",
    price: 18500,
    category: "special"
  },
  {
    id: "hampta-pass",
    title: "Hampta Pass Trek",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    location: "Himachal Pradesh",
    date: "August 5-12, 2025",
    duration: "8 Days / 7 Nights",
    difficulty: "Difficult",
    price: 22000,
    category: "special"
  }
];

const categories = [
  { id: 'all', label: 'All Treks' },
  { id: 'day', label: 'Day Treks' },
  { id: 'weekend', label: 'Weekend Treks' },
  { id: 'special', label: 'Special Expeditions' }
];

const difficulties = ["All", "Easy", "Moderate", "Difficult", "Extreme"];

const Treks = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('All');

  const filteredTreks = treks.filter(trek => {
    const categoryMatch = activeCategory === 'all' || trek.category === activeCategory;
    const difficultyMatch = activeDifficulty === 'All' || trek.difficulty === activeDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <MainLayout>
      <HeroSection
        title="Explore Our Treks"
        subtitle="Discover breathtaking trails, majestic peaks, and hidden valleys with our expertly guided trekking experiences."
        ctaText="Book Your Adventure"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500"
      />
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <SectionTitle 
                title="Find Your Perfect Trek" 
                subtitle="Filter by category and difficulty to find the adventure that's right for you."
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-adventure-500 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeDifficulty === difficulty 
                        ? 'bg-mountain-500 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveDifficulty(difficulty)}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {filteredTreks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTreks.map((trek) => (
                <TrekCard
                  key={trek.id}
                  id={trek.id}
                  title={trek.title}
                  image={trek.image}
                  location={trek.location}
                  date={trek.date}
                  duration={trek.duration}
                  difficulty={trek.difficulty as any}
                  price={trek.price}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No treks found with the selected filters. Please try different criteria.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Treks;
