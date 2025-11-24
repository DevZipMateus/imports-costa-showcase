import { Wrench, Settings, Wind, Disc } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Componentes para cardan",
      description: "Peças de alta qualidade para manutenção e reparos do sistema de transmissão do seu caminhão."
    },
    {
      icon: Disc,
      title: "Cardans completos",
      description: "Cardans novos e recondicionados com garantia de qualidade e desempenho superior."
    },
    {
      icon: Wind,
      title: "Sistema pneumático",
      description: "Válvulas pneumáticas, compressores, cuícas e reparos completos para o sistema de freios."
    },
    {
      icon: Wrench,
      title: "Reparos para válvulas",
      description: "Kits de reparos originais e alternativos para manutenção do sistema pneumático."
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-white">Nossos serviços</h2>
          <p className="text-sm sm:text-base text-center text-white/80 mb-3 sm:mb-4 max-w-2xl mx-auto px-2">
            Especialização em sistema pneumático e cardan
          </p>
          <p className="text-sm sm:text-base md:text-lg text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-white/90 px-2">
            A Imports Costa atua no mercado de peças para caminhões, com especialização nos segmentos de sistema pneumático e sistema de cardan. Trabalhamos com importação e distribuição de componentes de alta qualidade, voltados para garantir a eficiência, a segurança e o desempenho dos veículos pesados.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-4 sm:p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
