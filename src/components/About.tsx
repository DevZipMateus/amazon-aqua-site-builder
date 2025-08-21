
import { Calendar, MapPin, Users, Waves } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section">Nossa História</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 25 anos proporcionando diversão e momentos inesquecíveis para famílias inteiras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1997 - O Início</h3>
                <p className="text-gray-600">
                  Surgimos como "Figueiredo Praia Clube", com o principal atrativo sendo a 
                  corredeira natural às margens dos rios Urubu e Urubuí.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Waves className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1998 - Expansão</h3>
                <p className="text-gray-600">
                  Passamos a se chamar "Water Park" com a construção das primeiras piscinas, 
                  lojinha e restaurante.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2002 - Amazon Acqua Park</h3>
                <p className="text-gray-600">
                  Sob nova direção, ganhamos nosso nome atual e iniciamos um processo 
                  de expansão que continua até hoje.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 text-center">
              <img 
                src="/lovable-uploads/cdb4e65e-d88a-49c1-be9c-0491421ecdf9.png" 
                alt="Logo Amazon Acqua Park" 
                className="h-32 w-auto mx-auto mb-6 animate-float"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Amazon Acqua Park
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                "É diversão que se fala, não é? Então vem para o Amazon Acqua Park!"
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>107 km de Manaus</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Fins de semana e feriados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
          <p className="text-2xl text-gray-800 font-medium leading-relaxed">
            Um destino de lazer acolhedor e completo, ideal para famílias e grupos em busca de 
            diversão acessível e contato com a natureza na bela região de Presidente Figueiredo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
