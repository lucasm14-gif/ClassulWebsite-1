import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery = ({ images, name }: ProductGalleryProps) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Reset to first image when images array changes
    setCurrentImage(images[0]);
    setCurrentIndex(0);
  }, [images]);

  const handleThumbnailClick = (img: string, index: number) => {
    setCurrentImage(img);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="lg:w-1/2 mb-8 lg:mb-0">
      {/* Main image container */}
      <div className="relative rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
        {/* Navigation arrows */}
        <button 
          onClick={handlePrev} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 transition-colors"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
        
        <button 
          onClick={handleNext} 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 transition-colors"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
        
        {/* Zoom button */}
        <button
          onClick={toggleZoom}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10 transition-colors"
          aria-label={isZoomed ? "Restaurar tamanho" : "Ampliar imagem"}
        >
          <ZoomIn className="h-5 w-5 text-gray-700" />
        </button>
        
        {/* Current image */}
        <div className="flex items-center justify-center">
          <img 
            src={currentImage} 
            alt={name} 
            className={`w-full object-contain h-[350px] md:h-[450px] transition-all duration-500 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={toggleZoom}
          />
        </div>
        
        {/* Image counter indicator */}
        <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3 mt-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(img, index)}
            className={`relative rounded-lg overflow-hidden transition-all ${
              currentImage === img 
                ? 'ring-2 ring-primary ring-offset-2' 
                : 'opacity-70 hover:opacity-100'
            }`}
            aria-label={`Ver imagem ${index + 1} de ${name}`}
          >
            <img 
              src={img} 
              alt={`${name} ${index + 1}`} 
              className="w-full h-20 object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Full screen zoom modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={toggleZoom}>
          <button 
            className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={toggleZoom}
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <img 
            src={currentImage} 
            alt={name} 
            className="max-w-[90%] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
