
import { Award, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <img
          src="/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
          alt="About SBC"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            About SBC
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Building excellence through innovation, quality, and dedication.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Our Vision & Mission
              </h2>
              <p className="text-gray-600 mb-6">
                At SBC, we envision transforming the construction landscape through 
                innovative solutions and sustainable practices. Our mission is to deliver 
                exceptional construction and development services that exceed client 
                expectations while maintaining the highest standards of quality and safety.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Excellence in Service</h3>
                    <p className="text-gray-600">Committed to delivering the highest quality in every project.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building2 className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Innovative Solutions</h3>
                    <p className="text-gray-600">Employing cutting-edge technology and methods.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Expert Team</h3>
                    <p className="text-gray-600">Skilled professionals dedicated to your success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
                alt="Our work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
