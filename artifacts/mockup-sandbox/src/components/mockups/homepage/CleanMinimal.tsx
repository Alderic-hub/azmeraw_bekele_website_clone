import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ArrowRight, CheckCircle2,
  Phone, Mail, MapPin, Facebook, Linkedin, Send, Star, ChevronLeft, ChevronRight
} from 'lucide-react';
import './_group.css';

const BASE = 'https://c4e28442-f97d-49e9-b609-63529d0fb158-00-2nbppghbuheq9.picard.replit.dev';

const slides = [
  {
    bg: `${BASE}/assets/images/banner/9345ePE6sXy0tj.jpg`,
    title: 'Experience Ethiopian Agriculture Taste',
    body: 'Experience the unique flavors and qualities of Ethiopian coffee, oilseeds, and pulses. Our products are grown in the rich soil of the Ethiopian highlands, and nurtured by generations of farming expertise. We bring you the taste of tradition, delivered with modern efficiency.',
    cta: 'Read More',
    href: 'about/index.html',
  },
  {
    bg: `${BASE}/assets/images/banner/461517qtQFJpKb8h.jpg`,
    title: 'Your Import Experts for Materials',
    body: 'From the ground up, we empower your projects with seamless imports of essential Tyres, Steel, Trucks, and Construction Machinery.',
    cta: 'Read More',
    href: 'about/index.html',
  },
  {
    bg: `${BASE}/assets/images/banner/93589l1tuChLW.jpg`,
    title: 'Taste the Tradition',
    body: 'We bring you the finest Ethiopian coffee, crafted with generations of expertise and a love for the land from the sun-kissed highlands.',
    cta: 'Read More',
    href: 'about/index.html',
  },
];

const stats = [
  { number: '14+', label: 'Years Experience' },
  { number: '6+', label: 'Services' },
  { number: '11+', label: 'Products' },
  { number: '500+', label: 'Satisfied Customers' },
];

const services = [
  { title: 'Import & Export', img: `${BASE}/assets/images/services/53253tPYh.jpg`, href: 'services/import-and-export.html' },
  { title: 'Transportation', img: `${BASE}/assets/images/services/15496XqyQkOLmf.jpg`, href: 'services/transportation.html' },
  { title: 'Manufacturing', img: `${BASE}/assets/images/services/21396W4Z5asL0.jpg`, href: 'services/manufacturing.html' },
  { title: 'Steel Bars', img: `${BASE}/assets/images/services/45649LD7NI.jpg`, href: 'services/steel-bars.html' },
  { title: 'Fuel Stations', img: `${BASE}/assets/images/services/14776nfIwN32.jpg`, href: 'services/fuel-stations.html' },
];

const membershipLogos = [
  `${BASE}/assets/images/membership/14462vS3D.png`,
  `${BASE}/assets/images/membership/799064odbtX3IG6L.png`,
  `${BASE}/assets/images/membership/95453fw3RyWNiTFl.png`,
  `${BASE}/assets/images/membership/20718iImMovjsZ.png`,
  `${BASE}/assets/images/membership/5386msIKdt8E4V.png`,
  `${BASE}/assets/images/membership/82894UCrce02.png`,
];

const partnerLogos = [
  `${BASE}/assets/images/partners/519548Sq7k.png`,
  `${BASE}/assets/images/partners/17175m8CR5V.png`,
  `${BASE}/assets/images/partners/53135aw3fdGY.png`,
  `${BASE}/assets/images/partners/37450eOI5i0Kl6Z.png`,
  `${BASE}/assets/images/partners/5347KB3txlS9I.png`,
  `${BASE}/assets/images/partners/78613738QmrW.png`,
  `${BASE}/assets/images/partners/34449bto5H.png`,
  `${BASE}/assets/images/partners/96538mCSFr68.png`,
  `${BASE}/assets/images/partners/64333nAISdeLmjH.png`,
];

