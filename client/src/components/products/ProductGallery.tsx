import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery = ({ images, name }: ProductGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
      <Card>
        <CardContent className="p-4">
          <img 
            src={currentImage} 
            alt={name} 
            className="w-full rounded-lg object-cover h-[300px] md:h-[400px]"
          />
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(img)}
                className={`w-full rounded-lg overflow-hidden border-2 ${
                  currentImage === img ? 'border-primary' : 'border-transparent'
                }`}
                aria-label={`Ver imagem ${index + 1} de ${name}`}
              >
                <img 
                  src={img} 
                  alt={`${name} ${index + 1}`} 
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductGallery;
