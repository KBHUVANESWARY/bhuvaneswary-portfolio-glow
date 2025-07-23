import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  const timeline = [
    {
      type: 'education',
      title: 'Data Science Engineering',
      institution: 'University',
      period: '2022 - Present',
      description: 'Pursuing Bachelor\'s degree with focus on Machine Learning and Statistical Modeling'
    },
    {
      type: 'internship',
      title: 'AI/ML Intern',
      institution: 'Makonis',
      period: 'Present',
      description: 'Working on machine learning solutions and data analysis projects'
    },
    {
      type: 'internship',
      title: 'Intern',
      institution: 'Acregate Academy',
      period: '2024',
      description: 'Gained hands-on experience in data science and machine learning applications'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about transforming data into meaningful insights and building intelligent solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Timeline */}
          <div className="space-y-8">
            <h3 className="font-poppins font-semibold text-2xl mb-8 text-center lg:text-left">
              Journey & Experience
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow-soft transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {item.type === 'education' ? (
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-primary" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-secondary" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-poppins font-semibold text-lg">{item.title}</h4>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.period}
                          </div>
                        </div>
                        <p className="text-primary font-medium mb-2">{item.institution}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Profile & Bio */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-primary animate-glow-pulse">
                  <img
                    src={profilePhoto}
                    alt="K. Bhuvaneswary"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-secondary opacity-10 animate-glow-pulse"></div>
              </div>
            </div>

            {/* Bio */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-glow-soft">
              <CardContent className="p-8">
                <h3 className="font-poppins font-semibold text-2xl mb-6 text-center">
                  Professional <span className="gradient-text">Profile</span>
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Enthusiastic and detail-oriented Data Science Engineering student with a solid 
                    foundation in machine learning, data analysis, and statistical modeling. 
                    Passionate about solving real-world problems and applying ML to enhance decision-making.
                  </p>
                  <p>
                    Currently expanding my expertise through hands-on internships at Makonis and 
                    previous experience at Acregate Academy, where I've developed practical skills 
                    in implementing ML solutions and working with complex datasets.
                  </p>
                  <p>
                    My approach combines technical proficiency with creative problem-solving, 
                    always striving to bridge the gap between data insights and business value. 
                    I'm particularly interested in deep learning applications and their potential 
                    to revolutionize various industries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;