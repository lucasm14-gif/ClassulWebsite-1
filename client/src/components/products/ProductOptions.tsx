import { Product, SelectedOptions } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Minus, Plus } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

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

  return (
    <div className="lg:w-1/2">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Personalize seu {product.name}</h3>
          <p className="text-gray-600 mb-6">
            {product.description}
          </p>
          
          {/* Size Selection */}
          {product.options?.sizes && (
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Tamanho</label>
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
                      className="block text-center py-2 border rounded-lg cursor-pointer peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all"
                    >
                      {size.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Case Color Selection */}
          {product.options?.colors && (
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Cor do Estojo</label>
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
                      className={`flex items-center justify-center py-2 border rounded-lg cursor-pointer ${
                        selectedOptions.color === color.id ? 
                        `${color.id === 'black' ? 'bg-gray-900' : color.id === 'navy' ? 'bg-blue-900' : 'bg-red-700'} text-white border-${color.id === 'black' ? 'gray-900' : color.id === 'navy' ? 'blue-900' : 'red-700'}` : 
                        ''
                      } transition-all`}
                    >
                      <span className={`inline-block w-4 h-4 ${color.color} rounded-full mr-2`}></span>
                      {color.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity Selection */}
          {product.options?.hasQuantity && (
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Quantidade</label>
              <div className="flex items-center">
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon" 
                  onClick={handleQuantityDecrease} 
                  className="rounded-l-lg rounded-r-none"
                  disabled={selectedOptions.quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <input 
                  type="number" 
                  value={selectedOptions.quantity} 
                  min="1" 
                  readOnly
                  className="w-16 h-10 text-center border-t border-b focus:outline-none"
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon" 
                  onClick={handleQuantityIncrease} 
                  className="rounded-r-lg rounded-l-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          
          {/* CTA Button */}
          <Button 
            asChild
            className="w-full btn-whatsapp py-6 text-base"
          >
            <a 
              href={whatsAppLink} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2" /> Solicitar Orçamento
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductOptions;
