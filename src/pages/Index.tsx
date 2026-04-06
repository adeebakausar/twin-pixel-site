import { Shield, Clock, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ReviewsSection from "@/components/ReviewsSection";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-image.jpg";
import serviceChw from "@/assets/service-chw-piping.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import serviceValve from "@/assets/service-valve.jpg";
import serviceHeatExchanger from "@/assets/service-heat-exchanger.jpg";
import serviceDuctwork from "@/assets/service-ductwork.jpg";
import serviceMep from "@/assets/service-mep.jpg";
import QuoteForm from "@/components/QuoteForm";

const stats = [
  { icon: <Clock className="w-6 h-6" />, label: "15+ Years Experience" },
  { icon: <Users className="w-6 h-6" />, label: "500+ Projects Completed" },
  { icon: <Shield className="w-6 h-6" />, label: "Licensed & Certified" },
  { icon: <Award className="w-6 h-6" />, label: "24/7 Support Available" },
];

const homeServices = [
  { title: "CHW Piping Systems", image: serviceChw, link: "/services/chw-piping" },
  { title: "HVAC Installation", image: serviceHvac, link: "/services/hvac-installation" },
  { title: "Valve Packages", image: serviceValve, link: "/services/valve-packages" },
  { title: "Heat Exchangers", image: serviceHeatExchanger, link: "/services/heat-exchangers" },
  { title: "Ductwork Systems", image: serviceDuctwork, link: "/services/ductwork" },
  { title: "MEP Services", image: serviceMep, link: "/services/mep-services" },
];

const faqs = [
  { q: "What MEP services does SplendorUAE offer?", a: "We provide comprehensive MEP solutions including CHW piping fabrication & installation, HVAC system installation, valve package installation, heat exchanger setup, ductwork systems, and complete mechanical, electrical, and plumbing services." },
  { q: "How long has SplendorUAE been in the industry?", a: "With over 15 years of experience in the MEP and HVAC industry, we have completed 500+ successful projects across the UAE for commercial and residential clients." },
  { q: "Do you provide maintenance services?", a: "Yes, we offer comprehensive maintenance packages for all our installations including HVAC systems, CHW piping, valve packages, and heat exchangers to ensure optimal performance and longevity." },
  { q: "What areas in the UAE do you serve?", a: "We serve clients across all emirates including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain." },
  { q: "How can I get a free consultation?", a: "You can request a free consultation by filling out our contact form, calling us at +971 50 123 4567, or sending us a message on WhatsApp. Our expert team will assess your project requirements and provide a tailored solution." },
  { q: "Are your engineers licensed and certified?", a: "Yes, all our engineers are fully licensed and certified. We maintain ISO certification and comply with all UAE regulatory standards for MEP and HVAC installations." },
];

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="SplendorUAE MEP & HVAC" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 container-wide px-4 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12 w-full">
          <div className="flex-1">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-background leading-tight">
              Your Trusted MEP & HVAC Partner in the UAE
            </h1>
            <p className="font-body text-lg text-background/90 mt-6 max-w-xl">
              Professional HVAC solutions with 15+ years of experience and 500+ successful projects. From CHW piping to complete MEP installations.
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-6">
        <div className="container-wide px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 text-primary-foreground justify-center text-center sm:text-left">
              {stat.icon}
              <span className="font-heading text-sm font-semibold uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-wide flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="font-heading text-sm uppercase tracking-widest text-primary mb-2">About Us</p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Founded in 2009, SplendorUAE began as a small team of passionate engineers with a vision to revolutionize MEP and HVAC services in the UAE. Today, we stand as a leading service provider with over 500 successful projects, serving commercial and residential clients across all emirates.
            </p>
          </div>
          <div className="flex-1">
            <img src={aboutImg} alt="SplendorUAE Team" className="rounded-lg shadow-xl w-full" loading="lazy" width={1024} height={768} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="mb-8">
            <div className="inline-block bg-foreground text-background font-heading text-xs font-bold uppercase tracking-wider px-3 py-1.5 mb-2">
              Expert Solutions
            </div>
            <div className="flex items-center gap-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground">Our Services</h2>
              <div className="hidden md:block h-[3px] flex-1 bg-primary max-w-[200px]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {homeServices.slice(0, 3).map((s) => (
              <Link key={s.link} to={s.link} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img src={s.image} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-foreground text-background font-heading text-xs font-bold uppercase tracking-wider px-2.5 py-1">{s.title}</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-primary-foreground font-heading text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
                  View More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {homeServices.slice(3).map((s) => (
              <Link key={s.link} to={s.link} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img src={s.image} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-foreground text-background font-heading text-xs font-bold uppercase tracking-wider px-2.5 py-1">{s.title}</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-primary-foreground font-heading text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
                  View More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground mb-12">Why Choose SplendorUAE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "15+ Years Experience", desc: "Over a decade and half of expertise in MEP and HVAC solutions across the UAE market." },
              { title: "500+ Successful Projects", desc: "Proven track record with hundreds of completed projects for satisfied clients." },
              { title: "Expert Team", desc: "Certified engineers and skilled technicians committed to delivering quality work." },
              { title: "Timely Delivery", desc: "We understand project timelines and consistently deliver on schedule." },
              { title: "Quality Assurance", desc: "Rigorous quality control processes ensuring the highest standards of workmanship." },
              { title: "Comprehensive Service", desc: "From design to installation and maintenance — complete MEP solutions under one roof." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-center text-foreground mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-card border border-border rounded-lg group">
                <summary className="font-heading font-bold text-card-foreground px-6 py-4 cursor-pointer hover:text-primary transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-muted-foreground px-6 pb-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
