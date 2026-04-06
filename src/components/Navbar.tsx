import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  {
    label: "CHW Piping Systems",
    path: "/services/chw-piping",
  },
  {
    label: "HVAC Installation",
    path: "/services/hvac-installation",
  },
  {
    label: "Valve Packages",
    path: "/services/valve-packages",
  },
  {
    label: "Heat Exchangers",
    path: "/services/heat-exchangers",
  },
  {
    label: "Ductwork Systems",
    path: "/services/ductwork",
  },
  {
    label: "MEP Services",
    path: "/services/mep-services",
  },
];

const serviceAreas = [
  "Dubai", "Abu Dhabi", "Sharjah", "Ajman",
  "Ras Al Khaimah", "Fujairah", "Umm Al Quwain",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm">
      <div className="container-wide flex items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="SplendorUAE" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="font-body text-sm font-semibold text-background hover:text-primary transition-colors">
            Home
          </Link>

          <Link to="/about" className="font-body text-sm font-semibold text-background hover:text-primary transition-colors">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative group"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="font-body text-sm font-semibold text-background hover:text-primary transition-colors flex items-center gap-1">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "services" && (
              <div className="absolute top-full left-0 bg-background rounded-md shadow-xl py-2 min-w-[220px]">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block px-4 py-2 text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/gallery" className="font-body text-sm font-semibold text-background hover:text-primary transition-colors">
            Projects
          </Link>

          {/* Service Areas Dropdown */}
          <div className="relative group"
            onMouseEnter={() => setOpenDropdown("areas")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="font-body text-sm font-semibold text-background hover:text-primary transition-colors flex items-center gap-1">
              Service Areas <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "areas" && (
              <div className="absolute top-full left-0 bg-background rounded-md shadow-xl py-2 min-w-[220px]">
                {serviceAreas.map((area) => (
                  <Link
                    key={area}
                    to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-1.5 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="font-body text-sm font-semibold text-background hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="bg-primary text-primary-foreground font-heading text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wide">
            Get Free Consultation
          </Link>
          <a href="tel:+971501234567" className="flex items-center gap-2 border border-background/30 text-background font-body text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-background/10 transition-colors">
            <Phone className="w-4 h-4" /> +971 50 123 4567
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-background" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-foreground border-t border-background/10 px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-background font-semibold py-2">Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-background font-semibold py-2">About Us</Link>
          {services.map((s) => (
            <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} className="block text-background/70 text-sm pl-4 py-1">{s.label}</Link>
          ))}
          <Link to="/gallery" onClick={() => setMobileOpen(false)} className="block text-background font-semibold py-2">Projects</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-background font-semibold py-2">Contact</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block bg-primary text-primary-foreground text-center font-heading font-semibold px-5 py-3 rounded-md uppercase tracking-wide">
            Get Free Consultation
          </Link>
          <a href="tel:+971501234567" className="flex items-center justify-center gap-2 text-background font-semibold py-2">
            <Phone className="w-4 h-4" /> +971 50 123 4567
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
