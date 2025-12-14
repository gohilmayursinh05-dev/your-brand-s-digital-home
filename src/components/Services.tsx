import { Paintbrush, Home, Droplets, PaintBucket, Building2, Hammer, Phone } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Painting",
    description: "Transform your indoor spaces with smooth, flawless finishes that bring your vision to life.",
  },
  {
    icon: Home,
    title: "Exterior Painting",
    description: "Weather-resistant coatings that protect and beautify your home's exterior for years.",
  },
  {
    icon: PaintBucket,
    title: "Wall Texture Work",
    description: "Add depth and character with our expert texture applications and decorative finishes.",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description: "Protect your walls from moisture damage with our professional waterproofing solutions.",
  },
  {
    icon: Building2,
    title: "House/Office Painting",
    description: "Complete painting solutions for residential and commercial properties of all sizes.",
  },
  {
    icon: Hammer,
    title: "Renovation Painting",
    description: "Give your renovated spaces the perfect finishing touch with our expert painting services.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-cta font-semibold text-sm uppercase tracking-wider mb-3 font-body">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            Professional Painting Solutions
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            From homes to offices, we deliver quality work with the best finish at affordable prices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="tel:+919316109210">
            <Button variant="cta" size="xl" className="gap-2">
              <Phone className="w-5 h-5" />
              Get Free Consultation: 93161 09210
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
