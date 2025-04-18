
import { useState } from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Modern Office Complex",
      category: "commercial",
      location: "Downtown Metro",
      description: "State-of-the-art office complex with sustainable features",
      image: "/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
    },
    {
      title: "Luxury Apartments",
      category: "residential",
      location: "Waterfront District",
      description: "High-end residential complex with premium amenities",
      image: "/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
    },
    {
      title: "Shopping Center",
      category: "commercial",
      location: "Suburban Area",
      description: "Modern retail space with innovative design",
      image: "/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <img
          src="/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
          alt="Our Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Showcasing our finest work and achievements
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex gap-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full ${
                  filter === 'all' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('commercial')}
                className={`px-6 py-2 rounded-full ${
                  filter === 'commercial' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Commercial
              </button>
              <button
                onClick={() => setFilter('residential')}
                className={`px-6 py-2 rounded-full ${
                  filter === 'residential' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Residential
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
