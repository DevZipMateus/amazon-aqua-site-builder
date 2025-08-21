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

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <Waves className="h-16 w-16 text-accent animate-bounce" />
          </div>
          
          <h1 className="heading-hero">
            É diversão que se fala, não é?
          </h1>
          
          <p className="text-hero max-w-2xl mx-auto">
            Então vem para o <strong>Amazon Acqua Park</strong>! 
            Piscinas, toboágua, corredeira natural e muito mais diversão 
            esperando por você em Presidente Figueiredo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://wa.me/5592992796517?text=Olá! Gostaria de agendar minha visita ao Amazon Acqua Park" 
              className="btn-hero"
            >
              Agendar Visita
            </a>
            <a href="#planos" className="btn-secondary">
              Ver Planos
            </a>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="card-aqua text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Fins de Semana</h3>
              <p className="text-sm text-gray-600">Funcionamos sábados, domingos e feriados das 8h às 17h</p>
            </div>
            
            <div className="card-aqua text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Localização</h3>
              <p className="text-sm text-gray-600">BR-174, KM 984, Presidente Figueiredo</p>
            </div>
            
            <div className="card-aqua text-center">
              <Waves className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Day Use</h3>
              <p className="text-sm text-gray-600">R$ 15,00 por pessoa (crianças até 6 anos não pagam)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
