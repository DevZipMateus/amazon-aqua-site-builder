
import { Crown, Ticket, Home, Users, Percent, Gift, Baby } from "lucide-react";

const Plans = () => {
  return (
    <section id="planos" className="section-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Planos e Opções</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Escolha a melhor opção para sua diversão no Amazon Acqua Park
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Day Use */}
          <div className="card-service relative">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-2xl mb-4 sm:mb-6">
              <Ticket className="h-6 w-6 sm:h-8 sm:w-8 text-accent-dark" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Day Use</h3>
            
            <div className="mb-4 sm:mb-6 space-y-1">
              <div><span className="text-2xl font-bold text-accent-dark">R$ 25</span><span className="text-sm text-gray-600 ml-2">por carro</span></div>
              <div><span className="text-2xl font-bold text-accent-dark">R$ 15</span><span className="text-sm text-gray-600 ml-2">por moto</span></div>
              <div><span className="text-2xl font-bold text-accent-dark">R$ 10</span><span className="text-sm text-gray-600 ml-2">por pessoa</span></div>
            </div>
            
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                Acesso a todas as atrações
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                Piscinas e toboágua
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                Corredeira natural
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                Wi-Fi gratuito
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                Estacionamento gratuito
              </li>
            </ul>
            
            <div className="bg-accent/10 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-gray-600 text-center mb-2">
                <strong>Regras Importantes:</strong>
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Não é permitida entrada de comidas e bebidas</li>
                <li>• Não é permitida entrada de pets</li>
                <li>• Para festas, entrar em contato previamente</li>
              </ul>
            </div>
            
            <a 
              href="https://wa.me/5592992796517?text=Olá! Gostaria de informações sobre o Day Use" 
              className="btn-outline w-full text-center block text-sm sm:text-base"
            >
              Aquisição na Portaria
            </a>
          </div>

          {/* Título de Associação */}
          <div className="card-service relative border-2 border-primary/20 md:col-span-2 lg:col-span-1">
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                Mais Popular
              </span>
            </div>
            
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl mb-4 sm:mb-6">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Título de Associação</h3>
            
            <div className="mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-primary">R$ 999</span>
              <span className="text-sm sm:text-base text-gray-600 ml-2">parcelado no cartão</span>
            </div>
            
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-3 flex-shrink-0" />
                1 titular + 9 dependentes
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <Gift className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-3 flex-shrink-0" />
                5 convidados por visita
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <Percent className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-3 flex-shrink-0" />
                10% desconto no consumo
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                Válido por 1 ano
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                Sem taxa de manutenção
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                Sem grau de parentesco
              </li>
            </ul>
            
            <a 
              href="https://wa.me/5592992796517?text=Olá! Gostaria de informações sobre o Título de Associação" 
              className="btn-hero w-full text-center block text-sm sm:text-base"
            >
              Quero Ser Associado
            </a>
          </div>

          {/* Lotes */}
          <div className="card-service md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-500/10 rounded-2xl mb-4 sm:mb-6">
              <Home className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Lotes à Venda</h3>
            
            <div className="mb-4 sm:mb-6">
              <span className="text-lg sm:text-2xl font-bold text-green-600">A partir de</span>
              <br />
              <span className="text-base sm:text-lg text-gray-600">130,57 m²</span>
            </div>
            
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                Dentro do empreendimento
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                Cachoeiras Residencial e Resort
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                Financiamento próprio
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                Localização privilegiada
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                Contato com a natureza
              </li>
            </ul>
            
            <a 
              href="https://wa.me/5592992796517?text=Olá! Gostaria de informações sobre os lotes à venda" 
              className="btn-outline w-full text-center block border-green-500 text-green-600 hover:bg-green-500 hover:text-white text-sm sm:text-base"
            >
              Consultar Disponibilidade
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 sm:p-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Pronto para a Diversão?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Entre em contato conosco e escolha a melhor opção para você e sua família!
          </p>
          <a 
            href="https://wa.me/5592992796517?text=Olá! Gostaria de mais informações sobre os planos do Amazon Acqua Park" 
            className="btn-secondary"
          >
            Falar com Nossa Equipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
