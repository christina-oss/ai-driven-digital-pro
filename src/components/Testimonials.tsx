import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      company: "TechStart Solutions",
      content: "Working with this team transformed our digital presence completely. The AI-powered analytics platform they built increased our conversion rates by 40% and gave us insights we never knew we needed. Their expertise in both technology and business strategy is remarkable.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director", 
      company: "GrowthLabs Agency",
      content: "The social media automation system exceeded all expectations. What used to take our team 20 hours per week now takes 2 hours, and the content quality has actually improved. The ROI has been incredible - we've expanded our client base by 200% since implementation.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Emily Johnson",
      role: "VP of Product",
      company: "DataFlow Inc.",
      content: "The onboarding optimization project was a game-changer. User activation increased by 185% and our customer support tickets dropped significantly. The data-driven approach and attention to user experience details made all the difference.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "David Park",
      role: "Real Estate Broker",
      company: "Park Properties Group",
      content: "The lead generation system revolutionized how we operate. We went from manually tracking 50 leads to automatically nurturing 500+ prospects. Our closing rate improved by 40% and we've saved countless hours on administrative work.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Lisa Thompson",
      role: "Co-Founder",
      company: "InnovateCo",
      content: "Beyond the technical expertise, what impressed us most was the strategic thinking and business acumen. Every solution was designed with our specific goals in mind, not just as a technical exercise. True partnership approach.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "James Wilson",
      role: "Head of Digital",
      company: "Enterprise Solutions LLC",
      content: "The combination of AI knowledge, web development skills, and marketing expertise is rare to find. Delivered complex projects on time and under budget while maintaining exceptional quality. Highly recommended for any digital transformation initiative.",
      rating: 5,
      avatar: "/api/placeholder/80/80"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from clients who have experienced transformative results 
            through our collaborative approach to digital innovation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card p-8 rounded-xl shadow-custom-lg card-hover animate-fade-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-accent/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm font-medium text-accent">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
            Trusted by Growing Businesses
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">25+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/80">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">95%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">300%</div>
              <div className="text-primary-foreground/80">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;