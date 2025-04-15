
import MainLayout from '@/components/layout/MainLayout';
import SectionTitle from '@/components/ui/SectionTitle';
import ContactForm from '@/components/ui/ContactForm';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <MainLayout>
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Contact Us" 
              subtitle="Have questions about our treks or want to book a custom adventure? Get in touch with our team."
              centered
            />
            
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                  <ContactForm />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-adventure-500 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium text-gray-900">Our Location</h4>
                        <p className="text-gray-600 mt-1">
                          Pet Clinic, DSK Vishwa, Dhayari, Pune, Maharashtra 411041
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-adventure-500 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <p className="text-gray-600 mt-1">
                          <a href="tel:+917337336001" className="hover:text-adventure-600 transition-colors">
                            +91 7337336001
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-adventure-500 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <p className="text-gray-600 mt-1">
                          <a href="mailto:alpinetrekkers26@gmail.com" className="hover:text-adventure-600 transition-colors">
                            alpinetrekkers26@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-adventure-500 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium text-gray-900">Office Hours</h4>
                        <p className="text-gray-600 mt-1">
                          Monday to Saturday: 9:00 AM - 6:00 PM<br />
                          Sunday: Closed (We're out trekking!)
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-gray-900 mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://instagram.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-adventure-100 p-3 rounded-full text-adventure-600 hover:bg-adventure-200 transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                      <a 
                        href="https://facebook.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-adventure-100 p-3 rounded-full text-adventure-600 hover:bg-adventure-200 transition-colors"
                      >
                        <Facebook size={20} />
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-adventure-100 p-3 rounded-full text-adventure-600 hover:bg-adventure-200 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Location" 
            subtitle="Visit us at our office in Pune, Maharashtra."
            centered
          />
          
          <div className="mt-10 bg-white rounded-lg shadow-sm overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5764477929395!2d73.8215833!3d18.4498566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac25dea4be7%3A0x55d7ec4133e521a9!2sDSK%20Vishwa%2C%20Dhayari%2C%20Pune%2C%20Maharashtra%20411041!5e0!3m2!1sen!2sin!4v1657815429121!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Alpine Trekkers Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-adventure-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your trek today or contact us for custom packages and group bookings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/treks"
              className="bg-white text-adventure-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              View All Treks
            </a>
            <a 
              href="tel:+917337336001"
              className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
