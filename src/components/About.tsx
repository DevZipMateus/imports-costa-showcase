import { Users, Heart, Award } from "lucide-react";
import logoHistory from "@/assets/logo-history.png";
const About = () => {
  return <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossa história</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Uma jornada de paixão, família e dedicação ao transporte rodoviário
          </p>
          
          <div className="flex justify-center mb-12">
            <img src={logoHistory} alt="Imports Costa Logo" className="h-74 w-auto " />
          </div>

          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg mb-12">
            <p className="text-lg leading-relaxed mb-6">
              A Imports Costa nasceu do sonho e da determinação de dois irmãos apaixonados por caminhões, mecânica e pelo universo do transporte rodoviário. Desde muito jovens, cresceram ao redor de oficinas e estradas, acompanhando o trabalho duro de motoristas e mecânicos — muitos deles amigos e familiares — que dependiam de peças de qualidade para manter seus veículos rodando com segurança.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Com o tempo, os irmãos perceberam uma necessidade constante no mercado: a dificuldade em encontrar peças de reposição com qualidade garantida, bom preço e pronta entrega. Foi aí que surgiu a ideia de empreender. Unindo o conhecimento técnico de um com a visão comercial do outro, decidiram criar algo próprio, que fizesse a diferença no setor.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              No início, com recursos limitados, começaram pequenos, fazendo importações pontuais e atendendo clientes da região. Cada venda era feita com cuidado, cada cliente era tratado como parceiro. O nome "Imports Costa" surgiu naturalmente, representando a família, a confiança e a origem do negócio.
            </p>
            <p className="text-lg leading-relaxed">
              Graças ao trabalho honesto, à dedicação incansável e ao compromisso com a qualidade, a empresa foi ganhando espaço. O que começou como um pequeno sonho entre dois irmãos, hoje é uma empresa sólida, reconhecida por oferecer peças para caminhões da melhor categoria, sempre com agilidade, responsabilidade e respeito.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Família</h3>
              <p className="text-muted-foreground">
                Uma história construída sobre valores familiares e confiança
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Paixão</h3>
              <p className="text-muted-foreground">
                Amor pelo transporte e dedicação em cada atendimento
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
              <p className="text-muted-foreground">
                Compromisso com excelência em cada peça fornecida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;