const testimonials = [
  {
    img: `${BASE}/assets/images/testimonials/97020ODT1xv5U.png`,
    name: 'Global Alliance Group',
    role: 'PR Manager',
    text: "We've consistently been impressed by Azmeraw Bekele Import & Export with professionalism, reliability, and competitive pricing. Their team is always responsive and goes the extra mile to ensure our needs are met.",
  },
  {
    img: `${BASE}/assets/images/testimonials/76146Iwa5SZqlL.png`,
    name: 'LohiaCorp',
    role: 'Operation Manager',
    text: "We at LohiaCorp have been partnering with Azmeraw Bekele Import & Export for several years now, and their dedication to quality and efficiency has consistently impressed us.",
  },
  {
    img: `${BASE}/assets/images/testimonials/72023umQy.png`,
    name: 'Delta Petroleum',
    role: 'Operation Manager',
    text: "For reliable fuel deliveries and top-notch service, Azmeraw Bekele Import & Export is the clear choice. Their efficient operations and dedication to customer satisfaction have kept our business running smoothly.",
  },
];

const values = [
  {
    icon: `${BASE}/assets/images/bio/53013u5QXw3HMa7s.svg`,
    title: 'Vision',
    text: "We envision becoming Ethiopia's leading oilseeds and cereals exporter by adhering to socially and environmentally responsible practices.",
  },
  {
    icon: `${BASE}/assets/images/bio/45266RiXaZcMr.svg`,
    title: 'Mission',
    text: 'To provide high-quality products and services at competitive prices through exceptional customer service and mutually beneficial partnerships.',
  },
  {
    icon: `${BASE}/assets/images/bio/422721nPMLslp9.svg`,
    title: 'Corporate Structure',
    text: 'We employ a well-structured organization that promotes accountability, efficiency, and the achievement of its vision and mission.',
  },
];

const ventures = [
  'Import business', 'Manufacturing of PP bags', 'Transport business', 'Hotel business', 'Fuel station businesses',
];

