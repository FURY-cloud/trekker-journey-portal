
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="bg-adventure-600 py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-lg text-white max-w-2xl mx-auto mb-8">
          Join us for an unforgettable experience exploring the beautiful trails and peaks of Maharashtra.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/treks" 
            className="bg-white text-adventure-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Browse Treks
          </Link>
          <Link 
            to="/contact" 
            className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
