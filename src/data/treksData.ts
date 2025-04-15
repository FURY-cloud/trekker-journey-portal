
// Define the Trek type for type safety
export interface Trek {
  id: string;
  title: string;
  image: string;
  location: string;
  date: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Difficult' | 'Extreme';
  price: number;
  category: string;
  featured?: boolean;
}

// Sample data - in a real application this would come from an API
export const treksData: Trek[] = [
  {
    id: "kalsubai-peak",
    title: "Kalsubai Peak Trek",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500",
    location: "Ahmednagar, Maharashtra",
    date: "May 15-16, 2025",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    price: 2500,
    category: "weekend",
    featured: true
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
    category: "weekend",
    featured: true
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
    category: "weekend",
    featured: true
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
    category: "day",
    featured: true
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

// Helper function to get upcoming treks (those with future dates)
export const getUpcomingTreks = (): Trek[] => {
  const currentDate = new Date();
  return treksData.filter(trek => {
    // Extract month and year from the date string
    const [monthStr, yearStr] = trek.date.split(", ")[1].split("-");
    const trekDate = new Date(`${monthStr} 1, ${yearStr}`);
    return trekDate >= currentDate;
  });
};

// Helper function to get popular treks (those marked as featured)
export const getPopularTreks = (): Trek[] => {
  return treksData.filter(trek => trek.featured);
};

// Helper function to get day treks
export const getDayTreks = (): Trek[] => {
  return treksData.filter(trek => trek.category === "day");
};

// Helper function to get multi-day treks (weekend and special)
export const getMultiDayTreks = (): Trek[] => {
  return treksData.filter(trek => trek.category === "weekend" || trek.category === "special");
};
