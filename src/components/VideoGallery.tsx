import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const VideoGallery = () => {
  const videos = [
    {
      src: "/lovable-uploads/videos/05315654-3f6a-443e-b730-c15941a40941.mp4",
      title: "Diversão no Amazon Acqua Park",
      thumbnail: "/lovable-uploads/videos/05315654-3f6a-443e-b730-c15941a40941.mp4"
    },
    {
      src: "/lovable-uploads/videos/251977a4-12ea-4fb7-88a6-e93c8d029000.mp4",
      title: "Aventuras aquáticas emocionantes",
      thumbnail: "/lovable-uploads/videos/251977a4-12ea-4fb7-88a6-e93c8d029000.mp4"
    },
    {
      src: "/lovable-uploads/videos/3085943f-3965-4ecd-8800-5d9f5b471a5d.mp4",
      title: "Momentos especiais em família",
      thumbnail: "/lovable-uploads/videos/3085943f-3965-4ecd-8800-5d9f5b471a5d.mp4"
    },
    {
      src: "/lovable-uploads/videos/3d0bcc7a-549f-4c44-be00-1cdd5cf1a88c.mp4",
      title: "Experiências únicas no parque",
      thumbnail: "/lovable-uploads/videos/3d0bcc7a-549f-4c44-be00-1cdd5cf1a88c.mp4"
    },
    {
      src: "/lovable-uploads/videos/9871d7fd-94d7-40cb-a0f5-a6e4513b8e94.mp4",
      title: "Lazer e entretenimento",
      thumbnail: "/lovable-uploads/videos/9871d7fd-94d7-40cb-a0f5-a6e4513b8e94.mp4"
    },
    {
      src: "/lovable-uploads/videos/Abraço de mãe feliz dia das mães e dia do abraço Vídeo Facebook.mp4",
      title: "Dia das Mães especial no Amazon Acqua Park",
      thumbnail: "/lovable-uploads/videos/Abraço de mãe feliz dia das mães e dia do abraço Vídeo Facebook.mp4"
    },
    {
      src: "/lovable-uploads/videos/IMG_2782.MOV",
      title: "Momentos de alegria",
      thumbnail: "/lovable-uploads/videos/IMG_2782.MOV"
    },
    {
      src: "/lovable-uploads/videos/MVI_4592.mp4",
      title: "Diversão garantida",
      thumbnail: "/lovable-uploads/videos/MVI_4592.mp4"
    },
    {
      src: "/lovable-uploads/videos/d8b7f772-47f9-48f5-a614-6a230d3f4ce9.mp4",
      title: "Aventuras aquáticas",
      thumbnail: "/lovable-uploads/videos/d8b7f772-47f9-48f5-a614-6a230d3f4ce9.mp4"
    },
    {
      src: "/lovable-uploads/videos/db80800b-e4f3-4184-bf0a-8592ed3248c4.mp4",
      title: "Experiência incrível",
      thumbnail: "/lovable-uploads/videos/db80800b-e4f3-4184-bf0a-8592ed3248c4.mp4"
    },
    {
      src: "/lovable-uploads/videos/dccc15f5-e7f7-4760-9395-d09b6636e3ed.mp4",
      title: "Momentos únicos",
      thumbnail: "/lovable-uploads/videos/dccc15f5-e7f7-4760-9395-d09b6636e3ed.mp4"
    },
    {
      src: "/lovable-uploads/videos/e30924ce-c5f1-4c8a-83ed-15c0734b8c9a.mp4",
      title: "Diversão para toda família",
      thumbnail: "/lovable-uploads/videos/e30924ce-c5f1-4c8a-83ed-15c0734b8c9a.mp4"
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set());

  const handleVideoClick = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
  };

  const togglePlay = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const video = document.getElementById(`video-${index}`) as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingVideos(prev => new Set(prev).add(index));
      } else {
        video.pause();
        setPlayingVideos(prev => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }
    }
  };

  const toggleMute = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const video = document.getElementById(`video-${index}`) as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      if (video.muted) {
        setMutedVideos(prev => new Set(prev).add(index));
      } else {
        setMutedVideos(prev => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }
    }
  };

  return (
    <section className="section-aqua bg-gradient-to-b from-background to-muted/20" id="videos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          Biblioteca de Vídeos
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group cursor-pointer bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => handleVideoClick(video.src)}
            >
              <div className="relative aspect-video">
                <video
                  id={`video-${index}`}
                  src={video.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onLoadedData={(e) => {
                    const videoElement = e.target as HTMLVideoElement;
                    videoElement.currentTime = 1; // Show first frame as thumbnail
                  }}
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => togglePlay(index, e)}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
                      aria-label={playingVideos.has(index) ? "Pausar vídeo" : "Reproduzir vídeo"}
                    >
                      {playingVideos.has(index) ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </button>
                    
                    <button
                      onClick={(e) => toggleMute(index, e)}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
                      aria-label={mutedVideos.has(index) ? "Ativar som" : "Silenciar"}
                    >
                      {mutedVideos.has(index) ? (
                        <VolumeX className="h-6 w-6" />
                      ) : (
                        <Volume2 className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expand indicator */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Amazon Acqua Park
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Video Dialog */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-7xl w-full p-0 bg-black/95">
            <DialogClose className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors">
              <X className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </DialogClose>
            {selectedVideo && (
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[90vh] object-contain"
                playsInline
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default VideoGallery;