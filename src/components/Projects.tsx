import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Analytics Platform",
      category: "AI & Web Development",
      description: "Built a comprehensive analytics dashboard that uses machine learning to predict customer behavior and optimize conversion rates. Integrated with multiple data sources and provides actionable insights through an intuitive interface.",
      problem: "E-commerce clients struggled to understand customer behavior patterns and optimize their conversion funnels effectively.",
      solution: "Developed a React-based dashboard with AI-powered predictive analytics, real-time data visualization, and automated reporting features.",
      results: [
        "35% increase in conversion rates for clients",
        "50% reduction in manual reporting time", 
        "200% ROI within first 6 months"
      ],
      technologies: ["React", "TypeScript", "Python", "TensorFlow", "Google Analytics API", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Automated Social Media Campaign Generator",
      category: "AI & Marketing Automation",
      description: "Created an AI-driven system that generates personalized social media campaigns across multiple platforms. Uses GPT-4 for content creation and advanced scheduling algorithms for optimal posting times.",
      problem: "Marketing agencies needed to create hundreds of unique social media posts while maintaining brand consistency and engagement.",
      solution: "Built a web application with AI content generation, brand voice training, and automated scheduling across Facebook, Instagram, LinkedIn, and Twitter.",
      results: [
        "80% reduction in content creation time",
        "45% increase in social engagement rates",
        "300% improvement in campaign consistency"
      ],
      technologies: ["Next.js", "OpenAI GPT-4", "Meta API", "LinkedIn API", "PostgreSQL", "Stripe"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SaaS Customer Onboarding Optimization",
      category: "Digital Marketing & UX",
      description: "Redesigned and optimized the customer onboarding flow for a B2B SaaS platform, implementing data-driven UX improvements and automated email sequences to increase user activation and retention.",
      problem: "SaaS startup had only 25% user activation rate and high churn during the first week after signup.",
      solution: "Conducted user research, redesigned onboarding flow, implemented progressive profiling, and created personalized email automation sequences.",
      results: [
        "185% increase in user activation rate",
        "60% reduction in first-week churn",
        "$2M additional ARR within 12 months"
      ],
      technologies: ["Figma", "React", "Node.js", "SendGrid", "Mixpanel", "A/B Testing Tools"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Lead Generation System",
      category: "Full-Stack Development & Marketing",
      description: "Developed a comprehensive lead generation and CRM system for real estate professionals, featuring automated lead scoring, email nurturing, and property matching algorithms.",
      problem: "Real estate agents struggled to efficiently manage leads and provide personalized property recommendations at scale.",
      solution: "Built a full-stack application with automated lead capture, intelligent property matching, CRM integration, and multi-channel follow-up sequences.",
      results: [
        "300% increase in qualified leads",
        "75% improvement in agent productivity",
        "40% higher closing rates"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Zapier", "Twilio", "Mailchimp API"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-card">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world solutions that demonstrate the intersection of AI, web development, 
            and strategic digital marketing to drive measurable business results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video bg-gradient-primary rounded-xl shadow-custom-lg overflow-hidden">
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Project Screenshot</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <span className="text-accent font-medium text-sm uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem, Solution, Results */}
                  <div className="space-y-4">
                    <div className="bg-card p-4 rounded-lg border-l-4 border-destructive">
                      <h4 className="font-semibold text-destructive mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="font-semibold text-primary mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border-l-4 border-success">
                      <h4 className="font-semibold text-success mb-2">Results</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-start gap-2">
                            <ArrowRight className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <Button variant="default" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="accent" 
            size="lg"
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Discuss Your Project
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;