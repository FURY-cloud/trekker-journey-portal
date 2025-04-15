
import { useEffect, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import TrekCard from '../ui/TrekCard';

// Trek interface to define the structure of trek data
interface Trek {
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

interface TrekCategorySectionProps {
  title: string;
  subtitle: string;
  treks: Trek[];
  categoryFilter?: string;
  featuredOnly?: boolean;
}

const TrekCategorySection = ({ 
  title, 
  subtitle, 
  treks, 
  categoryFilter, 
  featuredOnly 
}: TrekCategorySectionProps) => {
  const [filteredTreks, setFilteredTreks] = useState<Trek[]>([]);

  useEffect(() => {
    let result = [...treks];
    
    // Apply category filter if specified
    if (categoryFilter) {
      result = result.filter(trek => trek.category === categoryFilter);
    }
    
    // Apply featured filter if specified
    if (featuredOnly) {
      result = result.filter(trek => trek.featured);
    }
    
    setFilteredTreks(result);
  }, [treks, categoryFilter, featuredOnly]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={title} 
          subtitle={subtitle}
          centered
        />
        
        {filteredTreks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filteredTreks.map((trek) => (
              <TrekCard
                key={trek.id}
                id={trek.id}
                title={trek.title}
                image={trek.image}
                location={trek.location}
                date={trek.date}
                duration={trek.duration}
                difficulty={trek.difficulty}
                price={trek.price}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No treks found in this category. Check back soon for new adventures!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrekCategorySection;
