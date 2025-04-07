import { Button } from "@/components/ui/button";
import { ArrowDown, Award, Star, ShieldCheck, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("produtos");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary/80 to-primary/90 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container relative py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-4 space-x-2">
              <Badge variant="secondary" className="py-1.5 inline-flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> Desde 1971
              </Badge>
              <div className="h-1 w-10 bg-white/60 rounded"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Eternizando <span className="text-secondary">momentos</span> especiais
            </h1>
            
            <p className="text-lg mb-8 text-white/90 max-w-lg leading-relaxed">
              Placas de homenagem, troféus e medalhas com acabamento impecável para suas celebrações e reconhecimentos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProducts} 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-base"
              >
                Nossos produtos <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                className="border-white hover:bg-white/10 text-white font-semibold px-8 py-6 text-base"
                asChild
              >
                <a 
                  href="https://api.whatsapp.com/send?phone=555189274761"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 text-xl" /> Solicitar orçamento
                </a>
              </Button>
            </div>
            
            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="flex items-center text-white/90">
                <div className="p-2 bg-white/10 rounded-full mr-3">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>Garantia de qualidade</div>
              </div>
              <div className="flex items-center text-white/90">
                <div className="p-2 bg-white/10 rounded-full mr-3">
                  <Award className="h-5 w-5" />
                </div>
                <div>Acabamento premium</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="absolute -inset-3 bg-white/20 blur-xl rounded-xl"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Placa de homenagem Classul" 
                  className="w-full rounded-xl object-cover h-[300px] md:h-[450px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent rounded-xl"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <Badge variant="secondary" className="text-sm font-medium px-3 py-1.5">
                    50+ anos de tradição
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
