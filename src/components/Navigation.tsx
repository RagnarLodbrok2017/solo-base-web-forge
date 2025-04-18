
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-heading font-bold text-gray-900">
            SBC
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-primary">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-primary">About</Link>
            <Link to="/services" className="text-gray-800 hover:text-primary">Services</Link>
            <Link to="/projects" className="text-gray-800 hover:text-primary">Projects</Link>
            <Link to="/contact" className="bg-primary text-white px-4 py-2 rounded hover:bg-construction-dark transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4 bg-white">
              <Link to="/" className="text-gray-800 hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-800 hover:text-primary" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/services" className="text-gray-800 hover:text-primary" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/projects" className="text-gray-800 hover:text-primary" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link to="/contact" className="bg-primary text-white px-4 py-2 rounded hover:bg-construction-dark transition-colors" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
