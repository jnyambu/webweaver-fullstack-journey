import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Lightbulb, Award, Heart, Zap } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies.',
      skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design and modern web experiences.',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    },
    {
      name: 'Mike Rodriguez',
      role: 'Project Manager',
      bio: 'Agile project manager ensuring smooth delivery and client satisfaction.',
      skills: ['Agile', 'Scrum', 'Client Relations', 'Quality Assurance'],
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality, delivering pixel-perfect designs and robust code.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships with our clients.',
    },
    {
      icon: Zap,
      title: 'Agile Approach',
      description: 'Fast iterations, continuous feedback, and adaptable development processes.',
    },
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">DevStudio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a passionate team of developers, designers, and strategists dedicated to creating 
              exceptional digital experiences. Since 2019, we've helped over 100 businesses transform 
              their ideas into powerful web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  DevStudio was founded with a simple mission: to bridge the gap between innovative 
                  ideas and exceptional digital products. What started as a small team of passionate 
                  developers has grown into a full-service digital agency.
                </p>
                <p>
                  We believe that great software is not just about code—it's about understanding 
                  people, solving real problems, and creating experiences that matter. Every project 
                  we take on is an opportunity to make a positive impact.
                </p>
                <p>
                  Today, we continue to push boundaries, embrace new technologies, and help our 
                  clients achieve their goals through thoughtful design and robust development.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center bg-card border-border/50">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </Card>
                <Card className="p-6 text-center bg-card border-border/50">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="p-6 text-center bg-card border-border/50">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </Card>
                <Card className="p-6 text-center bg-card border-border/50">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 text-center hover-glow bg-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who bring your projects to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="p-6 hover-glow bg-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;