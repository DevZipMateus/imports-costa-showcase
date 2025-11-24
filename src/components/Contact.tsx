import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(67) 99839-1950",
      link: "https://wa.me/5567998391950"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@imports_costa_ms",
      link: "https://www.instagram.com/imports_costa_ms"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Avenida Julio Ferreira Xavier, nº 4505",
      link: "https://www.google.com/maps/search/?api=1&query=Avenida+Julio+Ferreira+Xavier+4505"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Segunda a sexta: 08:00 às 18:00",
      link: null
    }
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-accent-foreground">Entre em contato</h2>
          <p className="text-sm sm:text-base text-center text-accent-foreground/80 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
            Estamos prontos para atender você. Entre em contato e descubra como podemos ajudar!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-4 sm:p-6 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <info.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-words"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-xs sm:text-sm text-muted-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Fale conosco pelo WhatsApp</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
                Tire suas dúvidas, solicite orçamentos ou faça seu pedido diretamente pelo WhatsApp
              </p>
              <Button 
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 w-full sm:w-auto"
              >
                <a 
                  href="https://wa.me/5567998391950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Phone className="mr-2" size={18} />
                  <span className="text-sm sm:text-base">Conversar no WhatsApp</span>
                </a>
              </Button>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.2!2d-54.6!3d-20.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI3JzAwLjAiUyA1NMKwMzYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Imports Costa"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
