import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Price</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Consultoria e Tecnologia com 11 anos de experiência em gestão de ERPs para Agronegócio e Indústria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/diferenciais" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/consultoria" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Consultoria de ERPs
                </Link>
              </li>
              <li>
                <Link to="/servicos/desenvolvimento" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Desenvolvimento
                </Link>
              </li>
              <li>
                <Link to="/servicos/banco-dados" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Otimização de BD
                </Link>
              </li>
              <li>
                <Link to="/servicos/servidores" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Servidores
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>contato@price.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>(XX) XXXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Price Consultoria e Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
