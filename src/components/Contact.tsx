import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block text-cta font-semibold text-sm uppercase tracking-wider mb-3 font-body">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 font-body">
            Get a free consultation and quote for your painting project today!
          </p>

          {/* Large Phone CTA */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-10 border border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm mb-4 font-body">Call us now for a free estimate</p>
            <a href="tel:+919316109210">
              <div className="text-4xl md:text-6xl font-bold text-primary-foreground hover:text-cta transition-colors mb-6 font-heading">
                📞 93161 09210
              </div>
            </a>
            <a href="tel:+919316109210">
              <Button variant="cta" size="xl" className="gap-3 text-lg">
                <Phone className="w-6 h-6" />
                Call Now - Free Consultation
              </Button>
            </a>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6">
              <div className="w-14 h-14 rounded-full bg-cta/20 flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-cta" />
              </div>
              <h3 className="font-bold text-lg mb-1 font-heading">Phone</h3>
              <a href="tel:+919316109210" className="text-primary-foreground/80 hover:text-cta transition-colors font-body">
                93161 09210
              </a>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="w-14 h-14 rounded-full bg-cta/20 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-cta" />
              </div>
              <h3 className="font-bold text-lg mb-1 font-heading">Working Hours</h3>
              <p className="text-primary-foreground/80 font-body">Mon - Sun: 8AM - 8PM</p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="w-14 h-14 rounded-full bg-cta/20 flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-cta" />
              </div>
              <h3 className="font-bold text-lg mb-1 font-heading">WhatsApp</h3>
              <a 
                href="https://wa.me/919316109210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-cta transition-colors font-body"
              >
                Message Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
