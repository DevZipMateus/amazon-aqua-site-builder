import { Crown, Ticket, Home, Users, Percent, Gift, Baby } from "lucide-react";

const Plans = () => {
  return (
    <section id="planos" className="section-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section">Planos e Opções</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha a melhor opção para sua diversão no Amazon Acqua Park
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Day Use */}
          <div className="card-service relative">
            <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
              <Ticket className="h-8 w-8 text-accent-dark" />
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Day Use</h3>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-accent-dark">R$ 15</span>
              <span className="text-gray-600 ml-2">por pessoa</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Acesso a todas as atrações
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Piscinas e toboágua
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Corredeira natural
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Wi-Fi gratuito
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Estacionamento gratuito
              </li>
            </ul>
            
            <div className="bg-accent/10 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 text-center">
                <Baby className="h-4 w-4 inline mr-1" />
                Crianças até 6 anos não pagam
              </p>
            </div>
            
            <a 
              href="https://wa.me/5592992796517?text=Olá! Gostaria de informações sobre o Day Use" 
              className="btn-outline w-full text-center block"
            >
              Aquisição na Portaria
            </a>
          </div>

          {/* Título de Associação */}
          <div className="card-service relative border-2 border-primary/20">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                Mais Popular
              </span>
            </div>
            
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Crown className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Título de Associação</h3>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">R$ 999</span>
              <span className="text-gray-600 ml-2">parcelado no cartão</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <Users className="h-4 w-4 text-primary mr-3" />
                1 titular + 9 dependentes
              </li>
              <li className="flex items-center text-gray-600">
                <Gift className="h-4 w-4 text-primary mr-3" />
                5 convidados por visita
              </li>
              <li className="flex items-center text-gray-600">
                <Percent className="h-4 w-4 text-primary mr-3" />
                10% desconto no consumo
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Válido por 1 ano
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Sem taxa de manutenção
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Sem grau de parentesco
              </li>
            </ul>
            
            <a 
              href="https://wa.me/5592992796517?text=Olá! Gostaria de informações sobre o Título de Associação" 
              className="btn-hero w-full text-center block"
            >
              Quero Ser Associado
            </a>
          </div>

          {/* Lotes */}
          <div className="card-service">
            <div className="flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl mb-6">
              <Home className="h-8 w-8 text-green-600" />
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lotes à Venda</h3>
            
            <div className="mb-6">
              <span className="text-2xl font-bold text-green-600">A partir de</span>
              <br />
              <span className="text-lg text-gray-600">130,57 m²</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Dentro do empreendimento
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Cachoeiras Residencial e Resort
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Financiamento próprio
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Localização privilegiada
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Contato com a natureza
              </li>
            </ul>
            
            <a 
              href="https://wa.me/5592992796517?text=Olá! Gostaria de informações sobre os lotes à venda" 
              className="btn-outline w-full text-center block border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
            >
              Consultar Disponibilidade
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Pronto para a Diversão?</h3>
          <p className="text-xl mb-8 opacity-90">
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
