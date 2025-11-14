import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Slogan */}
          <div className="space-y-4">
            <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center p-4">
              <img src={logo} alt="Importadora Costa" className="w-full h-full object-contain" />
            </div>
            <p className="text-sm opacity-90">
              Potência em movimento, com segurança.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:67998391950"
                className="flex items-start gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>(67) 99839-1950</span>
              </a>
              <a
                href="mailto:importscosta@gmail.com"
                className="flex items-start gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>importscosta@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/imports_costa_ms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>@imports_costa_ms</span>
              </a>
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Localização</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Avenida Julio Ferreira Xavier Nº 4505</span>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Horário de funcionamento</h3>
            <div className="flex items-start gap-2 text-sm">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Segunda a Sexta</p>
                <p className="opacity-90">08:00 às 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>
            &copy; {new Date().getFullYear()} Importadora e Distribuidora Costa LTDA - CNPJ: 55.045.342/0001-10
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
