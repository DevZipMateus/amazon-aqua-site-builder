import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const VideoGallery = () => {
  const videos = [
    "/lovable-uploads/videos/05315654-3f6a-443e-b730-c15941a40941.mp4",
    "/lovable-uploads/videos/251977a4-12ea-4fb7-88a6-e93c8d029000.mp4",
    "/lovable-uploads/videos/3085943f-3965-4ecd-8800-5d9f5b471a5d.mp4",
    "/lovable-uploads/videos/3d0bcc7a-549f-4c44-be00-1cdd5cf1a88c.mp4",
    "/lovable-uploads/videos/9871d7fd-94d7-40cb-a0f5-a6e4513b8e94.mp4",
    "/lovable-uploads/videos/Abraço de mãe feliz dia das mães e dia do abraço Vídeo Facebook.mp4",
    "/lovable-uploads/videos/IMG_2782.MOV",
    "/lovable-uploads/videos/MVI_4592.mp4",
    "/lovable-uploads/videos/d8b7f772-47f9-48f5-a614-6a230d3f4ce9.mp4",
    "/lovable-uploads/videos/db80800b-e4f3-4184-bf0a-8592ed3248c4.mp4",
    "/lovable-uploads/videos/dccc15f5-e7f7-4760-9395-d09b6636e3ed.mp4",
    "/lovable-uploads/videos/e30924ce-c5f1-4c8a-83ed-15c0734b8c9a.mp4"
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const currentVideo = videoRefs.current[current];
    if (currentVideo) {
      // Play current video
      currentVideo.play();
      
      // Pause all other videos
      videoRefs.current.forEach((video, index) => {
        if (video && index !== current) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [current]);

  const handleVideoEnded = () => {
    if (api) {
      const nextIndex = (current + 1) % videos.length;
      if (nextIndex === 0) {
        // If we're at the end, go to first slide
        api.scrollTo(0);
      } else {
        // Go to next slide
        api.scrollNext();
      }
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
    const currentVideo = videoRefs.current[current];
    if (currentVideo) {
      currentVideo.muted = !muted;
    }
  };

  return (
    <section className="section-aqua bg-gradient-to-b from-background to-muted/20" id="videos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Vídeos do Amazon Acqua Park
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {videos.map((video, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={video}
                      className="w-full h-full object-cover"
                      muted={muted}
                      playsInline
                      onEnded={handleVideoEnded}
                      onLoadedData={(e) => {
                        const videoElement = e.target as HTMLVideoElement;
                        if (index === 0) {
                          videoElement.play(); // Auto-play first video
                        }
                      }}
                    />
                    
                    {/* Mute/Unmute button */}
                    <button
                      onClick={toggleMute}
                      className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
                      aria-label={muted ? "Ativar som" : "Silenciar"}
                    >
                      {muted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm border-0 text-white h-12 w-12" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm border-0 text-white h-12 w-12" />
          </Carousel>
          
          {/* Video indicator dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-primary scale-125" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Ir para vídeo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;