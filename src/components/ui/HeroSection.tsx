
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  secondaryCtaText,
  secondaryCtaLink
}: HeroSectionProps) => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative px-4 py-24 md:py-32 lg:py-48 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Link to={ctaLink} className="btn-primary text-base">
            {ctaText}
          </Link>
          {secondaryCtaText && secondaryCtaLink && (
            <Link to={secondaryCtaLink} className="btn-outline border-white text-white hover:bg-white/10">
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
