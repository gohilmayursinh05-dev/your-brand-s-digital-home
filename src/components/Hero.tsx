import { Phone, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium font-body">
              Professional Painting Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight font-heading animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Transform Your Space with
            <span className="block mt-2 bg-gradient-to-r from-cta to-amber-300 bg-clip-text text-transparent">
              Expert Painting
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-body animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Quality Work • Best Finish • Affordable Price
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {["Interior & Exterior", "Wall Texture Work", "Color Consultation"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90 text-sm md:text-base font-body">
                <CheckCircle2 className="w-5 h-5 text-cta" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a href="tel:+919316109210">
              <Button variant="heroCta" size="xl" className="gap-3 text-lg w-full sm:w-auto">
                <Phone className="w-6 h-6" />
                Call Now: 93161 09210
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Services
            </Button>
          </div>

          {/* Phone Number Highlight */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-primary-foreground/60 text-sm mb-2 font-body">Or call us directly at</p>
            <a 
              href="tel:+919316109210" 
              className="text-3xl md:text-4xl font-bold text-primary-foreground hover:text-cta transition-colors font-heading"
            >
              📞 93161 09210
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
