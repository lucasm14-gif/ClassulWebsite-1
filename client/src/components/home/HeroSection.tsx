import { Button } from "@/components/ui/button";
import { ArrowDown, Award, Star } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("produtos");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#FFC107]/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container relative py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-4 space-x-2">
              <div className="px-3 py-1 bg-primary/20 rounded-full text-primary-foreground text-sm font-medium inline-flex items-center">
                <Star className="w-4 h-4 mr-1" /> Desde 1971
              </div>
              <div className="h-1 w-10 bg-primary rounded"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Eternizando <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">momentos</span> especiais
            </h1>
            
            <p className="text-lg mb-8 text-gray-300 max-w-lg leading-relaxed">
              Placas de homenagem, troféus e medalhas com acabamento impecável para suas celebrações e reconhecimentos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProducts} 
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base"
              >
                Nossos produtos <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-6 text-base"
                onClick={() => window.location.href='/sobre'}
              >
                <Award className="mr-2 h-4 w-4" /> Nossa história
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/20 blur-xl rounded-xl"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Placa de homenagem Classul" 
                  className="w-full rounded-xl object-cover h-[300px] md:h-[450px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent rounded-xl"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Produtos premium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
