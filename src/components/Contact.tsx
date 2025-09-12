import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Star, Shield, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    propertySize: '',
    message: ''
  });

  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>(
    { type: null, message: '' }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus({ type: "success", message: "Your request was sent successfully! We’ll contact you soon." });
        setFormData({ name: "", email: "", phone: "", service: "", propertySize: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({ type: "error", message: data.error || "Something went wrong. Please try again later." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call or Text",
      subtitle: "Available 24/7 for emergencies",
      content: "(346) 401-0323",
      link: "tel:+1-346-401-0323"
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Get a detailed quote",
      content: "peterbusiness55@gmail.com",
      link: "mailto:peterbusiness55@gmail.com"
    },
    {
      icon: MapPin,
      title: "Service Area",
      subtitle: "Greater Houston Metropolitan",
      content: "Houston, TX & Surrounding Areas",
      link: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      subtitle: "Flexible scheduling available",
      content: "Mon-Fri: 12PM-8PM, Sat-Sun: 8AM-7PM",
      link: null
    }
  ];

  const trustIndicators = [
    { icon: Shield, title: "Licensed & Insured" },
    { icon: Star, title: "5/5 Rating" },
    { icon: Award, title: "3+ Years Experience" }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center space-x-2 gradient-primary text-white rounded-full px-6 py-3 mb-8 font-semibold text-sm">
            <Send size={16} />
            <span>GET YOUR QUOTE</span>
          </div>
          
          <h2 className="text-responsive-2xl font-bold text-gray-900 mb-8 leading-tight text-balance">
            Get Your Free
            <span className="gradient-text block">Professional Quote</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
            Ready to transform your property? Contact us for a free, no-obligation estimate. We respond to all inquiries within 
            <span className="font-bold gradient-text"> 2 hours</span> during business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-left">
            <div className="card rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group hover-lift">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 hover-scale">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{info.title}</h4>
                        <p className="text-gray-600 mb-2 text-sm">{info.subtitle}</p>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-800 font-semibold">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustIndicators.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="card rounded-xl p-6 text-center card-hover">
                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                  </div>
                );
              })}
            </div>

            {/* Emergency Service */}
            <div className="gradient-primary text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Emergency Service Available</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Need immediate pressure washing service? We offer 24/7 emergency response for urgent commercial and residential cleaning needs throughout Houston.
              </p>
              <a 
                href="tel:+1-346-401-0323" 
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} />
                <span>Call Emergency Line</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card rounded-2xl p-10 fade-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Request Free Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(346) 401-0323"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                    SERVICE NEEDED *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a service</option>
                    <option value="house-washing">Residential House Washing</option>
                    <option value="commercial-cleaning">Commercial Property Cleaning</option>
                    <option value="driveway-walkways">Driveway & Walkway Cleaning</option>
                    <option value="deck-patio">Deck & Patio Cleaning</option>
                    <option value="fence-cleaning">Fence Cleaning & Restoration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="propertySize" className="block text-sm font-bold text-gray-700 mb-2">
                    PROPERTY SIZE
                  </label>
                  <select
                    id="propertySize"
                    name="propertySize"
                    value={formData.propertySize}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (Under 1,500 sq ft)</option>
                    <option value="medium">Medium (1,500-3,000 sq ft)</option>
                    <option value="large">Large (3,000-5,000 sq ft)</option>
                    <option value="xl">Extra Large (Over 5,000 sq ft)</option>
                    <option value="commercial">Commercial Property</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  PROJECT DETAILS
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us about your project, specific needs, timeline, or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold shadow-md transition-transform transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Send size={20} className="group-hover:animate-pulse" />
                  <span>Send Free Quote Request</span>
                </span>
              </button>

              <p className="text-sm text-gray-500 text-center leading-relaxed">
                * Required fields. We typically respond within <span className="font-bold text-blue-600">2 hours</span> during business hours with your detailed quote.
              </p>
            {status.type && (
          <div className={`mt-4 p-3 rounded-md text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-300' : 'bg-red-50 text-red-700 border border-red-300'}`}>
            {status.type === 'success' ? '✅ ' : '❌ '}{status.message}
          </div>
        )}
      </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;