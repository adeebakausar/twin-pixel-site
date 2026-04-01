import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  {
    label: "Tree Service",
    path: "/tree-service",
    children: [
      { label: "Tree Removal", path: "/tree-service/tree-removal" },
      { label: "Logging", path: "/tree-service/logging" },
      { label: "Tree Pruning", path: "/tree-service/tree-pruning" },
      { label: "Stump Grinding", path: "/tree-service/stump-grinding" },
      { label: "Emergency Tree Services", path: "/tree-service/emergency" },
    ],
  },
  {
    label: "Land Clearing Service",
    path: "/land-clearing",
    children: [
      { label: "Land Clearing", path: "/land-clearing/land-clearing" },
      { label: "Grading", path: "/land-clearing/grading" },
    ],
  },
  {
    label: "Drainage Service",
    path: "/drainage",
    children: [
      { label: "Drainage", path: "/drainage/drainage" },
      { label: "Erosion & Sediment Control", path: "/drainage/erosion-control" },
      { label: "Basin Remediation", path: "/drainage/basin-remediation" },
    ],
  },
];

const serviceAreas = [
  "Berks County", "Bucks County", "Carbon County", "Chester County",
  "Delaware County", "Lancaster County", "Lebanon County", "Lehigh County",
  "Monroe County", "Montgomery County", "Northampton County", "Schuylkill County",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm">
      <div className="container-wide flex items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="BH Tree Service" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="font-body text-sm font-semibold text-background hover:text-primary transition-colors">
            Home
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
                  <div key={s.path} className="group/sub relative">
                    <Link
                      to={s.path}
                      className="block px-4 py-2 text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {s.label}
                    </Link>
                    {s.children && (
                      <div className="pl-4">
                        {s.children.map((c) => (
                          <Link
                            key={c.path}
                            to={c.path}
                            className="block px-4 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/tree-service/tree-removal" className="font-body text-sm font-semibold text-background hover:text-primary transition-colors">
            Tree Removal
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
              <div className="absolute top-full left-0 bg-background rounded-md shadow-xl py-2 min-w-[220px] grid grid-cols-2 gap-x-2">
                {serviceAreas.map((area) => (
                  <Link
                    key={area}
                    to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-1.5 text-xs text-foreground hover:text-primary transition-colors"
                  >
                    {area}, PA
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About Us Dropdown */}
          <div className="relative group"
            onMouseEnter={() => setOpenDropdown("about")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="font-body text-sm font-semibold text-background hover:text-primary transition-colors flex items-center gap-1">
              About Us <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "about" && (
              <div className="absolute top-full right-0 bg-background rounded-md shadow-xl py-2 min-w-[180px]">
                <Link to="/about" className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">About</Link>
                <Link to="/gallery" className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Projects</Link>
                <Link to="/contact" className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">Contact Us</Link>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="bg-primary text-primary-foreground font-heading text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wide">
            Get Free Quote
          </Link>
          <a href="tel:16103245372" className="flex items-center gap-2 border border-background/30 text-background font-body text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-background/10 transition-colors">
            <Phone className="w-4 h-4" /> (610) 324-5372
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
          {services.map((s) => (
            <div key={s.path}>
              <Link to={s.path} onClick={() => setMobileOpen(false)} className="block text-background font-semibold py-2">{s.label}</Link>
              {s.children?.map((c) => (
                <Link key={c.path} to={c.path} onClick={() => setMobileOpen(false)} className="block text-background/70 text-sm pl-4 py-1">{c.label}</Link>
              ))}
            </div>
          ))}
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-background font-semibold py-2">About</Link>
          <Link to="/gallery" onClick={() => setMobileOpen(false)} className="block text-background font-semibold py-2">Projects</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-background font-semibold py-2">Contact Us</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block bg-primary text-primary-foreground text-center font-heading font-semibold px-5 py-3 rounded-md uppercase tracking-wide">
            Get Free Quote
          </Link>
          <a href="tel:16103245372" className="flex items-center justify-center gap-2 text-background font-semibold py-2">
            <Phone className="w-4 h-4" /> (610) 324-5372
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
