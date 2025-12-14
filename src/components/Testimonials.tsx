import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    content: "Excellent work! The team was professional, punctual, and the finish quality is outstanding. My home looks brand new. Highly recommend J.D. Color!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    content: "We hired them for our office renovation. The texture work on the walls is beautiful and they completed everything on time and within budget.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Property Developer",
    content: "Best painting contractor I've worked with. Quality materials, skilled workers, and fair pricing. They've done multiple projects for me now.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-cta font-semibold text-sm uppercase tracking-wider mb-3 font-body">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-heading">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cta text-cta" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 font-body leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg font-heading">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground font-heading">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
