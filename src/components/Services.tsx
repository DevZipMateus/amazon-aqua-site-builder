
import { Waves, UtensilsCrossed, Wifi, Car, ShoppingBag, Baby } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Piscinas e Atrações",
      description: "Piscinas infantis, adulto, toboágua e corredeira natural às margens dos rios Urubu e Urubuí",
      features: ["Piscina infantil", "Piscina adulto", "Toboágua emocionante", "Corredeira natural"]
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurante e Bar",
      description: "Self-service e à la carte com preços acessíveis e refeições saborosas",
      features: ["Self-service", "À la carte", "Preços acessíveis", "Cardápio variado"]
    },
    {
      icon: ShoppingBag,
      title: "Loja de Conveniência",
      description: "Tudo que você precisa durante sua visita em um só lugar",
      features: ["Produtos essenciais", "Conveniência total", "Localização privilegiada", "Horário estendido"]
    },
    {
      icon: Car,
      title: "Estacionamento Gratuito",
      description: "Amplo estacionamento gratuito para sua comodidade e segurança",
      features: ["Totalmente gratuito", "Espaço amplo e seguro", "Atendimento nas piscinas", "Fácil acesso"]
    },
    {
      icon: Wifi,
      title: "Wi-Fi Gratuito",
      description: "Internet gratuita para compartilhar seus momentos especiais",
      features: ["Conexão estável", "Cobertura total", "Sem custo adicional", "Alta velocidade"]
    },
    {
      icon: Baby,
      title: "Crianças até 6 anos",
      description: "Crianças até 6 anos não pagam (mediante comprovação de identidade)",
      features: ["Gratuidade total", "Comprovação simples", "Diversão garantida", "Família primeiro"]
    }
  ];

  return (
    <section id="servicos" className="section-aqua">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Nossos Serviços</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Tudo que você precisa para um dia perfeito de diversão e relaxamento
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div key={index} className="card-service group">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Formas de Pagamento</h3>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-4 sm:gap-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xs sm:text-sm">P</span>
              </div>
              <span className="text-sm sm:text-base">PIX</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xs sm:text-sm">💳</span>
              </div>
              <span className="text-sm sm:text-base">Cartão de Crédito</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xs sm:text-sm">💳</span>
              </div>
              <span className="text-sm sm:text-base">Cartão de Débito</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-xs sm:text-sm">💰</span>
              </div>
              <span className="text-sm sm:text-base">Dinheiro</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-4">
            *Exceto vale refeição
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
