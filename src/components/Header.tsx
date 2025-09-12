import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto container-padding flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
              <img 
                src="src/components/rancherlogo.png"
                alt="Rancher Services Logo"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h1 className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Rancher Services
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-600' : 'text-white/80'
                  }`}>
                    5/5 RATED
                  </p>
                </div>
              </div>
            </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className={`px-6 py-3 text-sm font-bold transition-all duration-300 rounded-lg relative group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+1-346-401-0323" 
              className="flex items-center space-x-2 btn-accent text-white font-semibold"
            >
              <Phone size={18} />
              <span>(346) 401-0323</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 focus-ring ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg">
            <div className="container-padding py-6 space-y-4">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="block w-full text-left text-gray-700 hover:text-blue-600 px-4 py-3 text-lg font-bold rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  {item}
                </button>
              ))}
              <a 
                href="tel:+1-346-401-0323" 
                className="flex items-center justify-center space-x-2 btn-accent text-white font-semibold mt-6"
              >
                <Phone size={20} />
                <span>(346) 401-0323</span>
              </a>
            </div>
          </div>
        )}
    </header>
  );
};

export default Header;