
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import TrekCard from '../ui/TrekCard';

// Sample data - in a real application this would come from an API
const upcomingTreks = [
  {
    id: "kalsubai-peak",
    title: "Kalsubai Peak Trek",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    location: "Ahmednagar, Maharashtra",
    date: "May 15-16, 2025",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    price: 2500,
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
  }
];

const UpcomingTreksSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-8">
          <SectionTitle 
            title="Upcoming Treks" 
            subtitle="Join us on our next adventure into the stunning wilderness of Maharashtra."
          />
          <Link to="/treks" className="hidden md:block btn-outline">
            View All Treks
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingTreks.map((trek) => (
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
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/treks" className="btn-outline">
            View All Treks
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTreksSection;
