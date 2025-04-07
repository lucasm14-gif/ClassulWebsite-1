import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import ProductDetail from "@/components/products/ProductDetail";
import CTASection from "@/components/home/CTASection";
import { Product } from "@/types";
import { useEffect } from "react";

const ProductPage = () => {
  const { slug } = useParams();
  
  const { data: product } = useQuery<Product>({
    queryKey: [`/api/products/${slug}`],
  });
  
  // Rolar para o topo da página quando o componente for montado
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{product ? `${product.name} | Classul` : "Produto | Classul"}</title>
        <meta 
          name="description" 
          content={product ? product.shortDescription : "Conheça nossos produtos de qualidade."} 
        />
      </Helmet>
      
      <ProductDetail slug={slug} />
      <CTASection />
    </>
  );
};

export default ProductPage;
