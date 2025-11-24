import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroParts1 from "@/assets/hero-parts-1.png";
import heroParts2 from "@/assets/hero-parts-2.png";
import heroParts3 from "@/assets/hero-parts-3.png";
import heroParts4 from "@/assets/hero-parts-4.png";
import heroParts5 from "@/assets/hero-parts-5.png";
import heroParts6 from "@/assets/hero-parts-6.png";
import heroParts7 from "@/assets/hero-parts-7.png";
import heroParts8 from "@/assets/hero-parts-8.png";
import heroParts9 from "@/assets/hero-parts-9.png";
import heroParts10 from "@/assets/hero-parts-10.png";
import { useNavigate } from "react-router-dom";

const heroImages = [
  heroParts1, heroParts2, heroParts3, heroParts4, heroParts5,
  heroParts6, heroParts7, heroParts8, heroParts9, heroParts10
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    <section id="hero" className="relative min-h-screen flex items-center pt-40 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground mb-6 animate-fade-in tracking-wide drop-shadow-[0_20px_35px_rgba(0,0,0,1)]" style={{ textShadow: '8px 8px 16px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.9), -3px -3px 12px rgba(0,0,0,0.7), 4px 4px 25px rgba(0,0,0,0.8)' }}>
            IMPORTS COSTA
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 font-light animate-fade-in drop-shadow-[0_20px_35px_rgba(0,0,0,1)]" style={{ animationDelay: "0.2s", textShadow: '8px 8px 16px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.9), -3px -3px 12px rgba(0,0,0,0.7), 4px 4px 25px rgba(0,0,0,0.8)' }}>
            Peças para caminhões de alta qualidade. Especialistas em sistema pneumático e cardan.
          </h2>
          <p className="font-bebas text-3xl md:text-4xl lg:text-5xl text-accent mb-10 max-w-2xl mx-auto animate-fade-in tracking-wide drop-shadow-[0_20px_35px_rgba(0,0,0,1)]" style={{ animationDelay: "0.4s", textShadow: '8px 8px 16px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.9), -3px -3px 12px rgba(0,0,0,0.7), 4px 4px 25px rgba(0,0,0,0.8)' }}>
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
