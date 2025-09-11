
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src="/lovable-uploads/cdb4e65e-d88a-49c1-be9c-0491421ecdf9.png" 
              alt="Amazon Acqua Park" 
              className="h-12 sm:h-16 w-auto mb-3 sm:mb-4 animate-float"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-3 sm:mb-4">
              É diversão que se fala, não é? Então vem para o Amazon Acqua Park! 
              Mais de 25 anos proporcionando momentos inesquecíveis.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5592992796517" 
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors text-sm">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors text-sm">Sobre</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors text-sm">Serviços</a></li>
              <li><a href="#planos" className="text-gray-400 hover:text-white transition-colors text-sm">Planos</a></li>
              <li><a href="#localizacao" className="text-gray-400 hover:text-white transition-colors text-sm">Localização</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="sm:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Piscinas e Toboágua</li>
              <li>Corredeira Natural</li>
              <li>Restaurante e Bar</li>
              <li>Loja de Conveniência</li>
              <li>Wi-Fi Gratuito</li>
              <li>Estacionamento Gratuito</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  BR-174, KM 984<br />
                  Presidente Figueiredo - AM<br />
                  CEP: 69735-000
                </p>
              </div>
              
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+5592992796517" className="text-gray-400 hover:text-white transition-colors text-sm block">
                    (92) 99279-6517
                  </a>
                  <a href="tel:+5592991048756" className="text-gray-400 hover:text-white transition-colors text-sm block">
                    (92) 99104-8756
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                <a href="mailto:figueiredoempturisticos@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                  figueiredoempturisticos@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              <p>&copy; 2024 Amazon Acqua Park. Todos os direitos reservados.</p>
              <p>CNPJ: 02.386.797/0001-32</p>
            </div>
            
            <div className="text-gray-400 text-sm text-center sm:text-right">
              <p>Funcionamento: Fins de semana e feriados</p>
              <p>Horário: 08h às 17h/18h</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
