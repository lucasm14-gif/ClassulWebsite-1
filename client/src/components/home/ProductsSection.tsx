import { useQuery } from "@tanstack/react-query";
import ProductCard from "../products/ProductCard";
import { Product } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

const ProductsSection = () => {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  // Create loading skeleton
  const ProductsSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Skeleton className="h-56 w-full" />
          <div className="p-6">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Produtos</h2>
        
        {isLoading ? (
          <ProductsSkeleton />
        ) : error ? (
          <div className="text-center py-8 text-red-500">
            Ocorreu um erro ao carregar os produtos. Por favor, tente novamente mais tarde.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
