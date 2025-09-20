import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile App', 'E-commerce', 'UI/UX Design'];

  const projects = [
    {
      id: 1,
      title: 'TechStartup Dashboard',
      description: 'A comprehensive analytics dashboard for a growing tech startup with real-time data visualization.',
      category: 'Web Development',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      description: 'Cross-platform mobile application for online shopping with seamless payment integration.',
      category: 'Mobile App',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Restaurant Management System',
      description: 'Complete restaurant management solution with online ordering and inventory tracking.',
      category: 'Web Development',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Fashion E-commerce Store',
      description: 'Modern online fashion store with advanced filtering and personalized recommendations.',
      category: 'E-commerce',
      technologies: ['Shopify', 'JavaScript', 'SCSS', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Healthcare App Design',
      description: 'User-friendly healthcare application design focused on accessibility and ease of use.',
      category: 'UI/UX Design',
      technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Fitness Tracker App',
      description: 'Mobile fitness application with workout tracking, nutrition logging, and social features.',
      category: 'Mobile App',
      technologies: ['Flutter', 'Firebase', 'SQLite', 'REST API'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our latest projects and see how we've helped businesses transform their digital presence 
              with innovative solutions and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most impactful and innovative projects that showcase our expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-glow bg-card border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge className="bg-primary/10 text-primary">Featured</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">All Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through our complete portfolio of successful projects.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Filter className="h-5 w-5 text-muted-foreground mt-2 mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-glow bg-card border-border/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    <Button variant="glass" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="glass" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.featured && (
                      <Badge className="bg-primary/10 text-primary">Featured</Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;