import { MapPin, Calendar, Trophy, Target } from 'lucide-react';

const PersonalJourney = () => {
  const journeySteps = [
    {
      year: "2020",
      title: "Digital Marketing Beginnings",
      description: "Started my journey in traditional digital marketing, focusing on data-driven campaigns and customer acquisition strategies.",
      icon: MapPin,
      highlight: false
    },
    {
      year: "2021",
      title: "First AI Integration",
      description: "Discovered the power of AI in marketing automation and began integrating machine learning tools into my workflows.",
      icon: Target,
      highlight: true
    },
    {
      year: "2022",
      title: "Web Development Mastery",
      description: "Expanded skills into full-stack development, combining marketing insights with technical implementation.",
      icon: Trophy,
      highlight: false
    },
    {
      year: "2023-Now",
      title: "AI Solutions Expert",
      description: "Leading digital transformation projects, helping businesses leverage AI for competitive advantage and growth.",
      icon: Calendar,
      highlight: true
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From curious beginner to AI solutions expert – here's how my passion for technology 
              and problem-solving shaped my career path.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.year}
                  className={`relative flex items-center mb-12 animate-fade-up ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`bg-card p-6 rounded-xl shadow-custom-lg ${
                      step.highlight ? 'ring-2 ring-accent/20' : ''
                    } card-hover`}>
                      <div className={`flex items-center gap-3 mb-3 ${
                        isEven ? 'justify-end' : 'justify-start'
                      }`}>
                        <span className="text-2xl font-bold text-accent">{step.year}</span>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          step.highlight ? 'bg-accent' : 'bg-primary'
                        }`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-accent shadow-lg z-10"></div>

                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>

          {/* Current Focus */}
          <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-card p-8 rounded-2xl shadow-custom-lg">
              <h3 className="text-2xl font-bold mb-4">
                Looking <span className="gradient-text">Forward</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm excited to continue pushing boundaries in AI-powered business solutions, 
                helping more organizations unlock their digital potential and achieve extraordinary results. 
                The future of business is digital, and I'm here to guide the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalJourney;