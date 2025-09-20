import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Palette, Smartphone, Search, Zap, Users, Trophy, Star } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience and engagement.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic to your website.',
    },
  ];

  const stats = [
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Trophy, value: '250+', label: 'Projects Completed' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
    { icon: Zap, value: '5+', label: 'Years Experience' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern digital workspace with holographic interfaces"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              We Build{' '}
              <span className="gradient-text">Amazing</span>
              <br />
              Digital Experiences
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your ideas into powerful web applications with our expert development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-8 h-8 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-6 hover-glow cursor-pointer group bg-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with cutting-edge technology and creative design.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;