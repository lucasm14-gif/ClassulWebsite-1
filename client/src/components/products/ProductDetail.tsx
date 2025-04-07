import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product, SelectedOptions } from "@/types";
import ProductGallery from "./ProductGallery";
import ProductOptions from "./ProductOptions";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductDetailProps {
  slug: string;
}

const ProductDetail = ({ slug }: ProductDetailProps) => {
  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: [`/api/products/${slug}`],
  });

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    size: product?.options?.sizes?.[0]?.id,
    color: product?.options?.colors?.[0]?.id,
    quantity: 1
  });

  const updateOptions = (options: Partial<SelectedOptions>) => {
    setSelectedOptions(prev => ({ ...prev, ...options }));
  };

  if (isLoading) {
    return (
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Skeleton className="w-full h-[400px] rounded-lg" />
            <div className="grid grid-cols-3 gap-4 mt-4">
              <Skeleton className="w-full h-24 rounded-lg" />
              <Skeleton className="w-full h-24 rounded-lg" />
              <Skeleton className="w-full h-24 rounded-lg" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-6" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Produto não encontrado</h2>
        <p className="mb-4">O produto que você está procurando não existe ou ocorreu um erro.</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">{product.name}</h2>
        
        <div className="flex flex-col lg:flex-row">
          <ProductGallery images={product.images} name={product.name} />
          <ProductOptions 
            product={product} 
            selectedOptions={selectedOptions}
            updateOptions={updateOptions}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
