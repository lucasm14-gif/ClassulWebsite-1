import { Link } from "wouter";
import { ArrowRight, Star } from "lucide-react";
import { Product } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/20 group-hover:-translate-y-1">
        <Link href={`/produtos/${product.slug}`}>
          <div className="relative h-64 overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {product.featured && (
              <Badge
                variant="secondary" 
                className="absolute top-3 left-3 py-1"
              >
                <Star className="h-3 w-3 mr-1 fill-current" /> Destaque
              </Badge>
            )}
            
            <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
              <span className="inline-block bg-primary text-white font-medium py-2 px-4 rounded-full text-sm">
                Ver detalhes do produto
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {product.shortDescription}
            </p>
            <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
              Ver detalhes
              <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