export function CleanMinimal() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => setSlide(s => (s + 1) % slides.length), 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prevSlide = () => { setSlide(s => (s - 1 + slides.length) % slides.length); };
  const nextSlide = () => { setSlide(s => (s + 1) % slides.length); };

  return (
    <div className="cm-root min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", color: '#1a1a2e' }}>
      <link rel="stylesheet" media="print" onLoad={(e: any) => { e.target.media = 'all'; }}
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" />

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all .3s',
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 1px 32px rgba(0,0,0,.08)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
      }}>
        {/* top bar */}
        {!scrolled && (
          <div style={{ background: 'rgba(0,0,0,0.35)', borderBottom: '1px solid rgba(255,255,255,.1)', padding: '6px 0', backdropFilter: 'blur(4px)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                <span style={{ color: 'rgba(255,255,255,.8)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <MapPin size={12} /> Churchill Avenue, Eshetu Mamo Building – F8 Office 801
                </span>
                <span style={{ color: 'rgba(255,255,255,.8)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Mail size={12} /> info@azmerawbekele.com
                </span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <a href="https://www.facebook.com/azmerawimpex" target="_blank" rel="noreferrer"
                  style={{ color: 'rgba(255,255,255,.7)', transition: 'color .2s' }}>
                  <Facebook size={14} />
                </a>
                <a href="https://www.linkedin.com/company/azmerawimpex/" target="_blank" rel="noreferrer"
                  style={{ color: 'rgba(255,255,255,.7)', transition: 'color .2s' }}>
                  <Linkedin size={14} />
                </a>
                <a href="https://t.me/azmerawimpex" target="_blank" rel="noreferrer"
                  style={{ color: 'rgba(255,255,255,.7)', transition: 'color .2s' }}>
                  <Send size={14} />
                </a>
                <a href="request/index.html" style={{
                  background: '#8EC63F', color: '#fff', fontSize: 12, fontWeight: 600,
                  padding: '4px 14px', borderRadius: 20, textDecoration: 'none', marginLeft: 8,
                }}>
                  Request a Quote →
                </a>
              </div>
            </div>
          </div>
        )}
        {/* main nav row */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="index.html" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src={`${BASE}/assets/images/logos/02_AzmerawBekele_Web.Logo_Inverse_V1.png`}
              alt="Azmeraw Bekele" style={{ height: 44, objectFit: 'contain', filter: scrolled ? 'none' : 'brightness(0) invert(1)' }} />
          </a>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {[['Home','index.html'],['Services','services/index.html'],['Products','products/index.html'],['About Us','about/index.html'],['News','news/index.html'],['Contact','contact-us/index.html']].map(([label, href]) => (
              <a key={label} href={href} style={{
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
                color: scrolled ? '#374151' : 'rgba(255,255,255,.9)',
                transition: 'color .2s',
              }}>{label}</a>
            ))}
            <a href="tel:+251111275398" style={{
              display: 'flex', alignItems: 'center', gap: 6,
              color: scrolled ? '#374151' : 'rgba(255,255,255,.85)',
              fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>
              <Phone size={14} /> +251 111 275 398
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: scrolled ? '#374151' : '#fff' }}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO SLIDER ── */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', minHeight: 600 }}>
        {slides.map((s, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0, transition: 'opacity .8s ease',
            opacity: i === slide ? 1 : 0, pointerEvents: i === slide ? 'auto' : 'none',
          }}>
            <img src={s.bg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(10,22,40,.88) 40%,rgba(10,22,40,.3))' }} />
          </div>
        ))}
        <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center', paddingTop: 80 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', width: '100%' }}>
            <span style={{
              display: 'inline-block', background: 'rgba(142,198,63,.18)', border: '1px solid rgba(142,198,63,.4)',
              color: '#8EC63F', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em',
              padding: '5px 14px', borderRadius: 20, marginBottom: 24, backdropFilter: 'blur(4px)',
            }}>Est. 2003 · Global Trade Leaders</span>
            {slides.map((s, i) => (
              <div key={i} style={{
                transition: 'opacity .6s, transform .6s',
                opacity: i === slide ? 1 : 0,
                transform: i === slide ? 'translateY(0)' : 'translateY(20px)',
                position: i === slide ? 'relative' : 'absolute',
              }}>
                <h1 style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 20, maxWidth: 750 }}>
                  {s.title}
                </h1>
                <p style={{ fontSize: 17, color: 'rgba(255,255,255,.8)', maxWidth: 580, lineHeight: 1.7, marginBottom: 36, fontWeight: 300 }}>
                  {s.body}
                </p>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <a href={s.href} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#8EC63F', color: '#fff', padding: '14px 28px',
                    borderRadius: 50, fontWeight: 600, textDecoration: 'none', fontSize: 15,
                    boxShadow: '0 8px 32px rgba(142,198,63,.35)', transition: 'background .2s',
                  }}>
                    {s.cta} <ArrowRight size={18} />
                  </a>
                  <a href="about/index.html" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(255,255,255,.12)', color: '#fff', padding: '14px 28px',
                    borderRadius: 50, fontWeight: 600, textDecoration: 'none', fontSize: 15,
                    backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.2)',
                  }}>
                    Explore Our World
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* slide controls */}
        <div style={{ position: 'absolute', bottom: 32, right: 40, zIndex: 20, display: 'flex', gap: 10, alignItems: 'center' }}>
          <button onClick={prevSlide} style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)', transition: 'background .2s' }}>
            <ChevronLeft size={20} />
          </button>
          <span style={{ color: 'rgba(255,255,255,.7)', fontSize: 13, fontWeight: 500 }}>{slide + 1} / {slides.length}</span>
          <button onClick={nextSlide} style={{ width: 44, height: 44, borderRadius: '50%', background: '#8EC63F', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background .2s' }}>
            <ChevronRight size={20} />
          </button>
        </div>
        {/* dots */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', gap: 8 }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} style={{
              width: i === slide ? 28 : 8, height: 8, borderRadius: 4,
              background: i === slide ? '#8EC63F' : 'rgba(255,255,255,.4)',
              border: 'none', cursor: 'pointer', transition: 'all .3s', padding: 0,
            }} />
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#fff', position: 'relative', zIndex: 20, marginTop: -40, borderRadius: '24px 24px 0 0', boxShadow: '0 -8px 48px rgba(0,0,0,.12)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px 16px', borderRight: i < 3 ? '1px solid #f0f0f0' : 'none' }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: '#0a1628', lineHeight: 1 }}>{s.number}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: '#f8f9fa', padding: '96px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap' }}>
          {/* images */}
          <div style={{ flex: '0 0 auto', width: 'min(480px, 100%)', position: 'relative' }}>
            <img src={`${BASE}/assets/images/bio/733240DIbgJ.jpg`} alt="About Azmeraw Bekele"
              style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 24, boxShadow: '0 20px 60px rgba(0,0,0,.14)' }} />
            <div style={{ position: 'absolute', bottom: -28, right: -24, width: 200, height: 180 }}>
              <img src={`${BASE}/assets/images/bio/69113AbjszMeyf.jpg`} alt="About Imports"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, boxShadow: '0 12px 40px rgba(0,0,0,.18)', border: '4px solid #fff' }} />
            </div>
            {/* badge */}
            <div style={{
              position: 'absolute', top: 24, left: -20, background: '#8EC63F',
              borderRadius: 16, padding: '14px 20px', boxShadow: '0 8px 24px rgba(142,198,63,.4)',
              color: '#fff', textAlign: 'center',
            }}>
              <div style={{ fontSize: 26, fontWeight: 800, lineHeight: 1 }}>14+</div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.05em' }}>Years Experience</div>
            </div>
          </div>
          {/* text */}
          <div style={{ flex: 1, minWidth: 300, paddingTop: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: '#8EC63F', textTransform: 'uppercase', marginBottom: 10 }}>
              WE ARE A THRIVING ETHIOPIAN ENTERPRISE
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 800, color: '#0a1628', marginBottom: 20, lineHeight: 1.2 }}>
              A 20-year legacy rooted in experience.
            </h2>
            <p style={{ color: '#4b5563', lineHeight: 1.75, marginBottom: 24, fontSize: 15 }}>
              Azmeraw Bekele Import &amp; Export has blossomed from humble beginnings to become a force in Ethiopia's business landscape. Guided by the vision of its founder, we've grown beyond imports, nurturing diverse ventures from bag manufacturing to coffee exports and beyond. Today, we stand as a testament to Ethiopian entrepreneurship, weaving threads of industry into a dynamic tapestry of success.
            </p>
            <p style={{ color: '#4b5563', fontSize: 14, marginBottom: 20 }}>Here are some of our diverse range of ventures:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px', marginBottom: 32 }}>
              {ventures.map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={16} style={{ color: '#8EC63F', flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
            <a href="about/index.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#8EC63F', color: '#fff', padding: '13px 26px',
              borderRadius: 50, fontWeight: 600, textDecoration: 'none', fontSize: 14,
              boxShadow: '0 6px 24px rgba(142,198,63,.35)',
            }}>
              Explore Our World <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{
        padding: '96px 0',
        backgroundImage: `url(${BASE}/assets/images/bg/work-process-v2-bg.jpg)`,
        backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,22,40,.82)' }} />
        <div style={{ position: 'relative', zIndex: 5, maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: '#8EC63F', textTransform: 'uppercase', marginBottom: 12 }}>Why Choose Us</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800, color: '#fff', marginBottom: 14 }}>Core Principles That Drive Us</h2>
            <p style={{ color: 'rgba(255,255,255,.6)', maxWidth: 580, margin: '0 auto', fontSize: 15, lineHeight: 1.6 }}>
              Here are some reasons why Azmeraw Bekele Import &amp; Export company is inspired by the foundations of the following core features:
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
            {values.map((v, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 20, padding: '36px 28px', textAlign: 'center',
                backdropFilter: 'blur(12px)', transition: 'background .3s',
              }}>
                <div style={{ width: 80, height: 80, margin: '0 auto 20px', background: 'rgba(142,198,63,.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={v.icon} alt={v.title} style={{ width: 48, height: 48, objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: 'rgba(255,255,255,.65)', fontSize: 14, lineHeight: 1.7 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '96px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: '#8EC63F', textTransform: 'uppercase', marginBottom: 10 }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800, color: '#0a1628', marginBottom: 10 }}>Diverse Services for a Comprehensive Approach</h2>
              <p style={{ color: '#6b7280', fontSize: 15, maxWidth: 500 }}>We offer a range of services beyond traditional import and export, meeting the diverse needs of our clients.</p>
            </div>
            <a href="services/index.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, border: '2px solid #8EC63F',
              color: '#8EC63F', padding: '11px 24px', borderRadius: 50,
              fontWeight: 600, textDecoration: 'none', fontSize: 14, whiteSpace: 'nowrap',
              transition: 'all .2s',
            }}>
              View All Services
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 24 }}>
            {services.map((s, i) => (
              <a key={i} href={s.href} style={{ textDecoration: 'none', display: 'block', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,.08)', transition: 'transform .25s, box-shadow .25s', position: 'relative' }}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(10,22,40,.9) 0%, transparent 100%)',
                  padding: '40px 20px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                }}>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{s.title}</span>
                  <span style={{
                    width: 32, height: 32, borderRadius: '50%', background: '#8EC63F',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <ArrowRight size={16} color="#fff" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIPS ── */}
      <section style={{ padding: '72px 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: '#8EC63F', textTransform: 'uppercase', marginBottom: 10 }}>Memberships &amp; Accreditations</div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0a1628', marginBottom: 8 }}>Explore our excellent network through trusted memberships</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
            {membershipLogos.map((src, i) => (
              <div key={i} style={{ padding: '12px 20px', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={src} alt="Membership" style={{ height: 52, objectFit: 'contain', maxWidth: 120, filter: 'grayscale(30%)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: '#8EC63F', textTransform: 'uppercase', marginBottom: 10 }}>Testimonials</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 800, color: '#0a1628', marginBottom: 8 }}>What Our Clients Say About Us</h2>
            <p style={{ color: '#6b7280', fontSize: 15 }}>Our clients love working with our team!</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: '#f8f9fa', border: '1px solid #f0f0f0', borderRadius: 20, padding: '28px 24px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 20, right: 24, color: '#8EC63F', fontSize: 36, lineHeight: 1, opacity: 0.25, fontFamily: 'Georgia, serif' }}>"</div>
                <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} style={{ color: '#f59e0b', fill: '#f59e0b' }} />)}
                </div>
                <p style={{ color: '#4b5563', fontSize: 14, lineHeight: 1.72, marginBottom: 20 }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src={t.img} alt={t.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e5e7eb' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#0a1628', fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: '#8EC63F', fontSize: 12, fontWeight: 500 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section style={{ padding: '72px 0', background: '#0a1628' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: '#8EC63F', textTransform: 'uppercase', marginBottom: 8 }}>Our Partners</div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: 6 }}>Recognized Expertise, Trusted Connections</h2>
          </div>
          <div className="cm-marquee-wrap" style={{ overflow: 'hidden' }}>
            <div className="cm-marquee" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              {[...partnerLogos, ...partnerLogos].map((src, i) => (
                <div key={i} style={{ flexShrink: 0, padding: '12px 20px', background: 'rgba(255,255,255,.06)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,.08)' }}>
                  <img src={src} alt="Partner" style={{ height: 48, objectFit: 'contain', maxWidth: 120, filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '96px 0', background: 'linear-gradient(135deg,#8EC63F 0%,#6da528 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, background: 'rgba(255,255,255,.08)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 260, height: 260, background: 'rgba(0,0,0,.08)', borderRadius: '50%' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 5, textAlign: 'center' }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Beyond borders, beyond expectations.</p>
          <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 800, color: '#fff', maxWidth: 720, margin: '0 auto 36px', lineHeight: 1.25 }}>
            Where quality meets innovation! We move more than goods, we move possibilities. Get a quote today.
          </h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="request/index.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#fff', color: '#0a1628', padding: '14px 32px',
              borderRadius: 50, fontWeight: 700, textDecoration: 'none', fontSize: 15,
              boxShadow: '0 8px 32px rgba(0,0,0,.15)',
            }}>
              Request a Quote <ArrowRight size={18} />
            </a>
            <a href="contact-us/index.html" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#fff', padding: '14px 32px',
              borderRadius: 50, fontWeight: 700, textDecoration: 'none', fontSize: 15,
              border: '2px solid rgba(255,255,255,.45)',
            }}>
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#060e1c', paddingTop: 72, paddingBottom: 32, color: 'rgba(255,255,255,.55)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 1.5fr', gap: 40, marginBottom: 56 }}>
            {/* about */}
            <div>
              <img src={`${BASE}/assets/images/logos/02_AzmerawBekele_Web.Logo_V2.png`} alt="Azmeraw Bekele"
                style={{ height: 48, objectFit: 'contain', marginBottom: 20 }} />
              <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 20, maxWidth: 260 }}>
                Leading Ethiopian import/export and multi-sector enterprise dedicated to delivering excellence across global markets.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {[
                  { href: 'https://www.facebook.com/azmerawimpex', icon: <Facebook size={14} /> },
                  { href: 'https://www.linkedin.com/company/azmerawimpex/', icon: <Linkedin size={14} /> },
                  { href: 'https://t.me/azmerawimpex', icon: <Send size={14} /> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                    width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.55)',
                    textDecoration: 'none', border: '1px solid rgba(255,255,255,.1)', transition: 'background .2s',
                  }}>{s.icon}</a>
                ))}
              </div>
            </div>
            {/* navigation */}
            <div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Navigation</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[['FAQs','faq/index.html'],['Contact','contact-us/index.html'],['Request a Quote','request/index.html']].map(([l,h]) => (
                  <li key={l}><a href={h} style={{ color: 'rgba(255,255,255,.55)', textDecoration: 'none', fontSize: 13, transition: 'color .2s' }}>{l}</a></li>
                ))}
              </ul>
            </div>
            {/* contact */}
            <div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Contact Us</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Phone size={14} style={{ color: '#8EC63F', marginTop: 2, flexShrink: 0 }} />
                  <div style={{ fontSize: 13 }}>
                    <a href="tel:+251111275398" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none', display: 'block' }}>+251 111 275 398</a>
                    <a href="tel:+251924896926" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none', display: 'block' }}>+251 924 896 926</a>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <Mail size={14} style={{ color: '#8EC63F', flexShrink: 0 }} />
                  <a href="mailto:info@azmerawbekele.com" style={{ color: 'rgba(255,255,255,.7)', textDecoration: 'none', fontSize: 13 }}>info@azmerawbekele.com</a>
                </li>
              </ul>
            </div>
            {/* visit */}
            <div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Visit Us</h4>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <MapPin size={14} style={{ color: '#8EC63F', marginTop: 2, flexShrink: 0 }} />
                <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0, color: 'rgba(255,255,255,.6)' }}>
                  Churchill Avenue,<br />Eshetu Mamo Building<br />F8 Office 801<br />Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 12 }}>
            <span>&copy; {new Date().getFullYear()} Azmeraw Bekele Import &amp; Export. All rights reserved.</span>
            <span>Developed by <span style={{ color: '#8EC63F', fontWeight: 600 }}>Gasha Digital Technology</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
