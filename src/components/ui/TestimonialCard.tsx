
interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
  image?: string;
}

const TestimonialCard = ({ quote, name, title, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg className="h-8 w-8 text-adventure-300" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-gray-600 flex-grow mb-6">{quote}</p>
        <div className="flex items-center mt-auto">
          {image ? (
            <img src={image} alt={name} className="h-10 w-10 rounded-full mr-3 object-cover" />
          ) : (
            <div className="h-10 w-10 rounded-full bg-adventure-100 text-adventure-600 flex items-center justify-center mr-3">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            {title && <p className="text-sm text-gray-500">{title}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
