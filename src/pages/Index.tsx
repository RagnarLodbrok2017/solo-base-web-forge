
import { Building2, Users, Hammer, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <img
          src="/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-up">
              Building Tomorrow's Infrastructure Today
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-up">
              Professional construction and development solutions for your most ambitious projects
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-construction-dark text-white font-semibold px-8 py-4 rounded transition-colors animate-fade-up"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Construction",
                description: "Full-service construction management and general contracting"
              },
              {
                icon: Users,
                title: "Project Management",
                description: "Expert project management and coordination services"
              },
              {
                icon: Hammer,
                title: "Renovation",
                description: "Complete renovation and remodeling solutions"
              },
              {
                icon: BarChart,
                title: "Development",
                description: "Strategic property development and planning"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                Experience & Expertise in Construction
              </h2>
              <p className="text-gray-600 mb-6">
                With years of experience in the construction industry, we bring unparalleled expertise 
                to every project. Our team of professionals is dedicated to delivering exceptional 
                results that exceed expectations.
              </p>
              <Link
                to="/about"
                className="inline-block bg-secondary hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-construction/20 rounded-lg"></div>
              <img
                src="/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
                alt="Construction expertise"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your construction needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
