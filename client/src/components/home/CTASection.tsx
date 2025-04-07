import { WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para eternizar momentos especiais?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Entre em contato conosco para um orçamento personalizado e descubra como podemos transformar suas ideias em homenagens memoráveis.
        </p>
        <Button 
          asChild
          className="bg-white text-primary hover:bg-gray-100 font-semibold py-6 px-8 text-lg"
        >
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <FaWhatsapp className="mr-2 text-lg" /> Solicitar orçamento
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
