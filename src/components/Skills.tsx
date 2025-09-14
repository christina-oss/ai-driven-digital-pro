import { Bot, Code, TrendingUp, Palette, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Bot,
      title: "AI & Automation",
      skills: [
        "ChatGPT & GPT APIs",
        "Midjourney & DALL-E",
        "Zapier & Make.com",
        "Claude & Anthropic APIs",
        "AI Workflow Design",
        "Prompt Engineering",
        "Machine Learning Basics",
        "AI Content Generation"
      ]
    },
    {
      icon: Code,
      title: "Web Development", 
      skills: [
        "React & Next.js",
        "TypeScript & JavaScript",
        "Tailwind CSS",
        "Node.js & Express",
        "API Development",
        "Responsive Design",
        "Git & Version Control",
        "Performance Optimization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      skills: [
        "Google Ads & Analytics",
        "Facebook Ads Manager",
        "SEO & SEM Strategy",
        "Email Marketing",
        "Content Strategy",
        "Social Media Marketing",
        "Conversion Optimization",
        "Marketing Automation"
      ]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: [
        "Google Analytics 4",
        "Data Visualization",
        "A/B Testing",
        "Customer Journey Mapping",
        "SQL Basics",
        "Excel & Sheets Advanced",
        "Looker Studio",
        "Performance Tracking"
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        "Figma & Adobe XD",
        "UI/UX Principles",
        "Brand Strategy",
        "Visual Design",
        "Prototyping",
        "User Research",
        "Design Systems",
        "Creative Direction"
      ]
    },
    {
      icon: Globe,
      title: "Business & Strategy",
      skills: [
        "Project Management",
        "Client Communication",
        "Business Development",
        "Strategic Planning",
        "Agile Methodology",
        "Team Leadership",
        "Startup Consulting",
        "Growth Hacking"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI technologies, web development, and digital marketing 
            to deliver innovative solutions for modern businesses.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-card p-8 rounded-xl shadow-custom-lg card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-gradient-card rounded-lg hover:bg-accent/10 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Certifications & Learning</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Google Analytics Certified",
              "Google Ads Certified", 
              "Meta Blueprint Certified",
              "AI/ML Course Graduate"
            ].map((cert, index) => (
              <div 
                key={cert}
                className="bg-gradient-accent p-4 rounded-lg text-accent-foreground font-medium shadow-custom-md animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;