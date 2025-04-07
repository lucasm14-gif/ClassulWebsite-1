import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_INFO, WHATSAPP_LINK } from "@/lib/constants";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contato - Classul</title>
        <meta name="description" content="Entre em contato com a Classul para orçamentos e informações sobre placas de homenagem, troféus e mais." />
      </Helmet>
      
      <div className="py-16 bg-gray-100">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-16">Entre em Contato</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <MapPin className="mt-1 mr-3 text-primary" />
                    <div>
                      <h3 className="font-medium">Endereço</h3>
                      <p>{COMPANY_INFO.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mt-1 mr-3 text-primary" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p>{COMPANY_INFO.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaWhatsapp className="mt-1 mr-3 text-primary text-lg" />
                    <div>
                      <h3 className="font-medium">WhatsApp</h3>
                      <p>{COMPANY_INFO.whatsapp}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mt-1 mr-3 text-primary" />
                    <div>
                      <h3 className="font-medium">Horário de Funcionamento</h3>
                      <p>{COMPANY_INFO.hours}</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="w-full btn-whatsapp">
                  <a 
                    href={WHATSAPP_LINK} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <FaWhatsapp className="mr-2" /> Fale conosco pelo WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.8523013514776!2d-51.21111568489339!3d-30.017724481889962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979a8ec9b9bb9%3A0x4eda8a8cbea1c4b6!2sR.%20%C3%81lvaro%20Chaves%2C%20214%20-%20Floresta%2C%20Porto%20Alegre%20-%20RS%2C%2090220-040!5e0!3m2!1spt-BR!2sbr!4v1614967774853!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Mapa da localização da Classul"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
