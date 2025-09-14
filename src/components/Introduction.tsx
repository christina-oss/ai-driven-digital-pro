import { Heart, Coffee, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Introduction = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Personal Welcome */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Welcome to my digital world
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nice to <span className="gradient-text">Meet You!</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm more than just a digital marketer – I'm a problem solver, innovator, and your potential partner in digital success.
            </p>
          </div>

          {/* Personal Story Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl shadow-custom-lg card-hover animate-fade-up">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-semibold">My Passion</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I believe technology should serve humanity. That's why I'm passionate about creating 
                digital solutions that don't just look good, but actually solve real problems and 
                make people's lives easier. Every project I take on is driven by this core belief.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-custom-lg card-hover animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-semibold">My Approach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm a firm believer in collaboration over competition. Whether it's over a cup of coffee 
                or a virtual meeting, I love diving deep into your challenges, understanding your goals, 
                and crafting solutions that exceed expectations.
              </p>
            </div>
          </div>

          {/* What I Do Best */}
          <div className="bg-gradient-card p-12 rounded-3xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-12">
              <Code className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">What I Do Best</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I specialize in bridging the gap between complex technology and simple, elegant solutions 
                that drive real business results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
                <h4 className="font-semibold mb-2">Strategy First</h4>
                <p className="text-sm text-muted-foreground">
                  Every solution starts with understanding your unique business needs and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent rounded-lg"></div>
                </div>
                <h4 className="font-semibold mb-2">Innovation Driven</h4>
                <p className="text-sm text-muted-foreground">
                  I leverage the latest AI tools and technologies to create competitive advantages.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-success rounded-lg"></div>
                </div>
                <h4 className="font-semibold mb-2">Results Focused</h4>
                <p className="text-sm text-muted-foreground">
                  Everything I do is measured against tangible outcomes and ROI for your business.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to transform your digital presence? Let's start a conversation about your goals.
            </p>
            <Button variant="default" size="lg" className="group">
              Let's Work Together
              <Heart className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;