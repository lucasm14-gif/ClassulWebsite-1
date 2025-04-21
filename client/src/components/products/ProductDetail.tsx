import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product, SelectedOptions } from "@/types";
import ProductGallery from "./ProductGallery";
import ProductOptions from "./ProductOptions";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import { ArrowLeft, ShieldCheck, Package, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductDetailProps {
  slug: string | null | undefined;
}

const ProductDetail = ({ slug }: ProductDetailProps) => {
  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: [`/api/products/${slug}`],
  });

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    quantity: 1
  });

  useEffect(() => {
    // Set initial options when product is loaded
    if (product) {
      setSelectedOptions({
        size: product.options?.sizes?.[0]?.id,
        color: product.options?.colors?.[0]?.id,
        quantity: 1
      });
    }
  }, [product]);

  const updateOptions = (options: Partial<SelectedOptions>) => {
    setSelectedOptions(prev => ({ ...prev, ...options }));
  };

  if (isLoading) {
    return (
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Skeleton className="w-full h-[500px] rounded-lg" />
            <div className="grid grid-cols-4 gap-4 mt-4">
              <Skeleton className="w-full h-24 rounded-lg" />
              <Skeleton className="w-full h-24 rounded-lg" />
              <Skeleton className="w-full h-24 rounded-lg" />
              <Skeleton className="w-full h-24 rounded-lg" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-5 w-full mb-6" />
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-full mb-8" />

            <Skeleton className="h-6 w-32 mb-3" />
            <div className="grid grid-cols-4 gap-3 mb-6">
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>

            <Skeleton className="h-6 w-32 mb-3" />
            <div className="grid grid-cols-3 gap-3 mb-6">
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>

            <Skeleton className="h-14 w-full rounded-lg mt-8" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Produto não encontrado</h2>
        <p className="mb-6">O produto que você está procurando não existe ou ocorreu um erro.</p>
        <Link href="/" className="text-primary hover:underline inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-100">
        <div className="container">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/#produtos" className="hover:text-primary transition-colors">Produtos</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <ProductGallery images={product.images} name={product.name} />
            <ProductOptions 
              product={product} 
              selectedOptions={selectedOptions}
              updateOptions={updateOptions}
            />
          </div>

          {/* Product details section */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-flex">
                <TabsTrigger value="description">Descrição</TabsTrigger>
                <TabsTrigger value="features">Características</TabsTrigger>
                <TabsTrigger value="cases">Estojos</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Detalhes do produto</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  <p className="text-gray-600 leading-relaxed">
                    A Classul produz placas de homenagem desde 1971, com o compromisso de oferecer produtos de alta qualidade
                    para momentos especiais. Cada peça é fabricada com materiais selecionados e acabamento impecável.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Características do produto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3">
                        <ShieldCheck className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Qualidade garantida</h4>
                        <p className="text-sm text-gray-600">Materiais selecionados e acabamento impecável</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-2 bg-primary/10 rounded-full mr-3">
                        <Package className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Embalagem segura</h4>
                        <p className="text-sm text-gray-600">Produto entregue em embalagens protegidas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="delivery" className="mt-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Informações de entrega</h3>
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <Clock className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Tempo de produção</h4>
                      <p className="text-sm text-gray-600">Consulte o prazo de produção ao solicitar o orçamento</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Dispomos de entrega para todo o Brasil. Para receber mais informações sobre prazos e valores de frete, 
                    entre em contato através do WhatsApp.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;