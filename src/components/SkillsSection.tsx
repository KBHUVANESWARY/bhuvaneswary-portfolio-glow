import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      color: 'primary',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'SQL', level: 85, icon: '💾' },
        { name: 'R', level: 70, icon: '📊' }
      ]
    },
    {
      title: 'Machine Learning',
      color: 'secondary',
      skills: [
        { name: 'Scikit-learn', level: 85, icon: '🤖' },
        { name: 'Linear Regression', level: 90, icon: '📈' },
        { name: 'SVM', level: 80, icon: '⚡' },
        { name: 'Decision Trees', level: 85, icon: '🌳' },
        { name: 'Random Forest', level: 82, icon: '🌲' }
      ]
    },
    {
      title: 'Deep Learning',
      color: 'accent',
      skills: [
        { name: 'TensorFlow', level: 80, icon: '🧠' },
        { name: 'Keras', level: 85, icon: '🔥' },
        { name: 'CNN', level: 78, icon: '👁️' },
        { name: 'RNN', level: 75, icon: '🔄' }
      ]
    },
    {
      title: 'Data Tools & Libraries',
      color: 'primary',
      skills: [
        { name: 'Pandas', level: 90, icon: '🐼' },
        { name: 'NumPy', level: 88, icon: '🔢' },
        { name: 'Matplotlib', level: 85, icon: '📊' },
        { name: 'Jupyter', level: 90, icon: '📓' },
        { name: 'Excel', level: 75, icon: '📈' }
      ]
    }
  ];

  const getColorClass = (color: string) => {
    const colorMap = {
      primary: 'border-primary/30 shadow-glow-primary/20',
      secondary: 'border-secondary/30 shadow-glow-secondary/20',
      accent: 'border-accent/30'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getProgressColor = (color: string) => {
    const colorMap = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      accent: 'bg-accent'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className={`bg-card/80 backdrop-blur-sm border-2 ${getColorClass(category.color)} hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-poppins font-semibold text-xl">{category.title}</h3>
                  <Badge variant="outline" className={`border-${category.color}`}>
                    {category.skills.length} Skills
                  </Badge>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="animate-slide-in-right"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted/30"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full ${getProgressColor(category.color)} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h4 className="font-poppins font-medium text-lg mb-6 text-muted-foreground">
            Additional Competencies
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['Data Visualization', 'Statistical Analysis', 'Data Structures & Algorithms', 'ETL Processes', 'Model Optimization', 'Feature Engineering', 'Cross-Validation', 'Hyperparameter Tuning'].map((skill, index) => (
              <Badge 
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm hover:shadow-glow-secondary/30 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;