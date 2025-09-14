import { Brain, Rocket, Target, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Leveraging cutting-edge AI tools to solve complex business challenges and drive innovation."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy is designed with measurable outcomes and ROI at the forefront."
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Staying ahead of digital trends to provide clients with competitive advantages."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Working closely with teams to understand unique needs and deliver tailored solutions."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-card">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          </div>

          {/* Personal Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-up">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
                From Digital Marketing to AI Innovation
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My journey began in traditional digital marketing, where I discovered my passion for 
                data-driven strategies and customer-centric solutions. As AI transformed the landscape, 
                I embraced these new technologies to amplify results for clients.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, I specialize in bridging the gap between cutting-edge AI capabilities and 
                practical business applications. Whether it's automating marketing workflows, 
                building intelligent web applications, or implementing data analytics solutions, 
                I help organizations unlock their digital potential.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not crafting digital strategies or coding solutions, you'll find me 
                exploring the latest AI developments, contributing to open-source projects, 
                and mentoring aspiring digital professionals.
              </p>
            </div>

            <div className="animate-fade-up">
              <div className="bg-card p-8 rounded-xl shadow-custom-lg">
                <h4 className="text-xl font-semibold mb-6 text-primary">Quick Facts</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Based in [Your Location] with global remote experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Specialized in AI automation and web development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Passionate about startup ecosystems and innovation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Continuous learner of emerging technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.title}
                  className="bg-card p-6 rounded-xl shadow-custom-md card-hover text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2 text-primary">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;