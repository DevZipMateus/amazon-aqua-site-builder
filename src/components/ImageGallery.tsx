
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const ImageGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/9da4488d-985c-48c3-bc9c-0848007f9e9a.png",
      alt: "Vista aérea do Amazon Acqua Park com toboáguas e piscinas"
    },
    {
      src: "/lovable-uploads/4438e71d-6d9f-4a41-877a-0ffac72716c0.png",
      alt: "Vista panorâmica do parque aquático em meio à natureza"
    },
    {
      src: "/lovable-uploads/e115d683-8866-444a-b1db-b938fa93105f.png",
      alt: "Piscina infantil com brinquedos aquáticos coloridos"
    },
    {
      src: "/lovable-uploads/0e545103-5e0b-400c-8ca9-2bdcf3b85329.png",
      alt: "Vista aérea completa das instalações do parque"
    },
    {
      src: "/lovable-uploads/9eba1e7a-94a4-4229-8675-fe5785edb4fa.png",
      alt: "Piscina com deck de pedras e área de relaxamento"
    },
    {
      src: "/lovable-uploads/414be4c3-1d63-4a83-b971-bc2ecf01b83e.png",
      alt: "Balde gigante e estruturas aquáticas interativas"
    },
    {
      src: "/lovable-uploads/905952c8-9a40-4e12-8f8c-542bbf5cb816.png",
      alt: "Collage de momentos especiais no Amazon Acqua Park"
    },
    {
      src: "/lovable-uploads/bbcba988-55c2-46fb-8b42-6ef8515791e7.png",
      alt: "Piscina infantil com animais aquáticos infláveis"
    },
    {
      src: "/lovable-uploads/580335b0-78da-49e1-9b0a-328c94351ec5.png",
      alt: "Pôr do sol no parque aquático com reflexos na água"
    },
    {
      src: "/lovable-uploads/351b6904-cfc6-4521-88a9-c7bd7726bd80.png",
      alt: "Vista aérea completa mostrando todas as atrações"
    },
    {
      src: "/lovable-uploads/novas fotos/7fd62a16-151e-4c55-99c7-1f57e4983dbf.jpg",
      alt: "Momentos de alegria no Amazon Acqua Park"
    },
    {
      src: "/lovable-uploads/novas fotos/80F8C434-699F-4638-B6E5-2FF27125342E.jpg",
      alt: "Experiência única no parque aquático"
    },
    {
      src: "/lovable-uploads/novas fotos/87864201-da5c-4cac-9b03-c4ea933cbd3f.jpg",
      alt: "Diversão para toda a família"
    },
    {
      src: "/lovable-uploads/novas fotos/99a4ba75-aa8a-44e7-90dd-326aff5cb985.jpg",
      alt: "Aventuras aquáticas inesquecíveis"
    },
    {
      src: "/lovable-uploads/novas fotos/a3456fe6-e62d-4f12-aa84-909efd965801.jpg",
      alt: "Lazer e entretenimento no Amazon Acqua Park"
    },
    {
      src: "/lovable-uploads/novas fotos/c0098183-7eff-4d57-860d-35202a1dfd22.jpg",
      alt: "Instalações modernas do parque aquático"
    },
    {
      src: "/lovable-uploads/novas fotos/eed4bbe7-1357-42ae-b0e1-7aca6dca6f20.jpg",
      alt: "Momentos especiais em família"
    },
    {
      src: "/lovable-uploads/novas fotos/ff2d9495-220b-493b-a59e-0548f125bdca.jpg",
      alt: "Diversão garantida para todas as idades"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="section-aqua" id="galeria">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Nossa Galeria</h2>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Image Display */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(images[currentIndex].src)}
            />
            
            {/* Zoom indicator - hidden on mobile */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
              <ZoomIn className="h-5 w-5 text-white" />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/50 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Navigation - responsive */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2 overflow-x-auto pb-2 px-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-primary scale-110 shadow-lg'
                    : 'border-white/30 hover:border-primary/50 hover:scale-105'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1 sm:space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-4 sm:w-8 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Expanded Image Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl w-full p-0 bg-black/95">
            <DialogClose className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors">
              <X className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </DialogClose>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Imagem expandida"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ImageGallery;
