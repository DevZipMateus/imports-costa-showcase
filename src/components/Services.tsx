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
    <section id="servicos" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Nossos serviços</h2>
          <p className="text-center text-white/80 mb-4 max-w-2xl mx-auto">
            Especialização em sistema pneumático e cardan
          </p>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-white/90">
            A Imports Costa atua no mercado de peças para caminhões, com especialização nos segmentos de sistema pneumático e sistema de cardan. Trabalhamos com importação e distribuição de componentes de alta qualidade, voltados para garantir a eficiência, a segurança e o desempenho dos veículos pesados.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
