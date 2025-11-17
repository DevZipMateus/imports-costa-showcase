import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavigation = (href: string) => {
    if (href === "vitrine") {
      navigate("/vitrine");
      setIsMobileMenuOpen(false);
      return;
    }
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    } else {
      scrollToSection(href);
    }
  };

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
      setIsMobileMenuOpen(false);
    }
  };
  const navItems = [{
    label: "Início",
    href: "hero"
  }, {
    label: "Sobre",
    href: "sobre"
  }, {
    label: "Missão e visão",
    href: "valores"
  }, {
    label: "Serviços",
    href: "servicos"
  }, {
    label: "Vitrine",
    href: "vitrine"
  }, {
    label: "Contato",
    href: "contato"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background"}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Imports Costa Logo" className="h-16 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => <button key={item.href} onClick={() => handleNavigation(item.href)} className="text-foreground hover:text-primary transition-colors font-medium">
                {item.label}
              </button>)}
            <Button onClick={() => handleNavigation("contato")} variant="default" className="bg-primary hover:bg-primary/90">
              Fale conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            {navItems.map(item => <button key={item.href} onClick={() => handleNavigation(item.href)} className="text-left text-foreground hover:text-primary transition-colors font-medium py-2">
                {item.label}
              </button>)}
            <Button onClick={() => handleNavigation("contato")} variant="default" className="bg-primary hover:bg-primary/90 w-full mt-2">
              Fale conosco
            </Button>
          </div>}
      </nav>
    </header>;
};
export default Header;