
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Cleo Santana",
      rating: 5,
      timeAgo: "2 anos atrás",
      comment: "Excelente local para passar o fim de semana e/ou feriados. Tem um acesso em uma estrada no meio da selva a um encontro das águas dos rios Urubuí e Rio Urubu."
    },
    {
      name: "Danilo G.",
      rating: 5,
      timeAgo: "um ano atrás",
      comment: "Atendimento de qualidade, parque super atrativo para as crianças e comida boa demais. Passar uns dias no chalé foi uma delícia, amamos a experiência. Voltaremos em breve. Virou nosso refúgio 🙌. Grato a Rayssa e Jacira pela atenção e carinho com minha família.",
      ownerReply: "Olá sr Danilo, ficamos gratos por sua avaliação. Esperamos lhe ver mais vezes com sua família aqui conosco. Voltem sempre."
    },
    {
      name: "Ednelza Carvalho",
      rating: 5,
      timeAgo: "6 anos atrás",
      comment: "Fomos passear no final de semana. Tranquilidade define este local 👏👏👏👏👏."
    },
    {
      name: "Marilany Naval",
      rating: 5,
      timeAgo: "um ano atrás",
      comment: "Lugar lindo, amei",
      visitInfo: "Visitado em: Fim de semana • Tempo de espera: Sem espera • Reservas são recomendadas: Não"
    },
    {
      name: "Natasha Santiago",
      rating: 5,
      timeAgo: "2 anos atrás",
      comment: "Gostei bastante, ótimo para levar as crianças, tem restaurante onde serve uma comida gostosa e com preço até que razoável, comparado a outros locais. Tem a piscina para adultos também, acesso a Internet, bem organizado."
    },
    {
      name: "Carlos Eduardo",
      rating: 5,
      timeAgo: "4 anos atrás",
      comment: "O Amazon Acqua Park, fica localizado na BR 174, precisamente no KM 984 (antigo 101) em Presidente Figueiredo. O empreendimento conta com uma ótima infraestrutura de lazer para a família, bem como estacionamento amplo, restaurante e atendimento nas mesas em toda área do parque. Dispõe de loja para compra de roupas de banho em geral, bebidas, sorvetes e muitas outras opções, podendo também comprar ração para peixes, caso queira alimentar tambaqui e pirarucu no lago. O atendimento é muito bom e a área aquática contém muitas opções para o divertimento de todos."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="section-white" id="depoimentos">
      <div className="container mx-auto px-4">
        <h2 className="heading-section">O que nossos visitantes dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-service relative">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-primary">{testimonial.name}</h3>
                    <span className="text-sm text-muted-foreground">{testimonial.timeAgo}</span>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.comment}"
                </p>

                {/* Visit Info */}
                {testimonial.visitInfo && (
                  <div className="text-sm text-muted-foreground mb-3 p-3 bg-gray-50 rounded-lg">
                    {testimonial.visitInfo}
                  </div>
                )}

                {/* Owner Reply */}
                {testimonial.ownerReply && (
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-primary">Resposta do proprietário (Amazon Acqua Park):</span>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      "{testimonial.ownerReply}"
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-8 text-primary">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-2xl font-bold">5.0</span>
            </div>
            <div className="text-gray-400">|</div>
            <div className="text-lg">
              <span className="font-semibold text-primary">{testimonials.length}+</span>
              <span className="text-muted-foreground ml-1">avaliações positivas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
