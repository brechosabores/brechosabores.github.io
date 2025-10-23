// src/components/MobileMenu.jsx
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Botão do Menu Mobile */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menu"
        aria-expanded={isMenuOpen}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Navegação do Menu Mobile (renderização condicional) */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 md:hidden py-4 px-4 bg-background/95 border-t border-border shadow-lg">
          <div className="flex flex-col gap-4">
            <a
              href="#inicio"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </a>
            <a
              href="#produtos"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Produtos
            </a>
            <a
              href="#sobre"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              <Phone className="w-4 h-4 mr-2" />
              Fazer Pedido
            </Button>
          </div>
        </nav>
      )}
    </>
  );
}
