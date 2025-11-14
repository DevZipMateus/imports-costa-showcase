import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-truck-sunset.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-40">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground})` }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/75"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground mb-6 animate-fade-in tracking-wide drop-shadow-[0_15px_25px_rgba(0,0,0,1)]" style={{ textShadow: '6px 6px 12px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), -2px -2px 8px rgba(0,0,0,0.5)' }}>
            IMPORTS COSTA
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Peças para caminhões de alta qualidade. Especialistas em sistema pneumático e cardan.
          </h2>
          <p className="font-bebas text-3xl md:text-4xl lg:text-5xl text-accent mb-10 max-w-2xl mx-auto animate-fade-in tracking-wide" style={{ animationDelay: "0.4s" }}>
            Potência em movimento, com segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg"
              onClick={() => navigate("/vitrine")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg"
            >
              Conheça nosso catálogo
            </Button>
            <Button 
              size="lg"
              onClick={() => scrollToSection("contato")}
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/60 hover:bg-primary-foreground/20 hover:border-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
