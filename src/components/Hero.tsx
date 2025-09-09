
import { Waves, Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/415500e0-272a-4475-8e91-4b53759ea6fe.png')`
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full animate-wave"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-white/5 rounded-full animate-splash"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6 sm:mb-8">
            <Waves className="h-12 w-12 sm:h-16 sm:w-16 text-accent animate-bounce" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight bg-black/30 backdrop-blur-sm rounded-2xl px-4 sm:px-8 py-4 sm:py-6 inline-block">
            É diversão que se fala, não é?
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl px-4 sm:px-8 py-4 sm:py-6 mb-6 sm:mb-8 inline-block">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              Então vem para o <strong>Amazon Acqua Park</strong>! 
              Piscinas, toboágua, corredeira natural e muito mais diversão 
              esperando por você em Presidente Figueiredo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
            <a 
              href="https://wa.me/5592992796517?text=Olá! Gostaria de agendar minha visita ao Amazon Acqua Park" 
              className="btn-hero w-full sm:w-auto"
            >
              Agendar Visita
            </a>
            <a href="#planos" className="btn-hero w-full sm:w-auto">
              Ver Planos
            </a>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
            <div className="card-aqua text-center">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Horários</h3>
              <p className="text-xs sm:text-sm text-gray-600">Sáb: 8h-18h | Dom: 8h-17h</p>
            </div>
            
            <div className="card-aqua text-center">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Localização</h3>
              <p className="text-xs sm:text-sm text-gray-600">BR-174, KM 984, Presidente Figueiredo</p>
            </div>
            
            <div className="card-aqua text-center">
              <Waves className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Ingressos</h3>
              <p className="text-xs sm:text-sm text-gray-600">R$25 carro | R$15 moto | R$10 pessoa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
