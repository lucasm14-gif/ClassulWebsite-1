import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { NAV_LINKS } from "@/lib/constants";
import classulLogo from "@assets/classul logo 144.png";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white shadow-md"
      }`}
    >
      <div className="container py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={classulLogo} alt="Classul Logo" className="h-14" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative font-medium text-gray-800 hover:text-primary transition-colors py-2 ${
                    location === link.path 
                      ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary after:rounded-full" 
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.location.href='tel:(51)3225-3965'}
            >
              <Phone className="mr-2 h-4 w-4" /> (51) 3225-3965
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-800 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 bg-white rounded-lg mt-2 shadow-lg">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                className={`block py-3 px-4 font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors ${
                  location === link.path ? "text-primary bg-gray-50" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.location.href='tel:(51)3225-3965'}
              >
                <Phone className="mr-2 h-4 w-4" /> (51) 3225-3965
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
