import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { NAV_LINKS } from "@/lib/constants";
import classulLogo from "@assets/classul logo 144.png";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll for header styling
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Detect active section for menu highlighting
      const sections = ["produtos", "sobre", "contato"];
      let currentSection = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    closeMenu();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to check if link is active
  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    if (path.includes("#")) {
      const sectionId = path.split("#")[1];
      return activeSection === sectionId;
    }
    return false;
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white shadow-md"
      }`}
    >
      <div className="border-b border-primary/10">
        <div className="container flex justify-end py-1">
          <div className="text-sm text-gray-600 flex items-center">
            <Badge variant="secondary" className="mr-2 text-xs font-normal">Desde 1971</Badge>
            Empresa com mais de 50 anos de tradição
          </div>
        </div>
      </div>
      <div className="container py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src={classulLogo} alt="Classul Logo" className="h-14" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-6">
              {NAV_LINKS.map((link) => {
                const isAnchor = link.path.includes("#");
                const sectionId = isAnchor ? link.path.split("#")[1] : "";
                
                return isAnchor ? (
                  <button
                    key={link.path}
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative font-medium transition-colors py-2 ${
                      isActive(link.path)
                        ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary after:rounded-full" 
                        : "text-gray-800 hover:text-primary"
                    }`}
                  >
                    {link.name === "Produtos" && (
                      <ShoppingBag className="inline-block mr-1 h-4 w-4" />
                    )}
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative font-medium transition-colors py-2 ${
                      isActive(link.path)
                        ? "text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary after:rounded-full" 
                        : "text-gray-800 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-sm"
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
            {NAV_LINKS.map((link) => {
              const isAnchor = link.path.includes("#");
              const sectionId = isAnchor ? link.path.split("#")[1] : "";
              
              return isAnchor ? (
                <button
                  key={link.path}
                  onClick={() => scrollToSection(sectionId)}
                  className={`block w-full text-left py-3 px-4 font-medium hover:bg-gray-50 rounded-lg transition-colors ${
                    isActive(link.path) ? "text-primary bg-primary/5" : "text-gray-800"
                  }`}
                >
                  {link.name === "Produtos" && (
                    <ShoppingBag className="inline-block mr-1 h-4 w-4" />
                  )}
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={closeMenu}
                  className={`block py-3 px-4 font-medium hover:bg-gray-50 rounded-lg transition-colors ${
                    isActive(link.path) ? "text-primary bg-primary/5" : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 px-4">
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-sm"
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
