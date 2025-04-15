
import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && (
        <div className="text-lg text-gray-600 max-w-3xl">
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
