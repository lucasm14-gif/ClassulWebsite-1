import { Link } from "wouter";
import { NAV_LINKS, COMPANY_INFO, SOCIAL_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import classulLogo from "@assets/classul logo 144.png";
import { MapPin, Phone, Clock, Facebook, Instagram, Linkedin, Mail, Heart, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const socialIcons = {
    facebook: <Facebook size={20} />,
    instagram: <Instagram size={20} />,
    linkedin: <Linkedin size={20} />
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="relative">
      {/* Top wave separator */}
      <div className="absolute top-0 inset-x-0 h-8 bg-white overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-8 text-gray-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
      
      <div className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* About & Logo */}
            <div className="md:col-span-4">
              <div className="mb-6">
                <Link href="/">
                  <img src={classulLogo} alt="Classul Logo" className="h-16" />
                </Link>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
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
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">Navegação</h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.path} className="group flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Link href={link.path} className="text-gray-300 hover:text-white transition-colors group-hover:translate-x-1 inline-block transition-transform duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">Produtos</h3>
              <ul className="space-y-3">
                <li className="group flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link href="/produtos/placas-homenagem" className="text-gray-300 hover:text-white transition-colors group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Placas de Homenagem
                  </Link>
                </li>
                <li className="group flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link href="/produtos/trofeus" className="text-gray-300 hover:text-white transition-colors group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Troféus
                  </Link>
                </li>
                <li className="group flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link href="/produtos/medalhas" className="text-gray-300 hover:text-white transition-colors group-hover:translate-x-1 inline-block transition-transform duration-300">
                    Medalhas
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="md:col-span-4">
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-3 text-primary flex-shrink-0" />
                  <p className="text-gray-300">{COMPANY_INFO.address}</p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="mr-3 text-primary flex-shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-gray-300 hover:text-white transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <FaWhatsapp className="mr-3 text-primary text-lg flex-shrink-0" />
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="mr-3 text-primary flex-shrink-0" />
                  <a href="mailto:contato@classul.com.br" className="text-gray-300 hover:text-white transition-colors">
                    contato@classul.com.br
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Clock className="mr-3 text-primary flex-shrink-0" />
                  <p className="text-gray-300">{COMPANY_INFO.hours}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center btn-whatsapp font-semibold py-3 px-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaWhatsapp className="mr-2 text-xl" /> Solicitar orçamento
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Classul. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Feito com <Heart className="inline h-4 w-4 text-primary mx-1" /> em Porto Alegre, RS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
