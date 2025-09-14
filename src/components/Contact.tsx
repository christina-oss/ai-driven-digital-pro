import { useState } from 'react';
import { Mail, Phone, MapPin, Download, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@yourname.com",
      link: "mailto:hello@yourname.com"
    },
    {
      icon: Phone, 
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Country",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub", 
      url: "https://github.com/yourusername",
      color: "text-gray-800"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/yourusername", 
      color: "text-blue-400"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-card">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss how we can work together 
            to achieve your business goals through innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <div className="bg-card p-8 rounded-xl shadow-custom-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company" 
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company (optional)"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and how I can help..."
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="default" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-card p-8 rounded-xl shadow-custom-lg">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <a 
                            href={item.link} 
                            className="text-primary font-medium hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-lg font-semibold mb-4 text-primary">Connect on Social</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gradient-card rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-200 hover:scale-110"
                        >
                          <IconComponent className={`w-5 h-5 ${social.color}`} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Resume Download */}
              <div className="bg-gradient-primary p-8 rounded-xl text-center">
                <h4 className="text-xl font-semibold text-primary-foreground mb-4">
                  Download My Resume
                </h4>
                <p className="text-primary-foreground/80 mb-6">
                  Get a comprehensive overview of my experience, skills, and achievements.
                </p>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume (PDF)
                </Button>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-card p-6 rounded-xl shadow-custom-md text-center">
                <h4 className="font-semibold text-primary mb-2">Quick Response Promise</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. 
                  For urgent projects, feel free to call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;