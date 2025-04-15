
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface TrekCardProps {
  id: string;
  title: string;
  image: string;
  location: string;
  date: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Difficult' | 'Extreme';
  price: number;
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800',
  Moderate: 'bg-blue-100 text-blue-800',
  Difficult: 'bg-orange-100 text-orange-800',
  Extreme: 'bg-red-100 text-red-800'
};

const TrekCard = ({ id, title, image, location, date, duration, difficulty, price }: TrekCardProps) => {
  return (
    <div className="trek-card group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className={`absolute top-4 right-4 ${difficultyColors[difficulty]} px-2 py-1 rounded text-xs font-medium`}>
          {difficulty}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-2 text-adventure-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-adventure-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2 text-adventure-500" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-lg font-bold text-adventure-600">₹{price.toLocaleString()}</span>
          <Link to={`/trek/${id}`} className="btn-outline text-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrekCard;
