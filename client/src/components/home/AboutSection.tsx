import { COMPANY_INFO, WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Nossa história" 
                className="rounded-lg shadow-lg object-cover h-[300px] md:h-[400px] w-full"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">Sobre a Classul</h2>
            <p className="text-gray-600 mb-6">
              {COMPANY_INFO.about}
            </p>
            
            <div className="bg-gray-100 p-5 rounded-lg mb-6">
              <h3 className="font-semibold text-xl mb-3">Informações de Contato</h3>
              
              <div className="flex items-start mb-3">
                <MapPin className="mt-1 mr-3 text-primary" />
                <p>{COMPANY_INFO.address}</p>
              </div>
              
              <div className="flex items-center mb-3">
                <Phone className="mr-3 text-primary" />
                <p>{COMPANY_INFO.phone}</p>
              </div>
              
              <div className="flex items-center">
                <Clock className="mr-3 text-primary" />
                <p>{COMPANY_INFO.hours}</p>
              </div>
            </div>
            
            <Button 
              asChild
              className="btn-whatsapp"
            >
              <a 
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <FaWhatsapp className="mr-2" /> Fale conosco pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
