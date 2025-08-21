
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#planos", label: "Planos" },
    { href: "#localizacao", label: "Localização" },
    { href: "#contato", label: "Contato" }
  ];

  return (
    <header className={`nav-glass ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/cdb4e65e-d88a-49c1-be9c-0491421ecdf9.png" 
              alt="Amazon Acqua Park" 
              className="h-12 w-auto animate-float"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/5592992796517?text=Olá! Gostaria de saber mais sobre o Amazon Acqua Park" 
              className="btn-whatsapp"
              aria-label="Entrar em contato via WhatsApp"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu de navegação"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/10 py-4">
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a 
                      href={item.href} 
                      className="block nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a 
                    href="https://wa.me/5592992796517?text=Olá! Gostaria de saber mais sobre o Amazon Acqua Park" 
                    className="btn-whatsapp block text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Fale Conosco
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
