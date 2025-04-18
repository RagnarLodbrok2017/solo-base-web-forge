
import { Building2, Users, Hammer, BarChart, Phone, Mail, MapPin, Trophy, Target, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                About SBC Construction
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since our establishment, SBC has been at the forefront of innovative construction 
                solutions. We combine traditional craftsmanship with modern technology to deliver 
                exceptional results that stand the test of time.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Our Mission</h3>
                    <p className="text-gray-600">To deliver exceptional construction projects that exceed client expectations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Excellence</h3>
                    <p className="text-gray-600">Committed to the highest standards of quality and safety in every project.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
                alt="About SBC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building2 className="w-12 h-12 mx-auto text-primary mb-4" />
                <div className="text-4xl font-bold mb-2">150+</div>
                <p className="text-gray-600">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto text-primary mb-4" />
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-gray-600">Team Members</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Briefcase className="w-12 h-12 mx-auto text-primary mb-4" />
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Trophy className="w-12 h-12 mx-auto text-primary mb-4" />
                <div className="text-4xl font-bold mb-2">25+</div>
                <p className="text-gray-600">Awards Won</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Mail className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-gray-600">info@sbconstruction.com</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Construction Ave, Building City, ST 12345</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded transition-colors"
            >
              Contact Us Now
            </Link>
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

