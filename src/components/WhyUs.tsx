import { Award, Clock, Wallet, ThumbsUp, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quality Work",
    description: "Premium materials and expert techniques for lasting results.",
  },
  {
    icon: ThumbsUp,
    title: "Best Finish",
    description: "Smooth, flawless finishes that exceed expectations.",
  },
  {
    icon: Wallet,
    title: "Affordable Price",
    description: "Competitive rates without compromising on quality.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and complete projects on schedule.",
  },
  {
    icon: Shield,
    title: "Guaranteed Work",
    description: "We stand behind our work with quality assurance.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of experience.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-cta font-semibold text-sm uppercase tracking-wider mb-3 font-body">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            The J.D. Color Difference
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Trusted by hundreds of satisfied customers for quality painting services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-cta" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1 font-heading">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "10+", label: "Years Experience" },
            { number: "100%", label: "Customer Satisfaction" },
            { number: "50+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1 font-heading">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
