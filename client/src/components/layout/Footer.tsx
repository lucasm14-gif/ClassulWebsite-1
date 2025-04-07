import { Link } from "wouter";
import { NAV_LINKS, COMPANY_INFO, SOCIAL_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import classulLogo from "@assets/classul logo 144.png";
import { MapPin, Phone, Clock, Facebook, Instagram, Linkedin, Mail, Heart, ChevronRight, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const socialIcons = {
    facebook: <Facebook size={20} />,
    instagram: <Instagram size={20} />,
    linkedin: <Linkedin size={20} />
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="relative">
      {/* Top separator */}
      <div className="bg-primary h-12">
        <div className="container flex items-center justify-center h-full text-white">
          <Star className="h-5 w-5 mr-2 text-secondary" />
          <span className="text-sm font-medium">Desde 1971 produzindo placas de homenagem e troféus com excelência</span>
          <Star className="h-5 w-5 ml-2 text-secondary" />
        </div>
      </div>
      
      <div className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* About & Logo */}
            <div className="md:col-span-4">
              <div className="mb-6 bg-white inline-block p-3 rounded-lg">
                <Link href="/">
                  <img src={classulLogo} alt="Classul Logo" className="h-16" />
                </Link>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                A Classul está no mercado desde 1971, especializada em placas de homenagem, troféus, medalhas e muito mais. Fabricamos produtos de alta qualidade com acabamento impecável.
              </p>
              
              <div className="flex space-x-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIcons[social.icon as keyof typeof socialIcons]}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 border-b border-primary/30 pb-2 flex items-center">
                <Badge variant="secondary" className="mr-2 py-0.5">Menu</Badge>
                Navegação
              </h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => {
                  const isAnchor = link.path.includes("#");
                  const sectionId = isAnchor ? link.path.split("#")[1] : "";
                  
                  return (
                    <li key={link.path} className="group flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {isAnchor ? (
                        <a 
                          href={link.path} 
                          className="text-gray-300 hover:text-white transition-colors group-hover:translate-x-1 inline-block transition-transform duration-300"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link 
                          href={link.path} 
                          className="text-gray-300 hover:text-white transition-colors group-hover:translate-x-1 inline-block transition-transform duration-300"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            {/* Products */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 border-b border-primary/30 pb-2 flex items-center">
                <Badge variant="secondary" className="mr-2 py-0.5">Catálogo</Badge>
                Produtos
              </h3>
              <ul className="space-y-3">
                <li className="group flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link href="/produtos/placas-homenagem" className="text-gray-300 hover:text-white transition-colors group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Placas de Homenagem
                  </Link>
                </li>
                <li className="group flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link href="/produtos/trofeus" className="text-gray-300 hover:text-white transition-colors group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Troféus
                  </Link>
                </li>
                <li className="group flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link href="/produtos/medalhas" className="text-gray-300 hover:text-white transition-colors group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Medalhas
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="md:col-span-4">
              <h3 className="text-xl font-semibold mb-4 border-b border-primary/30 pb-2 flex items-center">
                <Badge variant="secondary" className="mr-2 py-0.5">Fale Conosco</Badge>
                Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="mt-1 mr-3 p-2 bg-gray-800 rounded-full group-hover:bg-primary/20 transition-colors">
                    <MapPin className="text-primary flex-shrink-0 h-4 w-4" />
                  </div>
                  <p className="text-gray-300">{COMPANY_INFO.address}</p>
                </div>
                
                <div className="flex items-center group">
                  <div className="mr-3 p-2 bg-gray-800 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary flex-shrink-0 h-4 w-4" />
                  </div>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                
                <div className="flex items-center group">
                  <div className="mr-3 p-2 bg-gray-800 rounded-full group-hover:bg-primary/20 transition-colors">
                    <FaWhatsapp className="text-primary flex-shrink-0 h-4 w-4" />
                  </div>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
                
                <div className="flex items-center group">
                  <div className="mr-3 p-2 bg-gray-800 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary flex-shrink-0 h-4 w-4" />
                  </div>
                  <a href="mailto:contato@classul.com.br" className="text-gray-300 hover:text-white transition-colors">
                    contato@classul.com.br
                  </a>
                </div>
                
                <div className="flex items-center group">
                  <div className="mr-3 p-2 bg-gray-800 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Clock className="text-primary flex-shrink-0 h-4 w-4" />
                  </div>
                  <p className="text-gray-300">{COMPANY_INFO.hours}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md hover:shadow-xl transition-all duration-300"
                  size="lg"
                  asChild
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2 text-xl" /> Solicitar orçamento
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Classul. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Feito com <Heart className="inline h-4 w-4 text-secondary mx-1" /> em Porto Alegre, RS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
