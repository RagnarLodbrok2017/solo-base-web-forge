
import { Building2, Users, Hammer, BarChart, Ruler, HardHat } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "General Contracting",
      description: "Comprehensive construction management and execution services for projects of all sizes."
    },
    {
      icon: Ruler,
      title: "Civil Engineering",
      description: "Expert civil engineering solutions for infrastructure and development projects."
    },
    {
      icon: HardHat,
      title: "Structural Design",
      description: "Innovative structural design services ensuring safety and efficiency."
    },
    {
      icon: BarChart,
      title: "Site Development",
      description: "Complete site preparation and development services for construction projects."
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Professional project management ensuring timely and efficient project completion."
    },
    {
      icon: Hammer,
      title: "Renovation",
      description: "Expert renovation and remodeling services for existing structures."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <img
          src="/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comprehensive construction and development solutions for your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
