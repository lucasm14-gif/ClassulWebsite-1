import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/produtos/${product.slug}`}>
      <a className="product-card block">
        <div className="h-56 overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.shortDescription}</p>
          <div className="flex items-center text-primary font-medium">
            Ver detalhes
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
