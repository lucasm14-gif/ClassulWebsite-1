import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import ProductCard from "../products/ProductCard";
import { Product } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  TrendingUp, 
  ChevronsRight, 
  CheckCircle,
  Clock
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductsSection = () => {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });
  
  // Animation on scroll
  const [animatedItems, setAnimatedItems] = useState<{ [key: string]: boolean }>({
    title: false,
    features: false,
    products: false,
    cta: false
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Get elements positions
      const titleElement = document.getElementById('products-title');
      const featuresElement = document.getElementById('products-features');
      const productsGridElement = document.getElementById('products-grid');
      const ctaElement = document.getElementById('products-cta');
      
      // Check if elements are in viewport
      if (titleElement && !animatedItems.title) {
        const rect = titleElement.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.8) {
          setAnimatedItems(prev => ({ ...prev, title: true }));
        }
      }
      
      if (featuresElement && !animatedItems.features) {
        const rect = featuresElement.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.8) {
          setAnimatedItems(prev => ({ ...prev, features: true }));
        }
      }
      
      if (productsGridElement && !animatedItems.products) {
        const rect = productsGridElement.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.9) {
          setAnimatedItems(prev => ({ ...prev, products: true }));
        }
      }
      
      if (ctaElement && !animatedItems.cta) {
        const rect = ctaElement.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.8) {
          setAnimatedItems(prev => ({ ...prev, cta: true }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animatedItems]);

  // Create loading skeleton
  const ProductsSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <Skeleton className="h-64 w-full" />
          <div className="p-6">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );

  // Features section component
  const Features = () => (
    <div id="products-features" className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${animatedItems.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-primary hover:shadow-xl relative overflow-hidden transition-all duration-500">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/10 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary/10 rounded-full"></div>
        
        <div className="p-4 bg-primary/10 rounded-full mb-5 group-hover:bg-primary/20 transition-all relative">
          <Award className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Qualidade Premium</h3>
        <p className="text-gray-600">Materiais de alta qualidade e acabamento impecável em todos os nossos produtos desde 1971.</p>
        
        <div className="w-16 h-1 bg-primary/30 rounded-full mt-5"></div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-primary hover:shadow-2xl relative overflow-hidden transition-all duration-500 md:translate-y-4">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/10 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary/10 rounded-full"></div>
        
        <div className="p-4 bg-primary/10 rounded-full mb-5 group-hover:bg-primary/20 transition-all">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Personalização</h3>
        <p className="text-gray-600">Produtos personalizados de acordo com suas necessidades, criando peças únicas e memoráveis.</p>
        
        <div className="w-16 h-1 bg-primary/30 rounded-full mt-5"></div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-primary hover:shadow-2xl relative overflow-hidden transition-all duration-500">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/10 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary/10 rounded-full"></div>
        
        <div className="p-4 bg-primary/10 rounded-full mb-5 group-hover:bg-primary/20 transition-all">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Garantia</h3>
        <p className="text-gray-600">Comprometimento com a satisfação do cliente e garantia de qualidade em cada produto.</p>
        
        <div className="w-16 h-1 bg-primary/30 rounded-full mt-5"></div>
      </div>
    </div>
  );

  return (
    <section className="relative">
      {/* Stylish arrow navigation */}
      <div className="bg-gradient-to-r from-primary/90 via-primary to-primary/90 py-10 text-center relative">
        <div className="absolute left-0 right-0 -top-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" className="w-full h-12">
            <path 
              fill="currentColor" 
              fillOpacity="1"
              className="text-white" 
              d="M0,32L80,37.3C160,43,320,53,480,42.7C640,32,800,0,960,0C1120,0,1280,32,1360,48L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
      
        <div className="container relative">
          <a 
            href="#produtos" 
            className="inline-flex items-center justify-center flex-col text-white group"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-2 mb-4 border border-white/10 shadow-lg group-hover:bg-white/20 transition-all">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-md">
                  <TrendingUp className="h-4 w-4 text-secondary-foreground" />
                </div>
                <span className="font-medium">Descubra nosso catálogo completo</span>
              </div>
            </div>
            
            <div className="bg-white/20 rounded-full p-2 shadow-md animate-bounce group-hover:bg-white/30 transition-all">
              <ChevronDown className="h-6 w-6" />
            </div>
          </a>
        </div>
      </div>
      
      {/* Main products section */}
      <div id="produtos" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container">
          <div id="products-title" className={`text-center mb-20 max-w-3xl mx-auto transition-all duration-1000 ${animatedItems.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-full text-accent mb-4">
              <Badge variant="outline" className="bg-accent text-white border-0">Novo</Badge>
              <span className="text-sm font-medium">Catálogo 2023-2024</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 relative inline-block">
              Nossos Produtos
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
            </h2>
            
            <p className="text-gray-600 text-lg mt-6">
              Descubra nossa linha completa de produtos para homenagens, premiações e reconhecimentos.
              Cada peça é cuidadosamente produzida com materiais de alta qualidade.
            </p>
          </div>
          
          <Features />
          
          <div id="products-grid" className={`transition-all duration-1000 ${animatedItems.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {isLoading ? (
              <ProductsSkeleton />
            ) : error ? (
              <div className="text-center py-8 text-red-500">
                <div className="bg-red-50 rounded-xl p-8 max-w-lg mx-auto border border-red-100">
                  <h3 className="text-xl font-semibold mb-3">Ocorreu um erro ao carregar os produtos</h3>
                  <p>Por favor, tente novamente mais tarde ou entre em contato conosco.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {products?.map((product, idx) => (
                  <div key={product.id} 
                    className="transform transition-all duration-700"
                    style={{ 
                      transitionDelay: `${idx * 100}ms`,
                      opacity: animatedItems.products ? 1 : 0,
                      transform: animatedItems.products ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div id="products-cta" className={`mt-24 transition-all duration-1000 ${animatedItems.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row">
                <div className="p-8 md:p-10 md:w-3/5">
                  <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                    Exclusivo
                  </Badge>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Não encontrou o que procura?</h3>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    Entre em contato conosco e desenvolveremos uma solução personalizada que atenda perfeitamente às suas necessidades.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-gray-600">Atendimento personalizado</div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-gray-600">Entrega rápida</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white"
                      size="lg"
                      asChild
                    >
                      <a 
                        href="https://api.whatsapp.com/send?phone=555189274761"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="mr-2 text-xl" /> Fale conosco
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      <ChevronsRight className="mr-2 h-4 w-4" /> Ver mais produtos
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-2/5 bg-gradient-to-br from-primary to-primary/80 text-white p-8 md:p-10 flex flex-col justify-center items-start relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary/20 rounded-full"></div>
                  
                  <Badge className="bg-white/20 text-white border-0 mb-6">
                    Desde 1971
                  </Badge>
                  
                  <div className="text-5xl font-bold mb-3">+50</div>
                  <p className="text-white/80 text-lg mb-6">Anos de experiência no mercado</p>
                  
                  <div className="flex gap-2 items-center">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-white/80 ml-2">e milhares de clientes satisfeitos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
