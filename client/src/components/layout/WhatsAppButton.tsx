import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 200px
      const scrolled = window.scrollY > 200;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 p-0 shadow-xl flex items-center justify-center transition-all duration-300 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
            aria-label="Contato via WhatsApp"
          >
            <div className="bg-white rounded-full p-1.5 shadow-md">
              <div className="btn-whatsapp p-3 rounded-full flex items-center justify-center relative">
                {/* Pulse effect */}
                <span className="absolute -inset-0.5 rounded-full animate-ping bg-[#25D366]/30"></span>
                <FaWhatsapp className="text-2xl relative z-10" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md py-2 px-3 -ml-1 mr-2">
              <p className="text-gray-800 font-medium text-sm whitespace-nowrap">Solicitar orçamento</p>
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Solicite um orçamento via WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
