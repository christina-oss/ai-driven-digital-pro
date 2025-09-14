import { Heart, Linkedin, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" }, 
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Contact", href: "#contact" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Resume", href: "#" },
        { name: "Schedule Call", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/yourusername", 
      label: "GitHub"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:hello@yourname.com",
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 border-b border-primary-light/20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-accent bg-clip-text text-transparent">
                    Your Digital Success Partner
                  </span>
                </h3>
                <p className="text-primary-foreground/80 max-w-md leading-relaxed">
                  Specializing in AI-powered solutions, modern web development, and strategic 
                  digital marketing to help businesses thrive in the digital age.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary-light/20 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Your Name. Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and lots of coffee</span>
          </div>
          
          <div className="flex gap-6">
            <button className="hover:text-accent transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-accent transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;