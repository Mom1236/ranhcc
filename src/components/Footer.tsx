import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Star, Shield, Award } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceAreas = [
    "Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Spring", 
    "Cypress", "Tomball", "Humble", "Kingwood", "Pasadena", "Friendswood"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Rancher Services</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm font-medium">Professional Service Since 2021</span>
                </div>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-8">
              Houston's premier pressure washing service with 3+ years of experience. We provide professional, reliable, and eco-friendly cleaning solutions for residential and commercial properties throughout the Greater Houston metropolitan area.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-amber-400" size={18} />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Call or Text 24/7</div>
                  <a href="tel:+1-346-401-0323" className="text-white font-bold text-lg hover:text-amber-400 transition-colors">
                    (346) 401-0323
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-amber-400" size={18} />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Email Us</div>
                  <a href="mailto:peterbusiness55@gmail.com" className="text-white font-semibold hover:text-amber-400 transition-colors">
                    peterbusiness55@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-amber-400" size={18} />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Service Area</div>
                  <span className="text-white font-semibold">Greater Houston Metropolitan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 gradient-text">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())} 
                    className="text-white/80 hover:text-white font-medium transition-colors hover:translate-x-1 transform duration-300 block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <h5 className="font-bold text-white mb-4">Trust Indicators</h5>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-white/80 text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80 text-sm">BBB A+ Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-white/80 text-sm">200+ 5-Star Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-bold mb-6 gradient-text">Service Areas</h4>
            <div className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-white/80 text-sm py-1 hover:text-white transition-colors">
                  {area}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <h5 className="font-bold text-white mb-4">Business Hours</h5>
              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">12PM - 8PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span className="font-semibold">8AM - 7PM</span>
                </div>
                <div className="text-amber-400 font-semibold text-xs mt-2">
                  Emergency Service Available 24/7
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-white/80 font-medium">
                &copy; 2025 Rancher Services. All rights reserved.
              </p>
              <p className="text-white/60 text-sm mt-1">
                Licensed, Bonded & Insured • EPA Certified • PWNA Member
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-white/60 text-xs">Years</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">200+</div>
                <div className="text-white/60 text-xs">Customers</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4.9</div>
                <div className="text-white/60 text-xs">Rating</div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover-scale"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;