
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atendê-lo e proporcionar momentos inesquecíveis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-service">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Telefone</h3>
                  <p className="text-gray-600">(92) 99279-6517</p>
                </div>
              </div>
              <a 
                href="tel:+5592992796517" 
                className="btn-outline w-full text-center block"
              >
                Ligar Agora
              </a>
            </div>

            <div className="card-service">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">Atendimento rápido e direto</p>
                </div>
              </div>
              <a 
                href="https://wa.me/5592992796517?text=Olá! Gostaria de mais informações sobre o Amazon Acqua Park" 
                className="btn-whatsapp w-full text-center block"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="card-service">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">figueiredoempturisticos@gmail.com</p>
                </div>
              </div>
              <a 
                href="mailto:figueiredoempturisticos@gmail.com" 
                className="btn-outline w-full text-center block"
              >
                Enviar Email
              </a>
            </div>
          </div>

          {/* Quick Info & CTA */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Informações Rápidas
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Horário</p>
                    <p className="text-sm text-gray-600">Fins de semana: 8h às 17h/18h</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Localização</p>
                    <p className="text-sm text-gray-600">BR-174, KM 984, Presidente Figueiredo</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Day Use</p>
                    <p className="text-sm text-gray-600">R$ 15,00 por pessoa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Pronto para se Divertir?</h3>
              <p className="text-lg mb-6 opacity-90">
                É diversão que se fala, não é? Então vem para o Amazon Acqua Park!
              </p>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5592992796517?text=Olá! Gostaria de agendar minha visita ao Amazon Acqua Park" 
                  className="btn-secondary w-full block text-center"
                >
                  Agendar Minha Visita
                </a>
                <a 
                  href="https://wa.me/5592992796517?text=Olá! Gostaria de saber mais sobre os planos de associação" 
                  className="btn-secondary w-full block text-center"
                >
                  Conhecer Planos
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Dados da Empresa</h4>
              <div className="space-y-2 text-sm text-gray-600">
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
