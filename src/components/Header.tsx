import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "@/assets/jd-color-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="J.D. Color Logo" 
              className="h-12 md:h-14 w-auto object-contain rounded-md"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors font-body"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("why-us")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors font-body"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors font-body"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors font-body"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919316109210">
              <Button variant="cta" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-left font-body"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("why-us")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-left font-body"
              >
                Why Us
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-left font-body"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-left font-body"
              >
                Contact
              </button>
              <a href="tel:+919316109210" className="mt-2">
                <Button variant="cta" className="w-full gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: 93161 09210
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
