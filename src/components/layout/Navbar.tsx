
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { 
      name: 'Treks',
      link: '/treks',
      dropdown: [
        { name: 'Upcoming Treks', link: '/treks/upcoming' },
        { name: 'Popular Treks', link: '/treks/popular' },
        { name: 'Day Treks', link: '/treks/day' },
        { name: 'Multi-day Treks', link: '/treks/multi-day' },
      ] 
    },
    { 
      name: 'Adventure Tours',
      link: '/tours',
      dropdown: [
        { name: 'Cultural Tours', link: '/tours/cultural' },
        { name: 'Wildlife Tours', link: '/tours/wildlife' },
        { name: 'Photography Tours', link: '/tours/photography' },
      ] 
    },
    { name: 'Our Team', link: '/team' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <span className="text-2xl font-bold text-adventure-600">Alpine Trekkers</span>
          </Link>
          <div className="md:hidden">
            <button 
              className="text-adventure-600 focus:outline-none" 
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div 
          className={`${isOpen ? 'block' : 'hidden'} md:block md:flex md:items-center md:space-x-8 mt-4 md:mt-0`}
        >
          {navLinks.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button 
                    className="flex items-center justify-between w-full py-2 text-adventure-600 hover:text-adventure-800 md:w-auto"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`${activeDropdown === item.name ? 'block animate-fade-in' : 'hidden'} md:absolute md:left-0 md:mt-2 md:w-48 md:bg-white md:shadow-lg md:rounded-md md:py-1 md:z-20`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link 
                        key={dropdownItem.name}
                        to={dropdownItem.link}
                        className="block px-4 py-2 text-adventure-600 hover:bg-adventure-50 hover:text-adventure-800"
                        onClick={closeMenu}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  to={item.link}
                  className="block py-2 text-adventure-600 hover:text-adventure-800"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link 
            to="/register" 
            className="btn-primary md:ml-4"
            onClick={closeMenu}
          >
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
