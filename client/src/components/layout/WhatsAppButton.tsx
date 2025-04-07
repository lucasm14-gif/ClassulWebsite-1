import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { MessageCircle, X, ChevronUp } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const [expandedMode, setExpandedMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 200px
      const scrolled = window.scrollY > 200;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set a timeout to show the button after 2 seconds regardless of scroll
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    // Show the tooltip after 4 seconds if it hasn't been dismissed
    const tooltipTimer = setTimeout(() => {
      if (!tooltipDismissed) {
        setShowTooltip(true);
        
        // Auto-hide after 7 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 7000);
      }
    }, 4000);
    
    // Switch to compact mode after 10 seconds
    const compactTimer = setTimeout(() => {
      setExpandedMode(false);
    }, 10000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(compactTimer);
    };
  }, [tooltipDismissed]);
  
  const dismissTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setTooltipDismissed(true);
  };

  return (
    <>
      {/* Custom tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-6 z-50 max-w-[260px] bg-white rounded-xl shadow-2xl p-4 animate-fade-in border border-green-100">
          <button 
            onClick={dismissTooltip}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">Podemos ajudar?</h4>
              <p className="text-gray-600 text-xs mt-1">Solicite um orçamento ou tire suas dúvidas pelo WhatsApp.</p>
            </div>
          </div>
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 border-r border-b border-green-100"></div>
        </div>
      )}
      
      {/* Expanded button with text */}
      {expandedMode ? (
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed bottom-6 right-6 z-50 p-0 shadow-xl flex items-center justify-center transition-all duration-500 ${
            isVisible 
              ? "opacity-100 translate-y-0 scale-100 hover:scale-105" 
              : "opacity-0 translate-y-10 scale-90"
          }`}
          aria-label="Contato via WhatsApp"
          onMouseEnter={() => setShowTooltip(false)}
        >
          <div className="bg-white rounded-full p-1.5 shadow-md">
            <div className="bg-[#25D366] hover:bg-[#128C7E] p-3 rounded-full flex items-center justify-center relative text-white">
              {/* Pulse effect */}
              <span className="absolute -inset-0.5 rounded-full animate-ping bg-[#25D366]/30"></span>
              <FaWhatsapp className="text-2xl relative z-10" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md py-3 px-4 -ml-1 mr-2">
            <div className="flex flex-col">
              <p className="text-gray-800 font-bold text-sm whitespace-nowrap">Solicitar orçamento</p>
              <p className="text-gray-500 text-xs whitespace-nowrap">Fale diretamente conosco</p>
            </div>
          </div>
        </a>
      ) : (
        /* Compact button */
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className={`fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-500 transform ${
                  isVisible ? 'scale-100 opacity-100 hover:scale-110' : 'scale-90 opacity-0'
                } group`}
                aria-label="Contato via WhatsApp"
                onMouseEnter={() => setShowTooltip(false)}
              >
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-[#25D366]/30 group-hover:bg-[#25D366]/40 blur-md transition-opacity"></div>
                  <div className="bg-white rounded-full p-2 shadow-md relative">
                    <div className="bg-[#25D366] hover:bg-[#128C7E] p-3 rounded-full flex items-center justify-center relative transition-colors">
                      <FaWhatsapp className="text-2xl text-white" />
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-[#25D366] text-white border-[#25D366]">
              <p>Solicite um orçamento via WhatsApp</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      
      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="h-5 w-5 text-gray-700" />
        </button>
      )}
    </>
  );
};

export default WhatsAppButton;
