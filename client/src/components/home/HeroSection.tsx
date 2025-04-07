import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Award, Star, ShieldCheck, Calendar, CheckCircle, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Handle parallax effect on mousemove
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("produtos");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Text that changes
  const dynamicTexts = ["momentos", "conquistas", "celebrações", "vitórias"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Calculate parallax position
  const moveX = mousePosition.x * 20 - 10;
  const moveY = mousePosition.y * 20 - 10;

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20"
        style={{
          transform: `translate(${moveX * -0.5}px, ${moveY * -0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/20 rounded-full w-2 h-2"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              transform: `translateY(${Math.random() * 100}px)`
            }}
          />
        ))}
      </div>
      
      <div className="container relative py-20 md:py-28">
        {/* Notification badge at top right */}
        <div className="absolute top-2 right-4 md:right-10 z-10">
          <Badge className="bg-white/90 hover:bg-white text-primary gap-1.5 py-1.5 pl-1.5 pr-3 transition-all animate-pulse">
            <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[10px] text-white">
              <TrendingUp className="h-3 w-3" />
            </span>
            <span className="text-xs">Desde 1971</span>
          </Badge>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 mb-10 md:mb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center mb-4 space-x-2">
              <Badge variant="secondary" className="py-1.5 inline-flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> Qualidade garantida
              </Badge>
              <div className="h-1 w-10 bg-white/60 rounded"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Eternizando{" "}
              <span className="inline-block relative text-secondary transition-all duration-500 ease-in-out">
                {dynamicTexts[textIndex]}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary/50 rounded-full"></span>
              </span>{" "}
              especiais
            </h1>
            
            <p className="text-lg mb-8 text-white/90 max-w-lg leading-relaxed">
              Placas de homenagem, troféus e medalhas com acabamento impecável para suas celebrações e reconhecimentos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProducts} 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-base shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                Nossos produtos <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
              
              <Button
                variant="outline"
                className="border-white hover:bg-white/10 text-white font-semibold px-8 py-6 text-base hover:-translate-y-1 transition-all bg-transparent"
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
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors group">
                <div className="p-2 bg-accent/20 rounded-full mr-3 group-hover:bg-accent/30 transition-colors">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>Garantia de qualidade</div>
              </div>
              <div className="flex items-center bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors group">
                <div className="p-2 bg-accent/20 rounded-full mr-3 group-hover:bg-accent/30 transition-colors">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>Acabamento premium</div>
              </div>
            </div>
            
            {/* Featured clients */}
            <div className="mt-8 hidden sm:block">
              <div className="flex items-center">
                <div className="text-white/60 text-sm mr-6">Confiam em nós:</div>
                <div className="flex -space-x-2">
                  {[
                    "https://placekitten.com/50/50",
                    "https://placekitten.com/51/51",
                    "https://placekitten.com/52/52",
                    "https://placekitten.com/53/53"
                  ].map((imageUrl, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border border-white/30 overflow-hidden">
                      <img 
                        src={imageUrl} 
                        alt={`Cliente ${i+1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-xs font-medium">
                    +50
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`md:w-1/2 md:pl-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{
              transform: `translate(${moveX}px, ${moveY}px)`,
              transition: 'transform 0.2s ease-out, opacity 0.7s ease-out, translate 0.7s ease-out'
            }}>
            <div className="relative">
              <div className="absolute -inset-3 bg-white/20 blur-xl rounded-xl"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-500 border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Placa de homenagem Classul" 
                  className="w-full rounded-xl object-cover h-[300px] md:h-[450px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent rounded-xl"></div>
                
                {/* Floating badges */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-accent h-5 w-5" />
                    <span className="text-white text-sm">Qualidade superior</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex flex-col gap-3">
                    <Badge variant="secondary" className="text-sm font-medium px-3 py-1.5 shadow-lg">
                      50+ anos de tradição
                    </Badge>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20 text-sm text-white">
                      Feitos sob medida para você
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      
      {/* CSS for animations - implemented in index.css */}
    </section>
  );
};

export default HeroSection;
