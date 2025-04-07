import { Product, SelectedOptions } from "@/types";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Minus, Plus, CheckCircle, Check, ShoppingCart } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

interface ProductOptionsProps {
  product: Product;
  selectedOptions: SelectedOptions;
  updateOptions: (options: Partial<SelectedOptions>) => void;
}

const ProductOptions = ({ 
  product, 
  selectedOptions, 
  updateOptions 
}: ProductOptionsProps) => {
  const handleQuantityDecrease = () => {
    if (selectedOptions.quantity > 1) {
      updateOptions({ quantity: selectedOptions.quantity - 1 });
    }
  };

  const handleQuantityIncrease = () => {
    updateOptions({ quantity: selectedOptions.quantity + 1 });
  };

  const generateWhatsAppMessage = () => {
    let message = `Olá! Estou interessado em ${product.name}`;
    
    if (selectedOptions.size) {
      const selectedSize = product.options?.sizes?.find(s => s.id === selectedOptions.size);
      message += ` no tamanho ${selectedSize?.label}`;
    }
    
    if (selectedOptions.color) {
      const selectedColor = product.options?.colors?.find(c => c.id === selectedOptions.color);
      message += ` com estojo ${selectedColor?.label}`;
    }
    
    message += ` (quantidade: ${selectedOptions.quantity}). Poderia me enviar um orçamento?`;
    
    return encodeURIComponent(message);
  };

  const whatsAppLink = `${WHATSAPP_LINK}&text=${generateWhatsAppMessage()}`;

  // Find selected size and color labels
  const selectedSizeLabel = product.options?.sizes?.find(s => s.id === selectedOptions.size)?.label;
  const selectedColorLabel = product.options?.colors?.find(c => c.id === selectedOptions.color)?.label;

  return (
    <div className="lg:w-1/2">
      <div className="mb-2">
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 py-1">
          Feito a mão
        </Badge>
      </div>
      
      <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
      
      <div className="flex items-center mb-5">
        <div className="flex items-center text-green-600 text-sm mr-4">
          <CheckCircle className="h-4 w-4 mr-1" /> Em estoque
        </div>
        <div className="text-gray-600 text-sm">
          ID: {product.id}
        </div>
      </div>
      
      <div className="border-t border-b border-gray-200 py-6 mb-6">
        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>
      
      {/* Selected options summary */}
      {(selectedSizeLabel || selectedColorLabel) && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="text-sm text-gray-500 mb-2">Configuração selecionada:</div>
          <div className="flex flex-wrap gap-3">
            {selectedSizeLabel && (
              <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-sm flex items-center">
                <span className="text-gray-800">Tamanho: {selectedSizeLabel}</span>
              </div>
            )}
            {selectedColorLabel && (
              <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-sm flex items-center">
                <span className="text-gray-800">Estojo: {selectedColorLabel}</span>
              </div>
            )}
            {selectedOptions.quantity > 1 && (
              <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-sm flex items-center">
                <span className="text-gray-800">Qtd: {selectedOptions.quantity}</span>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Size Selection */}
      {product.options?.sizes && (
        <div className="mb-6">
          <label className="block text-gray-800 font-medium mb-3">Selecione o tamanho</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {product.options.sizes.map((size) => (
              <div key={size.id} className="relative">
                <input 
                  type="radio" 
                  name="size" 
                  id={`size-${size.id}`} 
                  className="peer hidden" 
                  checked={selectedOptions.size === size.id}
                  onChange={() => updateOptions({ size: size.id })}
                />
                <label 
                  htmlFor={`size-${size.id}`} 
                  className="block text-center py-3 border rounded-lg cursor-pointer hover:border-primary/50 transition-all peer-checked:border-primary peer-checked:bg-primary/5 shadow-sm relative"
                >
                  {selectedOptions.size === size.id && (
                    <span className="absolute top-2 right-2 text-primary">
                      <Check className="h-4 w-4" />
                    </span>
                  )}
                  <span className="font-medium">{size.label}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Case Color Selection */}
      {product.options?.colors && (
        <div className="mb-6">
          <label className="block text-gray-800 font-medium mb-3">Cor do estojo</label>
          <div className="grid grid-cols-3 gap-3">
            {product.options.colors.map((color) => (
              <div key={color.id} className="relative">
                <input 
                  type="radio" 
                  name="color" 
                  id={`color-${color.id}`} 
                  className="peer hidden" 
                  checked={selectedOptions.color === color.id}
                  onChange={() => updateOptions({ color: color.id })}
                />
                <label 
                  htmlFor={`color-${color.id}`} 
                  className={`flex items-center justify-center py-3 border rounded-lg cursor-pointer hover:border-primary/50 transition-all shadow-sm relative ${
                    selectedOptions.color === color.id ? 'border-primary bg-primary/5' : ''
                  }`}
                >
                  {selectedOptions.color === color.id && (
                    <span className="absolute top-2 right-2 text-primary">
                      <Check className="h-4 w-4" />
                    </span>
                  )}
                  <span className={`inline-block w-4 h-4 ${color.color} rounded-full mr-2 border border-gray-300`}></span>
                  <span className="font-medium">{color.label}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Quantity Selection */}
      {product.options?.hasQuantity && (
        <div className="mb-8">
          <label className="block text-gray-800 font-medium mb-3">Quantidade</label>
          <div className="flex items-center w-1/3">
            <Button 
              type="button" 
              variant="outline" 
              size="icon" 
              onClick={handleQuantityDecrease} 
              className="rounded-l-lg rounded-r-none h-12"
              disabled={selectedOptions.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <input 
              type="number" 
              value={selectedOptions.quantity} 
              min="1" 
              readOnly
              className="w-full h-12 text-center border-t border-b focus:outline-none text-gray-800 font-medium"
            />
            <Button 
              type="button" 
              variant="outline" 
              size="icon" 
              onClick={handleQuantityIncrease} 
              className="rounded-r-lg rounded-l-none h-12"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <Button 
          asChild
          size="lg"
          className="w-full md:w-auto btn-whatsapp py-6 text-base shadow-lg hover:shadow-xl transition-all"
        >
          <a 
            href={whatsAppLink} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2 text-xl" /> Solicitar orçamento
          </a>
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="w-full md:w-auto py-6 text-base border-primary text-primary hover:bg-primary hover:text-white"
          onClick={() => window.location.href = '/#produtos'}
        >
          <ShoppingCart className="mr-2" /> Ver mais produtos
        </Button>
      </div>
    </div>
  );
};

export default ProductOptions;
