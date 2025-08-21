
import { MapPin, Clock, Phone, Car, Bus } from "lucide-react";

const Location = () => {
  return (
    <section id="localizacao" className="section-aqua">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-section">Localização</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estrategicamente localizado na BR-174, a apenas 107 km de Manaus
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d-59.9937!3d-2.0275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDEnMzAuMCJTIDU5wrog1MKwMzciMi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Amazon Acqua Park"
              ></iframe>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="https://share.google/S0mV9pHicdhtMsD42" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <MapPin className="h-4 w-4" />
                <span>Ver no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="card-service">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Endereço</h3>
                  <p className="text-gray-600 leading-relaxed">
                    RODOVIA BR 174 KM 984, 2701<br />
                    ZONA RURAL - PRESIDENTE FIGUEIREDO - AM<br />
                    CEP: 69735-000
                  </p>
                </div>
              </div>
            </div>

            <div className="card-service">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Horário de Funcionamento</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Sábados e Domingos:</strong> 08h às 17h ou 18h</p>
                    <p><strong>Feriados:</strong> 08h às 17h ou 18h</p>
                    <p><strong>Férias escolares:</strong> Sextas-feiras incluídas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-service">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Contato</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Telefone:</strong> (92) 99279-6517</p>
                    <p><strong>Email:</strong> figueiredoempturisticos@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Como Chegar</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Car className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">De Carro</p>
                    <p className="text-sm text-gray-600">
                      Pela BR-174, sentido Boa Vista, KM 984 (antigo KM 101)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Bus className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Transporte Público</p>
                    <p className="text-sm text-gray-600">
                      Ônibus de Manaus até terminal rodoviário de Presidente Figueiredo, 
                      depois táxi até o complexo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
