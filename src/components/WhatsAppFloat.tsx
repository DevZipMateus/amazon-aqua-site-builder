
const WhatsAppFloat = () => {
  console.log('WhatsAppFloat component rendering');
  
  return (
    <a
      href="https://wa.me/5592992796517?text=Olá! Gostaria de mais informações sobre o Amazon Acqua Park"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/48c5c3f0-79de-42f6-8887-60e640204265.png" 
        alt="WhatsApp" 
        className="h-6 w-6"
        onError={(e) => {
          console.error('WhatsApp image failed to load:', e);
          // Fallback: hide image if it fails to load
          e.currentTarget.style.display = 'none';
        }}
        onLoad={() => console.log('WhatsApp image loaded successfully')}
      />
    </a>
  );
};

export default WhatsAppFloat;
