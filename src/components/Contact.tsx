
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Entre em Contato</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Estamos prontos para atendê-lo e proporcionar momentos inesquecíveis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="card-service">
              <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Telefones</h3>
                  <p className="text-sm sm:text-base text-gray-600">(92) 99279-6517</p>
                  <p className="text-sm sm:text-base text-gray-600">(92) 99104-8756</p>
                </div>
              </div>
            </div>

            <div className="card-service">
              <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-sm sm:text-base text-gray-600">Atendimento rápido e direto</p>
                </div>
              </div>
              <a 
                href="https://wa.me/5592992796517?text=Olá! Gostaria de mais informações sobre o Amazon Acqua Park" 
                className="btn-whatsapp w-full text-center block text-sm sm:text-base"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="card-service">
              <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600 break-all">figueiredoempturisticos@gmail.com</p>
                </div>
              </div>
              <a 
                href="mailto:figueiredoempturisticos@gmail.com" 
                className="btn-outline w-full text-center block text-sm sm:text-base"
              >
                Enviar Email
              </a>
            </div>
          </div>

          {/* Quick Info & CTA */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
                Informações Rápidas
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">Horário</p>
                    <p className="text-xs sm:text-sm text-gray-600">Sáb: 8h-18h | Dom: 8h-17h</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">Localização</p>
                    <p className="text-xs sm:text-sm text-gray-600">BR-174, KM 984, Presidente Figueiredo</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm sm:text-base">Ingressos</p>
                    <p className="text-xs sm:text-sm text-gray-600">R$25 carro | R$15 moto | R$10 pessoa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 sm:p-8 text-center text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Pronto para se Divertir?</h3>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
                É diversão que se fala, não é? Então vem para o Amazon Acqua Park!
              </p>
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="https://wa.me/5592992796517?text=Olá! Gostaria de agendar minha visita ao Amazon Acqua Park" 
                  className="btn-secondary w-full block text-center text-sm sm:text-base"
                >
                  Agendar Minha Visita
                </a>
                <a 
                  href="https://wa.me/5592992796517?text=Olá! Gostaria de saber mais sobre os planos de associação" 
                  className="btn-secondary w-full block text-center text-sm sm:text-base"
                >
                  Conhecer Planos
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
              <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Dados da Empresa</h4>
              <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                <p><strong>Razão Social:</strong> Amazon Acqua Park</p>
                <p><strong>CNPJ:</strong> 02.386.797/0001-32</p>
                <p><strong>Website:</strong> www.amazonacquapark.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
