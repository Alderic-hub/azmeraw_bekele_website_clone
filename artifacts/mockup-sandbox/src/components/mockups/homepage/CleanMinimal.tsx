import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Play, CheckCircle2, 
  Ship, Factory, Truck, Building2, Fuel, Leaf, 
  ArrowRight, Phone, Mail, MapPin, Globe, Facebook, Twitter, Linkedin
} from 'lucide-react';
import './_group.css';

export function CleanMinimal() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: <Ship className="w-8 h-8" />, title: "Import & Export", desc: "Global trade of premium coffee, seeds, and pulses with unmatched reliability." },
    { icon: <Factory className="w-8 h-8" />, title: "Manufacturing", desc: "High-grade steel bar production meeting international construction standards." },
    { icon: <Truck className="w-8 h-8" />, title: "Transportation", desc: "Comprehensive logistics and heavy freight transport across the horn of Africa." },
    { icon: <Building2 className="w-8 h-8" />, title: "Hotel & Hospitality", desc: "Luxury accommodations and world-class hospitality services." },
    { icon: <Fuel className="w-8 h-8" />, title: "Fuel Stations", desc: "Strategic network of fuel stations powering regional commerce and transit." },
    { icon: <Leaf className="w-8 h-8" />, title: "Agriculture", desc: "Sustainable farming and processing of Ethiopia's finest agricultural exports." }
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "5+", label: "Business Sectors" },
    { number: "14+", label: "Industry Awards" },
    { number: "100+", label: "Global Partners" }
  ];

  return (
    <div className="clean-minimal-container min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'clean-minimal-nav scrolled py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${isScrolled ? 'bg-[#8EC63F] text-white' : 'bg-white text-[#8EC63F]'}`}>
              AB
            </div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-[#0a1628]' : 'text-white'}`}>
              Azmeraw Bekele
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Products', 'About', 'News', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-[#8EC63F] transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                {item}
              </a>
            ))}
            <button className="bg-[#8EC63F] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#7abd35] transition-colors shadow-lg shadow-[#8EC63F]/20">
              Get a Quote
            </button>
          </div>

          <button className="md:hidden text-current" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className={isScrolled ? 'text-[#0a1628]' : 'text-white'} /> : <Menu className={isScrolled ? 'text-[#0a1628]' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-transparent z-10" />
          <img 
            src="/__mockup/images/hero-bg.png" 
            alt="Ethiopian Coffee Fields" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#8EC63F]/20 text-[#8EC63F] font-semibold text-sm mb-6 border border-[#8EC63F]/30 backdrop-blur-sm">
              Est. 2003 • Global Trade Leaders
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Experience <br/>
              <span className="text-[#8EC63F]">Ethiopian Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
              For over two decades, we have been bridging Ethiopia's finest resources with the global market. A trusted partner in agriculture, manufacturing, and logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#8EC63F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#7abd35] transition-all flex items-center justify-center gap-2 group text-lg">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-lg">
                <Play className="w-5 h-5 fill-current" />
                Corporate Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 border-b border-gray-100 relative z-30 -mt-10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {stats.map((stat, idx) => (
              <div key={idx} className={`text-center ${idx === 0 ? '' : 'pl-8'}`}>
                <div className="text-4xl font-bold text-[#0a1628] mb-2">{stat.number}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#f8f9fa] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#8EC63F]/20 to-transparent rounded-[2.5rem] transform -rotate-3 z-0" />
              <img 
                src="/__mockup/images/about-image.png" 
                alt="Global Trade" 
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#8EC63F]/10 rounded-full flex items-center justify-center text-[#8EC63F]">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Global Reach</div>
                    <div className="text-xl font-bold text-[#0a1628]">30+ Countries</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="text-[#8EC63F] font-semibold tracking-wider uppercase text-sm mb-3">About The Company</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6 leading-tight">
                Pioneering sustainable growth across East Africa
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Founded with a vision to showcase Ethiopia's potential to the world, Azmeraw Bekele Import & Export has evolved into a multi-sector conglomerate. We drive excellence through innovation, integrity, and a deep commitment to sustainable development.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Premium Coffee, Seeds & Pulses Export",
                  "High-capacity Steel Manufacturing",
                  "Extensive Logistics & Transport Network",
                  "Hospitality & Fuel Station Management"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#8EC63F] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
              
              <button className="text-[#0a1628] font-semibold border-b-2 border-[#8EC63F] pb-1 hover:text-[#8EC63F] transition-colors flex items-center gap-2">
                Read our full story <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[#8EC63F] font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</div>
            <h2 className="text-4xl font-bold text-[#0a1628] mb-6">Diversified Business Portfolio</h2>
            <p className="text-gray-600 text-lg">Delivering world-class solutions across six key sectors, driving economic growth and creating value for our stakeholders.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="service-card bg-[#f8f9fa] border border-gray-100 rounded-2xl p-8 hover:bg-white cursor-pointer group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#8EC63F] mb-6 group-hover:scale-110 group-hover:bg-[#8EC63F] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex items-center text-[#8EC63F] font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-16 bg-[#0a1628] border-y border-gray-800">
        <div className="container mx-auto px-6 lg:px-12 mb-8 text-center">
          <h4 className="text-gray-400 text-sm font-semibold tracking-widest uppercase">Trusted by Global Industry Leaders</h4>
        </div>
        <div className="marquee-container opacity-50 hover:opacity-100 transition-opacity duration-500">
          <div className="marquee-content flex gap-16 items-center px-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 text-white/50 text-xl font-bold font-serif italic">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#8EC63F]"></div>
                </div>
                Partner {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#8EC63F] to-[#6da528] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to do business with Ethiopia?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-light">
            Partner with a company that understands the local landscape and delivers to global standards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#0a1628] px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-xl shadow-black/10 text-lg">
              Request a Quote
            </button>
            <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] pt-20 pb-10 text-white/70">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-[#8EC63F] flex items-center justify-center font-bold text-white text-sm">
                  AB
                </div>
                <span className="font-bold text-lg text-white">Azmeraw Bekele</span>
              </div>
              <p className="mb-6 text-sm leading-relaxed">
                Leading Ethiopian import/export and multi-sector enterprise dedicated to delivering excellence across global markets.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8EC63F] hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8EC63F] hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8EC63F] hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#8EC63F] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#8EC63F] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#8EC63F] transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-[#8EC63F] transition-colors">Products Catalog</a></li>
                <li><a href="#" className="hover:text-[#8EC63F] transition-colors">Latest News</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#8EC63F] flex-shrink-0" />
                  <span>+251 11 123 4567<br/>+251 91 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#8EC63F] flex-shrink-0" />
                  <span>info@azmerawbekele.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Location</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8EC63F] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Bole Sub City, Woreda 03<br/>
                    Addis Ababa, Ethiopia<br/>
                    P.O. Box 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Azmeraw Bekele Import & Export. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
