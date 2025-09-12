import React from 'react';
import { Home, Building2, Car, Fence, Droplets, Sparkles, Phone, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential House Washing",
      description: "Complete exterior house cleaning including siding, windows, and trim. Safe, effective cleaning that restores your home's curb appeal.",
      features: ["Soft wash technique", "Eco-friendly solutions", "Window cleaning included", "Gutter cleaning"],
      price: "Starting at $199",
      popular: false
    },
    {
      icon: Building2,
      title: "Commercial Property Cleaning",
      description: "Professional cleaning services for businesses, retail spaces, and commercial buildings. Maintain a professional appearance.",
      features: ["Flexible scheduling", "Fully insured", "Regular maintenance plans", "Emergency cleaning"],
      price: "Custom Pricing",
      popular: true
    },
    {
      icon: Droplets,
      title: "Driveway & Walkway Cleaning",
      description: "Remove oil stains, dirt, and grime from concrete surfaces. Restore the original appearance of your driveways and walkways.",
      features: ["Stain removal", "Concrete sealing", "Pressure washing", "Surface restoration"],
      price: "Starting at $149",
      popular: false
    },
    {
      icon: Sparkles,
      title: "Deck & Patio Cleaning",
      description: "Specialized cleaning for wooden decks, patios, and outdoor living spaces. Prepare surfaces for staining or sealing.",
      features: ["Wood restoration", "Stain preparation", "Mold removal", "Surface protection"],
      price: "Starting at $179",
      popular: false
    },
    {
      icon: Fence,
      title: "Fence Cleaning & Restoration",
      description: "Clean and restore wooden, vinyl, and metal fences. Remove dirt, mildew, and weathering for a fresh appearance.",
      features: ["All fence types", "Mildew removal", "Stain preparation", "Protective treatments"],
      price: "Starting at $129",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 gradient-primary text-white rounded-full px-6 py-3 mb-8 font-semibold text-sm">
            <Sparkles size={16} />
            <span>OUR SERVICES</span>
          </div>
          
          <h2 className="text-responsive-2xl font-bold text-gray-900 mb-8 leading-tight text-balance">
            Professional Pressure Washing
            <span className="gradient-text block">Services in Houston</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
            From residential homes to commercial properties, we provide comprehensive pressure washing solutions 
            tailored to your specific needs with guaranteed satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`card p-8 relative overflow-hidden card-hover fade-in-up stagger-${(index % 6) + 1} ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 gradient-accent text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6 hover-scale">
                  <IconComponent className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="text-2xl font-bold gradient-text">{service.price}</div>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary text-sm"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="card p-12 text-center fade-in-up stagger-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every property is unique. Contact us for a personalized quote and service plan 
            tailored to your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg"
            >
              Get Free Estimate
            </button>
            <a 
              href="tel:+1-346-401-0323"
              className="flex items-center justify-center space-x-2 btn-secondary text-lg"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;