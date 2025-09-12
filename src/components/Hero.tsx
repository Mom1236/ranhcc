import React from 'react';
import { Phone, CheckCircle, Star, Award, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const trustIndicators = [
    { icon: Shield, title: "Licensed", subtitle: "& Insured" },
    { icon: Award, title: "3+ Years", subtitle: "Experience" },
    { icon: CheckCircle, title: "Free", subtitle: "Estimates" },
    { icon: Star, title: "Same Day", subtitle: "Service" }
  ];

  return (
    <section id="home" className="relative text-white pt-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6190373/pexels-photo-6190373.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional pressure washing service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto container-padding section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="fade-in-up">
              <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-white">LICENSED & INSURED</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-sm font-semibold text-white">5/5 RATED</span>
                </div>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-responsive-3xl font-bold leading-tight tracking-tight mb-8 text-balance">
                Houston's Premier
                <span className="text-blue-400 block">Pressure Washing</span>
                <span className="text-white block">Experts</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-10 text-balance">
                Professional pressure washing services for residential and commercial properties. 
                <span className="text-blue-400 font-semibold"> Guaranteed results</span> with 3+ years of trusted experience.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-1">
              <button 
                onClick={scrollToContact}
                className="btn-primary text-lg"
              >
                Get Free Quote
              </button>
              <a 
                href="tel:+1-346-401-0323"
                className="flex items-center justify-center space-x-3 glass text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Phone size={20} />
                <span>(346) 401-0323</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 fade-in-up stagger-2">
              {trustIndicators.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="glass rounded-lg p-4 text-center border border-white/20 hover-lift">
                    <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-white/70 text-xs">{item.subtitle}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in-up stagger-3 lg:block hidden">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-large relative float">
              <img
                src="/src/components/willwashing.png"
                alt="Professional pressure washing team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 card p-6 text-gray-900 shadow-large">
              <div className="text-3xl font-bold gradient-text">3+</div>
              <div className="text-sm font-semibold text-gray-600">Years Experience</div>
            </div>
            
            <div className="absolute -top-6 -right-6 gradient-primary text-white p-6 rounded-xl shadow-large">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <div className="text-2xl font-bold">5/5</div>
              <div className="text-sm opacity-90">200+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;