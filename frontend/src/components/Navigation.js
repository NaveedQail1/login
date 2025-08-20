import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold gradient-text">TransactPro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Features</a>
              <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Testimonials</a>
              <a href="#faq" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">FAQ</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg btn-hover-lift font-semibold">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-purple-400 focus:outline-none focus:text-purple-400"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2 rounded-lg">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Features</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Testimonials</a>
              <a href="#faq" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">FAQ</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</a>
              <button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;