import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("produtos");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Eternizando momentos especiais desde 1971
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Placas de homenagem, troféus e medalhas com acabamento impecável para suas celebrações.
            </p>
            <Button 
              onClick={scrollToProducts} 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-6"
            >
              Conheça nossos produtos <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Placa de homenagem Classul" 
                className="w-full rounded-lg object-cover h-[300px] md:h-[400px]"
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
