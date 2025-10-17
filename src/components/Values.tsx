import { Target, Eye, Star, Shield, Clock, Truck } from "lucide-react";

const Values = () => {
  const mission = {
    title: "Missão",
    icon: Target,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Oferecer peças para caminhões da mais alta qualidade, garantindo desempenho, segurança e durabilidade para nossos clientes, com agilidade na entrega, atendimento especializado e compromisso com a excelência."
  };

  const vision = {
    title: "Visão",
    icon: Eye,
    color: "text-accent",
    bgColor: "bg-accent/10",
    description: "Ser referência nacional no fornecimento de peças para caminhões, reconhecida pela confiança, qualidade dos produtos e pela constante inovação no atendimento ao transporte rodoviário de cargas."
  };

  const values = [
    {
      icon: Star,
      title: "Qualidade",
      description: "Trabalhar apenas com peças de alto padrão, que atendem às exigências do mercado e superam as expectativas dos nossos clientes."
    },
    {
      icon: Shield,
      title: "Integridade",
      description: "Manter relações honestas, transparentes e responsáveis com nossos parceiros, clientes e colaboradores."
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Respeitar prazos e garantir entregas rápidas e seguras, contribuindo para a eficiência da operação de nossos clientes."
    },
    {
      icon: Truck,
      title: "Paixão pelo transporte",
      description: "Valorizamos o setor de transporte e sabemos da importância de manter caminhões em perfeito funcionamento."
    }
  ];

  return (
    <section id="valores" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Missão, visão e valores</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Os princípios que guiam nosso trabalho e nosso compromisso com você
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${mission.bgColor} rounded-full flex items-center justify-center mb-6`}>
                <mission.icon className={mission.color} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {mission.description}
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${vision.bgColor} rounded-full flex items-center justify-center mb-6`}>
                <vision.icon className={vision.color} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{vision.title}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {vision.description}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Nossos valores</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-secondary" size={28} />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
