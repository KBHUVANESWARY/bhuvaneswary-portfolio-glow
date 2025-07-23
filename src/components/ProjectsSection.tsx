import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Shield, Ship, Eye, AlertTriangle } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Spam Call Detection',
      description: 'Advanced NLP-based machine learning system for identifying spam calls using TF-IDF vectorization and ensemble methods, achieving 95% accuracy in real-world testing.',
      techStack: ['Python', 'NLP', 'TF-IDF', 'Scikit-learn', 'Pandas'],
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-blue-500 to-purple-600',
      accuracy: '95%',
      category: 'NLP + ML'
    },
    {
      title: 'Smart Voting System',
      description: 'Secure digital election platform with blockchain-inspired security measures, real-time vote counting, and comprehensive audit trails for transparent democratic processes.',
      techStack: ['Python', 'Flask', 'SQLite', 'Cryptography', 'React'],
      icon: <Shield className="w-6 h-6" />,
      gradient: 'from-green-500 to-blue-600',
      category: 'Security + Web'
    },
    {
      title: 'Titanic Survival Prediction',
      description: 'Comprehensive ML classification project analyzing passenger data with extensive feature engineering, data cleaning, and model comparison to predict survival outcomes.',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      icon: <Ship className="w-6 h-6" />,
      gradient: 'from-cyan-500 to-teal-600',
      category: 'Classification'
    },
    {
      title: 'Digit Recognition System',
      description: 'Deep learning application using CNN on MNIST dataset with Streamlit interface for real-time digit recognition, featuring interactive drawing canvas and model visualization.',
      techStack: ['Python', 'TensorFlow', 'CNN', 'Streamlit', 'OpenCV'],
      icon: <Eye className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-600',
      category: 'Deep Learning'
    },
    {
      title: 'Intrusion Detection System',
      description: 'Network security solution using machine learning on KDD dataset to detect cyber attacks and anomalous network behavior with Decision Trees and ensemble methods.',
      techStack: ['Python', 'Decision Trees', 'KDD Dataset', 'Network Security'],
      icon: <AlertTriangle className="w-6 h-6" />,
      gradient: 'from-red-500 to-orange-600',
      category: 'Cybersecurity'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of machine learning and data science projects solving real-world challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow-soft transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                
                <CardTitle className="font-poppins text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                {project.accuracy && (
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Accuracy: {project.accuracy}
                    </Badge>
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs hover:shadow-sm transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow-primary/50 transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-secondary hover:shadow-glow-secondary transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;