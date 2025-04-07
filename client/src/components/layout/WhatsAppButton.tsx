import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 btn-whatsapp p-4 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
            aria-label="Contato via WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Solicite um orçamento</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
