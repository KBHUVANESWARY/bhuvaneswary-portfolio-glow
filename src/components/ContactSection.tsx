import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send,
  MapPin,
  MessageCircle
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'k.bhuvaneswary@example.com',
      href: 'mailto:k.bhuvaneswary@example.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 12345 67890',
      href: 'tel:+911234567890'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'K. Bhuvaneswary',
      href: 'https://linkedin.com/in/k-bhuvaneswary'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: '@kbhuvaneswary',
      href: 'https://github.com/kbhuvaneswary'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'India',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-glow-soft">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-2xl">Send a Message</h3>
                  <p className="text-muted-foreground text-sm">I'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="bg-muted/30 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="bg-muted/30 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={6}
                    className="bg-muted/30 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-secondary border-0 text-white shadow-glow-secondary/30">
              <CardContent className="p-8 text-center">
                <h3 className="font-poppins font-bold text-2xl mb-4">
                  Available for Opportunities
                </h3>
                <p className="text-white/90 mb-6">
                  Currently seeking internships, freelance projects, and full-time opportunities 
                  in machine learning and data science.
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2+</div>
                    <div className="text-sm text-white/80">Years Learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm text-white/80">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-white/80">Best Accuracy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="font-poppins font-semibold text-xl mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={item.label}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center space-x-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300 group"
                        >
                          <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{item.label}</div>
                            <div className="font-medium group-hover:text-primary transition-colors">
                              {item.value}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/20">
                          <div className="p-2 bg-primary/20 rounded-lg">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{item.label}</div>
                            <div className="font-medium">{item.value}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;