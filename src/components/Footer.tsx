
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/cdb4e65e-d88a-49c1-be9c-0491421ecdf9.png" 
              alt="Amazon Acqua Park" 
              className="h-16 w-auto mb-4 animate-float"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#planos" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#localizacao" className="text-gray-400 hover:text-white transition-colors">Localização</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  BR-174, KM 984<br />
                  Presidente Figueiredo - AM<br />
                  CEP: 69735-000
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <a href="tel:+5592992796517" className="text-gray-400 hover:text-white transition-colors text-sm">
                  (92) 99279-6517
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <a href="mailto:figueiredoempturisticos@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  figueiredoempturisticos@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Amazon Acqua Park. Todos os direitos reservados.</p>
              <p>CNPJ: 02.386.797/0001-32</p>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
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
