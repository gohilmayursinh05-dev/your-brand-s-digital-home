import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-heading">J.D. Color</h3>
            <p className="text-background/60 text-sm font-body">Professional Painting Services</p>
          </div>

          {/* Phone */}
          <a 
            href="tel:+919316109210" 
            className="flex items-center gap-2 text-cta hover:text-cta/80 transition-colors font-semibold"
          >
            <Phone className="w-5 h-5" />
            <span className="font-heading">93161 09210</span>
          </a>

          {/* Copyright */}
          <p className="text-background/50 text-sm font-body">
            © {currentYear} J.D. Color. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
