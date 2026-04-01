import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const serviceAreas = [
  "Berks County", "Bucks County", "Carbon County", "Chester County",
  "Delaware County", "Lancaster County", "Lebanon County", "Lehigh County",
  "Monroe County", "Montgomery County", "Northampton County", "Schuylkill County",
];

const Footer = () => {
  return (
    <footer className="section-dark">
      {/* CTA Section */}
      <div className="section-padding text-center">
        <div className="container-wide">
          <p className="font-heading text-lg uppercase tracking-widest text-primary mb-2">Ready to take the next step?</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-section-dark-foreground mb-8">
            Get a Free Quote Today!
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground font-heading text-lg font-semibold px-10 py-4 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wide"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-background/10 px-4 py-12 md:px-8 lg:px-16">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="BH Tree Service" className="h-16 w-auto mb-4" />
            <p className="text-sm text-section-dark-foreground/70 mb-4">
              BH Tree Service LLC provides expert tree removal, pruning, stump grinding, and land clearing throughout Lancaster County, PA.
            </p>
            <div className="space-y-2 text-sm text-section-dark-foreground/70">
              <a href="tel:16103245372" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> (610) 324-5372
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Lancaster County, PA
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold uppercase text-section-dark-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-section-dark-foreground/70">
              <li><Link to="/tree-service" className="hover:text-primary transition-colors">Tree Service</Link></li>
              <li><Link to="/tree-service/tree-removal" className="hover:text-primary transition-colors">Tree Removal</Link></li>
              <li><Link to="/tree-service/tree-pruning" className="hover:text-primary transition-colors">Tree Pruning</Link></li>
              <li><Link to="/tree-service/stump-grinding" className="hover:text-primary transition-colors">Stump Grinding</Link></li>
              <li><Link to="/tree-service/emergency" className="hover:text-primary transition-colors">Emergency Services</Link></li>
              <li><Link to="/land-clearing" className="hover:text-primary transition-colors">Land Clearing</Link></li>
              <li><Link to="/drainage" className="hover:text-primary transition-colors">Drainage Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold uppercase text-section-dark-foreground mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-section-dark-foreground/70">
              {serviceAreas.slice(0, 8).map((area) => (
                <li key={area}>
                  <Link to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`} className="hover:text-primary transition-colors">
                    {area}, PA
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold uppercase text-section-dark-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-section-dark-foreground/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 px-4 py-6 text-center text-xs text-section-dark-foreground/50">
        © {new Date().getFullYear()} BH Tree Service LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
