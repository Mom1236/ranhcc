import React from 'react';
import { Award, Users, MapPin, Star, Shield, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "3+", label: "Years Experience", description: "Trusted Service" },
    { icon: Users, number: "200+", label: "Happy Customers", description: "Satisfied Clients" },
    { icon: MapPin, number: "50+", label: "Areas Served", description: "Greater Houston" },
    { icon: Star, number: "5/5", label: "Google Rating", description: "15+ Reviews" }
  ];

  const certifications = [
    "Licensed, Bonded & Fully Insured",
    "EPA Certified & Environmentally Responsible", 
    "Better Business Bureau A+ Rating",
    "PWNA Certified Professional",
    "Commercial & Residential Specialist",
    "Emergency Response Available 24/7"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="fade-in-left">
            <div className="inline-flex items-center space-x-2 gradient-primary text-white rounded-full px-6 py-3 mb-8 font-semibold text-sm">
              <Shield size={16} />
              <span>TRUSTED PROFESSIONALS</span>
            </div>
            
            <h2 className="text-responsive-2xl font-bold text-gray-900 mb-8 leading-tight text-balance">
              Houston's Most
              <span className="gradient-text block">Trusted</span>
              Service Company
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                For over <span className="font-bold gradient-text">3 years</span>, Rancher Services has been the premier choice for homeowners and businesses throughout the Greater Houston area. We've built our reputation on delivering <span className="font-semibold text-gray-800">exceptional results</span>, outstanding customer service, and unmatched reliability.
              </p>
              
              <p>
                Our team of <span className="font-semibold text-gray-800">certified professionals</span> uses state-of-the-art equipment and eco-friendly cleaning solutions to safely and effectively clean your property. We're fully licensed, bonded, and insured, giving you complete peace of mind with every service.
              </p>
              
              <p>
                From small residential projects to large commercial contracts, we approach every job with the same level of <span className="font-semibold gradient-text">dedication and attention to detail</span>. Your satisfaction is our top priority, and we stand behind our work with a <span className="font-bold text-green-600">100% satisfaction guarantee</span>.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 card rounded-lg hover-lift">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 fade-in-right">
            <div className="float">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-large relative">
                <img
                  src="https://images.pexels.com/photos/5691656/pexels-photo-5691656.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional pressure washing team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-dark text-white p-6 rounded-xl">
                    <div className="text-xl font-bold mb-2">Professional Excellence</div>
                    <div className="text-white/80">Certified team with premium equipment</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-6 card rounded-xl card-hover fade-in-up stagger-3" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 hover-scale">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-gray-800 font-bold text-lg mb-1">{stat.label}</div>
                    <div className="text-gray-500 text-sm font-medium">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="fade-in-up stagger-4">
          <div className="card rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our 100% Satisfaction Guarantee
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              We stand behind every job with our <span className="font-bold gradient-text">100% satisfaction guarantee</span>. 
              If you're not completely satisfied with our work, we\'ll return to make it right at no additional cost. 
              That's our commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg"
              >
                Experience the Difference
              </button>
              <a 
                href="tel:+1-346-401-0323"
                className="btn-secondary text-lg"
              >
                Call for Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;