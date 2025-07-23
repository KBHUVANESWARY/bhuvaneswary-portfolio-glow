import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';

import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-surface">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/20 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 K. Bhuvaneswary. Built with passion for data science and machine learning.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            Designed with modern web technologies and elegant animations
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
