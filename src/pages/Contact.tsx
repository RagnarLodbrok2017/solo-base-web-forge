
import { MapPin, Phone, Mail } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <img
          src="/lovable-uploads/6e2854ce-8bfb-4d45-9454-265fe1b88f14.png"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-heading font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input placeholder="Your Name" required />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Input placeholder="Subject" required />
                </div>
                <div>
                  <textarea 
                    className="w-full h-32 px-3 py-2 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-gray-600">123 Construction Ave, Building City, ST 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600">info@sbconstruction.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map (Placeholder) */}
              <div className="h-64 bg-gray-200 rounded-lg">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
