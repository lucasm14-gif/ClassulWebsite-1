import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card block group">
      <Link href={`/produtos/${product.slug}`}>
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.shortDescription}</p>
          <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
            Ver detalhes
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
