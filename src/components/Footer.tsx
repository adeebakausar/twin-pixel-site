import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useEffect } from "react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const serviceAreas = [
  "Dubai", "Abu Dhabi", "Sharjah", "Ajman",
  "Ras Al Khaimah", "Fujairah", "Umm Al Quwain",
];

const services = [
  { label: "CHW Piping Systems", path: "/services/chw-piping" },
  { label: "HVAC Installation", path: "/services/hvac-installation" },
  { label: "Valve Packages", path: "/services/valve-packages" },
  { label: "Heat Exchangers", path: "/services/heat-exchangers" },
  { label: "Ductwork Systems", path: "/services/ductwork" },
  { label: "MEP Services", path: "/services/mep-services" },
];

const WaveDividerTop = () => (
  <div className="w-full leading-[0] overflow-hidden">
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px] block">
      <path d="M0,0 L0,40 Q360,100 720,40 Q1080,-20 1440,40 L1440,0 Z" fill="white" />
    </svg>
  </div>
);

const WaveDividerBottom = () => (
  <div className="w-full leading-[0] overflow-hidden">
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px] block">
      <path d="M0,60 Q360,0 720,60 Q1080,120 1440,60 L1440,100 L0,100 Z" fill="white" />
    </svg>
  </div>
);

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <footer>
      {/* ===== PROUDLY SERVING THESE AREAS ===== */}
      <section className="bg-background py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-[420px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              title="SplendorUAE Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground leading-tight mb-8">
              Proudly Serving<br />The UAE
            </h2>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm md:text-base text-foreground font-medium mb-8">
              {serviceAreas.map((area) => (
                <Link
                  key={area}
                  to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-primary transition-colors"
                >
                  {area}
                </Link>
              ))}
            </div>
            <Link
              to="/service-areas"
              className="inline-block bg-primary text-primary-foreground font-heading text-sm font-bold px-8 py-3 rounded hover:opacity-90 transition-opacity uppercase tracking-wide"
            >
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <div className="relative">
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/50" />
          <WaveDividerTop />
          <div className="relative z-10 text-center px-4 py-12 md:py-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black uppercase text-primary-foreground italic mb-2">
              Ready to Start Your Project?
            </h2>
            <h2 className="font-heading text-3xl md:text-4xl font-black uppercase text-primary-foreground italic mb-8">
              Get a Free Consultation Today!
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground font-heading text-sm font-bold px-10 py-3.5 rounded hover:opacity-90 transition-opacity uppercase tracking-wide"
            >
              Get Free Consultation
            </Link>
          </div>
          <WaveDividerBottom />
        </div>
      </div>

      {/* ===== BOTTOM FOOTER ===== */}
      <div className="bg-background px-4 py-14 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Company */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-4 tracking-wider">Company</h4>
            <img src={logo} alt="SplendorUAE" className="h-20 w-auto mb-3" />
            <a href="tel:+971501234567" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-1">
              <Phone className="w-3.5 h-3.5" /> +971 50 123 4567
            </a>
            <a href="mailto:info@splendoruae.com" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 block">
              info@splendoruae.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-4 tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.path}><Link to={s.path} className="hover:text-primary transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-4 tracking-wider">Service Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`} className="hover:text-primary transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-4 tracking-wider">Operating Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Sat: 8:00 AM - 2:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
            <div className="mt-4">
              <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-2 tracking-wider">Location</h4>
              <p className="text-sm text-muted-foreground">Business Bay, Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT BAR ===== */}
      <div className="border-t-2 border-primary mx-4 md:mx-16" />
      <div className="px-4 md:px-16 py-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="flex gap-8 text-sm font-medium text-foreground">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
        <Link
          to="/contact"
          className="mt-3 md:mt-0 inline-block bg-primary text-primary-foreground font-heading text-xs font-bold px-6 py-2.5 rounded hover:opacity-90 transition-opacity uppercase tracking-wider"
        >
          Get Free Consultation
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
