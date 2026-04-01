import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const serviceAreas = [
  "Berks County", "Bucks County", "Carbon County", "Chester County",
  "Delaware County", "Lancaster County", "Lebanon County", "Lehigh County",
  "Monroe County", "Montgomery County", "Northampton County", "Schuylkill County",
];

const WaveDivider = ({ fill = "white", flip = false }: { fill?: string; flip?: boolean }) => (
  <div className={`w-full leading-[0] ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
      <path
        d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  </div>
);

const Footer = () => {
  return (
    <footer>
      {/* Service Areas Section */}
      <section className="bg-background py-16">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Map Embed */}
          <div className="w-full md:w-[340px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              title="BH Tree Service Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389590.5!2d-76.5!3d40.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6247d5e3b3c3b%3A0x2b0e1c4b9b3b3b3b!2sLancaster%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Areas List */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground mb-1">
              Proudly Serving
            </h2>
            <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-foreground mb-6">
              These Areas
            </h2>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-muted-foreground mb-6">
              {serviceAreas.slice(0, 8).map((area) => (
                <Link
                  key={area}
                  to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-primary transition-colors"
                >
                  {area}, PA
                </Link>
              ))}
            </div>
            <Link
              to="/service-areas"
              className="inline-block bg-primary text-primary-foreground font-heading text-sm font-semibold px-6 py-2.5 rounded hover:opacity-90 transition-opacity uppercase tracking-wide"
            >
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Wave top - white to image */}
      <div className="relative">
        <WaveDivider fill="hsl(0, 0%, 100%)" flip />
        {/* CTA Section with background image */}
        <div
          className="relative bg-cover bg-center py-24 md:py-32"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50" />
          <div className="relative z-10 text-center px-4">
            <p className="font-heading text-lg uppercase tracking-widest text-primary-foreground mb-1">
              Ready to take the next step?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-primary-foreground mb-8">
              Get a Free Quote Today!
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground font-heading text-base font-semibold px-10 py-3.5 rounded hover:opacity-90 transition-opacity uppercase tracking-wide"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
        {/* Wave bottom - image to dark footer */}
        <WaveDivider fill="hsl(0, 0%, 100%)" />
      </div>

      {/* Bottom Footer */}
      <div className="bg-background px-4 py-12 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          {/* Company */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading text-xs font-bold uppercase text-muted-foreground mb-3 tracking-wider">Company</h4>
            <img src={logo} alt="BH Tree Service" className="h-14 w-auto mb-3" />
            <div className="text-xs text-muted-foreground space-y-1 mb-3">
              <a href="tel:16103245372" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Phone className="w-3 h-3" /> (610) 324-5372
              </a>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" /> Lancaster County, PA
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaFacebook className="w-4 h-4" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaInstagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase text-muted-foreground mb-3 tracking-wider">Quick Links</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li><Link to="/tree-service" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase text-muted-foreground mb-3 tracking-wider">Our Services</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li><Link to="/land-clearing" className="hover:text-primary transition-colors">Land Clearing Services</Link></li>
              <li><Link to="/drainage" className="hover:text-primary transition-colors">Drainage Services</Link></li>
              <li><Link to="/tree-service" className="hover:text-primary transition-colors">Tree Removal</Link></li>
              <li><Link to="/tree-service/stump-grinding" className="hover:text-primary transition-colors">Stump Grinding</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase text-muted-foreground mb-3 tracking-wider">Service Areas</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {serviceAreas.slice(0, 8).map((area) => (
                <li key={area}>
                  <Link to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`} className="hover:text-primary transition-colors">
                    {area}, PA
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase text-muted-foreground mb-3 tracking-wider">Operating Hours</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>Mon-Fri: 7AM - 5PM</li>
              <li>Sat: 8AM - 3PM</li>
              <li>Sun: Closed</li>
              <li className="pt-1 text-primary font-semibold">24/7 Emergency</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-border px-4 py-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} BH Tree Service LLC. All rights reserved.</span>
        <div className="flex gap-6 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
