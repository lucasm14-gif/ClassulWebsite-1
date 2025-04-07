import { useQuery } from "@tanstack/react-query";
import ProductCard from "../products/ProductCard";
import { Product } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ProductsSection = () => {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  // Create loading skeleton
  const ProductsSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
        <div className="p-3 bg-primary/10 rounded-full mb-4">
          <Award className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Qualidade Premium</h3>
        <p className="text-gray-600">Materiais de alta qualidade e acabamento impecável em todos os nossos produtos desde 1971.</p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
        <div className="p-3 bg-primary/10 rounded-full mb-4">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalização</h3>
        <p className="text-gray-600">Produtos personalizados de acordo com suas necessidades, criando peças únicas e memoráveis.</p>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
        <div className="p-3 bg-primary/10 rounded-full mb-4">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Garantia</h3>
        <p className="text-gray-600">Comprometimento com a satisfação do cliente e garantia de qualidade em cada produto.</p>
      </div>
    </div>
  );

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Catálogo Completo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nossos Produtos</h2>
          <p className="text-gray-600 text-lg">
            Descubra nossa linha completa de produtos para homenagens, premiações e reconhecimentos.
            Cada peça é cuidadosamente produzida com materiais de alta qualidade.
          </p>
        </div>
        
        <Features />
        
        {isLoading ? (
          <ProductsSkeleton />
        ) : error ? (
          <div className="text-center py-8 text-red-500">
            Ocorreu um erro ao carregar os produtos. Por favor, tente novamente mais tarde.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="p-6 sm:p-8 text-left">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Produto não encontrado?</h3>
                <p className="text-gray-600 mb-4">
                  Entre em contato conosco e desenvolveremos uma solução personalizada para você.
                </p>
                <a 
                  href="https://api.whatsapp.com/send?phone=555189274761"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="mr-2 text-xl" /> Fale conosco
                </a>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/80 p-6 sm:p-8 text-white">
                <div className="text-4xl font-bold mb-2">+50</div>
                <p className="uppercase tracking-wider font-medium">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
