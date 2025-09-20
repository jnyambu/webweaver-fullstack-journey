import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  Server, 
  ArrowRight, 
  Check,
  Zap,
  Globe,
  Database,
  Shield
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: [
        'React & Next.js Development',
        'TypeScript Implementation',
        'Responsive Design',
        'Performance Optimization',
        'Cross-browser Compatibility',
        'Progressive Web Apps (PWAs)'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      price: 'Starting at $2,500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design System',
        'Accessibility Compliance',
        'User Testing',
        'Design Handoff'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      price: 'Starting at $1,800',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: [
        'React Native Development',
        'Native iOS & Android',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      price: 'Starting at $4,000',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing and inventory management.',
      features: [
        'Custom E-commerce Platforms',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing',
        'Customer Analytics',
        'SEO Optimization'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Magento'],
      price: 'Starting at $3,500',
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Improve your search rankings and drive organic traffic to your website.',
      features: [
        'Technical SEO Audit',
        'Keyword Research',
        'Content Optimization',
        'Link Building',
        'Analytics Setup',
        'Performance Monitoring'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Search Console'],
      price: 'Starting at $800/month',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust server-side solutions and API development.',
      features: [
        'RESTful API Development',
        'Database Design',
        'Cloud Infrastructure',
        'Security Implementation',
        'Performance Optimization',
        'Third-party Integrations'
      ],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
      price: 'Starting at $3,000',
    },
  ];

  const additionalServices = [
    { icon: Globe, title: 'Domain & Hosting', description: 'Complete hosting solutions with SSL certificates.' },
    { icon: Database, title: 'Database Management', description: 'Secure and scalable database solutions.' },
    { icon: Shield, title: 'Security Audits', description: 'Comprehensive security assessments and fixes.' },
    { icon: Zap, title: 'Performance Optimization', description: 'Speed up your website and improve user experience.' },
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From concept to deployment, we provide comprehensive digital solutions that help your business grow and succeed in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service List */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Choose a Service</h2>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    onClick={() => setSelectedService(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedService === index
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-card border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <service.icon className="h-5 w-5" />
                      <span className="font-medium">{service.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card border-border/50">
                <div className="flex items-center space-x-4 mb-6">
                  {React.createElement(services[selectedService].icon, {
                    className: "h-8 w-8 text-primary"
                  })}
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      {services[selectedService].title}
                    </h3>
                    <p className="text-muted-foreground">
                      {services[selectedService].description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-card-foreground">What's Included</h4>
                    <ul className="space-y-2">
                      {services[selectedService].features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-card-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {services[selectedService].technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mb-6">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {services[selectedService].price}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Custom quotes available based on project scope
                      </p>
                    </div>

                    <Button variant="hero" className="w-full" asChild>
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support services to ensure your project's long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={service.title}
                className="p-6 text-center hover-glow bg-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap' },
              { step: '03', title: 'Development', description: 'Building with agile methodology' },
              { step: '04', title: 'Launch', description: 'Deployment and ongoing support' },
            ].map((phase, index) => (
              <div
                key={phase.step}
                className="text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;