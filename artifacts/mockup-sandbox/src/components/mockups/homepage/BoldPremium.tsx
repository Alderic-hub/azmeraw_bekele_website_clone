import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Globe, Factory, Truck, Building2, Fuel, Sprout, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import './_group.css';

export function BoldPremium() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '5+', label: 'Business Sectors' },
    { value: '14+', label: 'Industry Awards' },
    { value: '100+', label: 'Global Partners' },
  ];

  const services = [
    { icon: Globe, title: 'Import & Export', desc: 'Global trade of premium commodities' },
    { icon: Factory, title: 'Manufacturing', desc: 'High-grade steel and industrial goods' },
    { icon: Truck, title: 'Transport', desc: 'Reliable logistics and freight solutions' },
    { icon: Building2, title: 'Hotel & Hospitality', desc: 'Luxury stays and premium service' },
    { icon: Fuel, title: 'Fuel Stations', desc: 'Energy distribution across regions' },
    { icon: Sprout, title: 'Agriculture', desc: 'Premium seeds, pulses and coffee' },
  ];

  const products = [
    { name: 'Ethiopian Coffee', desc: 'Premium grade Arabica beans', img: '/__mockup/images/product-coffee.png' },
    { name: 'Seeds & Pulses', desc: 'High-yield agricultural products', img: '/__mockup/images/product-seeds.png' },
    { name: 'Steel Bars', desc: 'Industrial grade construction steel', img: '/__mockup/images/product-steel.png' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-dmsans selection:bg-[#8EC63F] selection:text-black relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-50 bg-grain mix-blend-overlay"></div>
      
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder */}
            <div className="w-12 h-12 bg-gradient-to-br from-[#8EC63F] to-[#44611b] rounded flex items-center justify-center font-montserrat font-bold text-xl shadow-[0_0_20px_rgba(142,198,63,0.3)]">
              AB
            </div>
            <div className="hidden sm:block">
              <h1 className="font-montserrat font-bold text-lg tracking-wider leading-none">AZMERAW BEKELE</h1>
              <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mt-1">Import & Export</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Products', 'Partners'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white hover:text-gradient-gold transition-all">
                {item}
              </a>
            ))}
            <Button className="bg-[#8EC63F] hover:bg-[#7ab033] text-[#0a0a0a] font-bold rounded-none px-6">
              Contact Us
            </Button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/__mockup/images/hero-ethiopia-coffee.png" alt="Ethiopian Landscape" className="w-full h-full object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4A843]/30 bg-[#D4A843]/10 text-[#D4A843] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4A843] animate-pulse"></span>
              Leading the Industry
            </div>
            
            <h1 className="font-montserrat text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 uppercase">
              Moving <span className="text-gradient-gold relative">Possibilities<span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4A843]"></span></span> <br />Across Borders
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed">
              For over two decades, Azmeraw Bekele Import & Export has been the cornerstone of global trade, bridging Ethiopia with the world through premium commodities and visionary logistics.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#8EC63F] hover:bg-[#7ab033] text-[#0a0a0a] font-bold rounded-none h-14 px-8 text-base group">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-none h-14 px-8 text-base transition-colors">
                Our Legacy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-20 px-6 container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card-premium p-8 text-center flex flex-col items-center justify-center">
              <span className="font-montserrat text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</span>
              <span className="text-[#8EC63F] text-xs md:text-sm font-bold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Split Section */}
      <section id="about" className="py-32 relative">
        <div className="glow-bg-premium top-1/2 left-0 -translate-y-1/2 -translate-x-1/2"></div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative z-10">
              <h2 className="font-montserrat text-4xl md:text-5xl font-bold uppercase">
                A Legacy of <br/><span className="text-gradient-gold">Excellence</span>
              </h2>
              <div className="w-20 h-1 bg-[#8EC63F]"></div>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Since our inception, Azmeraw Bekele Import & Export has set the gold standard in Ethiopian commerce. From sourcing the finest highland coffee to establishing robust manufacturing and transport networks, we operate at the intersection of quality and scale.
              </p>
              
              <div className="p-8 border-l-4 border-[#D4A843] bg-white/5 backdrop-blur-sm">
                <p className="text-xl italic font-montserrat text-white">
                  "Our commitment is not just to trade, but to elevate the standards of global commerce while honoring our Ethiopian roots."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 border border-[#8EC63F]/30 translate-x-4 translate-y-4"></div>
              <img src="/__mockup/images/about-legacy.png" alt="Corporate Legacy" className="relative z-10 w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-[#0a0a0a] relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold uppercase mb-6">Our Diverse <span className="text-gradient-gold">Portfolio</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Integrated solutions across six major sectors, driving growth and sustainability.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="glass-card-premium p-8 hover-glow-premium group cursor-pointer">
                <div className="w-14 h-14 bg-[#111827] border border-[#8EC63F]/30 flex items-center justify-center mb-6 group-hover:bg-[#8EC63F]/10 transition-colors">
                  <service.icon className="w-6 h-6 text-[#D4A843] group-hover:text-[#8EC63F] transition-colors" />
                </div>
                <h3 className="font-montserrat text-xl font-bold mb-3 uppercase tracking-wide">{service.title}</h3>
                <p className="text-gray-400 font-light mb-6">{service.desc}</p>
                <div className="flex items-center text-[#8EC63F] text-sm font-bold uppercase tracking-wider group-hover:text-[#D4A843] transition-colors">
                  Discover More <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-32 relative">
        <div className="glow-bg-premium bottom-0 right-0 translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-montserrat text-4xl md:text-5xl font-bold uppercase mb-4">Premium <span className="text-gradient-gold">Commodities</span></h2>
              <p className="text-gray-400 text-lg">Sourced with care, processed with precision.</p>
            </div>
            <Button variant="outline" className="border-[#8EC63F] text-[#8EC63F] hover:bg-[#8EC63F] hover:text-black rounded-none">
              View All Products
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="group relative h-[450px] overflow-hidden">
                <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-montserrat text-2xl font-bold mb-2 uppercase text-white">{product.name}</h3>
                  <p className="text-[#D4A843] font-medium mb-4">{product.desc}</p>
                  <Button className="w-full bg-transparent border border-white/30 hover:border-[#8EC63F] hover:bg-[#8EC63F]/10 rounded-none opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8EC63F] mb-12">Trusted by Industry Leaders Worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 flex items-center justify-center">
                <div className="text-xl font-montserrat font-black text-white/40">PARTNER {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#050505] to-[#111827]">
        <div className="absolute inset-0 bg-[#8EC63F]/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center glass-card-premium p-12 md:p-16 border-t-4 border-t-[#8EC63F]">
            <h2 className="font-montserrat text-3xl md:text-5xl font-bold uppercase mb-6">Ready to expand your <br/><span className="text-gradient-gold">horizons?</span></h2>
            <p className="text-gray-300 mb-10 text-lg font-light">Partner with Ethiopia's premier import and export conglomerate. Leave your email and our executive team will reach out.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input type="email" placeholder="Your corporate email address" className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 h-14 rounded-none focus-visible:ring-[#8EC63F] sm:w-[400px]" />
              <Button size="lg" className="bg-[#8EC63F] hover:bg-[#7ab033] text-[#0a0a0a] font-bold rounded-none h-14 px-8">
                Request Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8EC63F] to-[#44611b] rounded flex items-center justify-center font-montserrat font-bold text-lg">
                  AB
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-base tracking-wider leading-none">AZMERAW BEKELE</h3>
                </div>
              </div>
              <p className="text-gray-400 font-light text-sm">
                Moving possibilities across borders since 2004. The premier choice for global trade in Ethiopia.
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-white uppercase tracking-wider mb-6">Sectors</h4>
              <ul className="space-y-3">
                {['Import & Export', 'Manufacturing', 'Transport Logistics', 'Hotel & Hospitality', 'Fuel Distribution'].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-[#8EC63F] text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-white uppercase tracking-wider mb-6">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Leadership', 'Sustainability', 'News & Media', 'Careers'].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-[#8EC63F] text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-white uppercase tracking-wider mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Addis Ababa, Ethiopia</li>
                <li>Bole Road, AB Tower, 4th Floor</li>
                <li className="text-[#D4A843] pt-4">info@azmerawbekele.com</li>
                <li>+251 11 123 4567</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs uppercase tracking-wider">© {new Date().getFullYear()} Azmeraw Bekele Import & Export. All rights reserved.</p>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                <a key={social} href="#" className="text-gray-500 hover:text-[#8EC63F] text-xs uppercase tracking-wider transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
