
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    quote: "The trek to Kalsubai Peak was absolutely breathtaking. Alpine Trekkers ensured we had the right equipment and guidance throughout. Couldn't have asked for a better experience!",
    name: "Priya Sharma",
    title: "Pune, Maharashtra",
  },
  {
    quote: "As a solo traveler, I was initially hesitant, but the team at Alpine Trekkers made me feel safe and included. The Rajgad Fort trek was challenging but so rewarding!",
    name: "Arjun Mehta",
    title: "Mumbai, Maharashtra",
  },
  {
    quote: "I've gone on three treks with Alpine Trekkers now, and each one has been meticulously planned. The guides are knowledgeable and passionate about nature conservation.",
    name: "Sanjana Patel",
    title: "Bangalore, Karnataka",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          title="What Our Trekkers Say" 
          subtitle="Don't just take our word for it. Here's what some of our adventurers have to say about their experiences with us."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
