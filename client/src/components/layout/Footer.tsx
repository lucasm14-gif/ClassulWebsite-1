import { Link } from "wouter";
import { NAV_LINKS, COMPANY_INFO, SOCIAL_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import classulLogo from "@assets/classul logo 144.png";
import { MapPin, Phone, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const socialIcons = {
    facebook: <Facebook size={18} />,
    instagram: <Instagram size={18} />,
    linkedin: <Linkedin size={18} />
  };

  return (
    <footer id="contato" className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="flex items-start mb-3">
              <MapPin className="mt-1 mr-3 text-primary" />
              <p>{COMPANY_INFO.address}</p>
            </div>
            
            <div className="flex items-center mb-3">
              <Phone className="mr-3 text-primary" />
              <p>{COMPANY_INFO.phone}</p>
            </div>
            
            <div className="flex items-center mb-3">
              <FaWhatsapp className="mr-3 text-primary text-lg" />
              <p>{COMPANY_INFO.whatsapp}</p>
            </div>
            
            <div className="flex items-center">
              <Clock className="mr-3 text-primary" />
              <p>{COMPANY_INFO.hours}</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#produtos" className="hover:text-primary transition-colors">
                  Placas de Homenagem
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social & Logo */}
          <div className="flex flex-col items-center md:items-end">
            <img src={classulLogo} alt="Classul Logo" className="h-16 mb-4" />
            
            <div className="flex space-x-4 mb-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[social.icon as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn-whatsapp font-semibold py-2 px-4 rounded-lg"
            >
              <FaWhatsapp className="mr-2" /> Fale conosco
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Classul. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
