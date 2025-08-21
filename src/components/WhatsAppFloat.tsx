
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5592992796517?text=Olá! Gostaria de mais informações sobre o Amazon Acqua Park"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppFloat;
