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
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Entre em contato</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato e descubra como podemos ajudar!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">Fale conosco pelo WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Tire suas dúvidas, solicite orçamentos ou faça seu pedido diretamente pelo WhatsApp
              </p>
              <Button 
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                <a 
                  href="https://wa.me/5567998391950"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2" size={20} />
                  Conversar no WhatsApp
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
