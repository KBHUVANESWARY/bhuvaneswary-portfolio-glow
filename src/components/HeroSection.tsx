import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-6">
            <span className="gradient-text">K. Bhuvaneswary</span>
          </h1>

          {/* Animated Tagline */}
          <div className="animate-slide-in-right delay-300">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter">
              <span className="text-primary">ML Engineer</span> |{' '}
              <span className="text-secondary">Data Enthusiast</span> |{' '}
              <span className="text-accent">Python Developer</span>
            </p>
          </div>

          {/* Personal Statement */}
          <div className="animate-fade-in delay-500">
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Enthusiastic and detail-oriented Data Science Engineering student with a solid foundation in 
              machine learning, data analysis, and statistical modeling. Passionate about solving real-world 
              problems and applying ML to enhance decision-making.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-scale-in delay-700 flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
              <Mail className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="bg-gradient-secondary hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Floating Animation Element */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;