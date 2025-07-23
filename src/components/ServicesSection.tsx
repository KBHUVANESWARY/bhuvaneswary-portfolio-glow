import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Layers, 
  Settings, 
  RefreshCw 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for classification, regression, and clustering problems tailored to your business needs.',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-blue-500 to-purple-600',
      features: ['Custom Model Development', 'Algorithm Selection', 'Performance Optimization', 'Deployment Support']
    },
    {
      title: 'Data Analysis & Reporting',
      description: 'Transform raw data into actionable insights with comprehensive analysis and beautiful visualizations.',
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: 'from-green-500 to-blue-600',
      features: ['Statistical Analysis', 'Data Visualization', 'Report Generation', 'Dashboard Creation']
    },
    {
      title: 'Predictive Modeling',
      description: 'Build forecasting models to predict future trends and make data-driven business decisions.',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-600',
      features: ['Time Series Forecasting', 'Risk Assessment', 'Demand Prediction', 'Trend Analysis']
    },
    {
      title: 'Deep Learning Applications',
      description: 'Advanced neural networks for image recognition, NLP, and complex pattern recognition tasks.',
      icon: <Layers className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-teal-600',
      features: ['CNN Development', 'RNN/LSTM Models', 'Transfer Learning', 'Model Fine-tuning']
    },
    {
      title: 'Automation Scripts',
      description: 'Streamline repetitive tasks with intelligent automation solutions and workflow optimization.',
      icon: <Settings className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-600',
      features: ['Process Automation', 'Data Pipeline Creation', 'ETL Development', 'Workflow Optimization']
    },
    {
      title: 'Full ML Project Lifecycle',
      description: 'End-to-end project management from data collection to model deployment and monitoring.',
      icon: <RefreshCw className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-600',
      features: ['Project Planning', 'Data Collection', 'Model Training', 'Deployment & Monitoring']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive machine learning and data science solutions to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow-soft transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {service.icon}
                  </div>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-20 blur-lg animate-glow-pulse`}></div>
                </div>

                {/* Service Title */}
                <h3 className="font-poppins font-semibold text-xl mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={feature}
                        className="flex items-center justify-center space-x-2 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary border-0 shadow-glow-primary/30">
            <CardContent className="p-8">
              <h3 className="font-poppins font-bold text-2xl text-white mb-4">
                Ready to Transform Your Data?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Let's collaborate to unlock the potential of your data and build intelligent solutions 
                that drive measurable business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start Your Project
                </button>
                <button 
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                  onClick={() => {
                    const element = document.querySelector('#projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Portfolio
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;