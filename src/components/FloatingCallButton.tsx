import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+919316109210"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-cta text-cta-foreground rounded-full shadow-cta hover:bg-cta-hover transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Call J.D. Color"
    >
      {/* Pulse ring animation */}
      <span className="absolute w-full h-full rounded-full bg-cta animate-pulse-ring opacity-40" />
      <span className="absolute w-full h-full rounded-full bg-cta animate-pulse-ring opacity-40 animation-delay-500" style={{ animationDelay: '0.5s' }} />
      
      <Phone className="w-7 h-7 relative z-10 group-hover:animate-bounce" />
    </a>
  );
};

export default FloatingCallButton;
