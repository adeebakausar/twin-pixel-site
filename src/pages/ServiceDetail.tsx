import { useParams, Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import heroBg from "@/assets/hero-bg.jpg";

const serviceData: Record<string, { title: string; description: string; features: string[] }> = {
  "chw-piping": {
    title: "CHW Piping Fabrication & Installation",
    description: "Complete chilled water piping systems designed and installed to the highest industry standards. Our experienced team handles custom pipe fabrication, professional installation, testing & commissioning, insulation services, and system optimization for commercial buildings, residential complexes, and industrial facilities.",
    features: ["Custom pipe fabrication", "Professional installation", "Testing & commissioning", "Insulation services", "System optimization"],
  },
  "hvac-installation": {
    title: "HVAC Installation",
    description: "Professional HVAC system installation and maintenance for optimal climate control. We provide end-to-end solutions including system design, equipment selection, installation, and ongoing maintenance to ensure your building maintains perfect comfort year-round.",
    features: ["System design & engineering", "Equipment selection", "Professional installation", "Commissioning", "Preventive maintenance"],
  },
  "valve-packages": {
    title: "Valve Package Installation",
    description: "Comprehensive valve solutions including control systems and automation integration. Our team installs control valves, safety valve systems, and integrates automation for process control, safety systems, and flow regulation across all types of commercial and industrial facilities.",
    features: ["Control valve installation", "Safety valve systems", "Automation integration", "System calibration", "Regular maintenance"],
  },
  "heat-exchangers": {
    title: "CHW Pumps & Heat Exchanger Installation",
    description: "Expert installation and maintenance of heat transfer systems for optimal energy efficiency. We handle heat exchanger installation, pump selection & setup, performance optimization, energy efficiency analysis, and preventive maintenance for HVAC systems, process cooling, and district cooling applications.",
    features: ["Heat exchanger installation", "Pump selection & setup", "Performance optimization", "Energy efficiency analysis", "Preventive maintenance"],
  },
  "ductwork": {
    title: "Ductwork Systems",
    description: "Professional ductwork installation including kitchen extract and ventilation systems. We design and install complete duct systems for commercial and industrial buildings, ensuring proper air distribution, ventilation, and extraction for kitchens, laboratories, and general building HVAC.",
    features: ["Extract duct installation", "Kitchen ventilation systems", "General ventilation", "Duct fabrication", "System balancing"],
  },
  "mep-services": {
    title: "Complete MEP Services",
    description: "Complete mechanical, electrical, and plumbing services for commercial projects. From design-build to installation and maintenance, we provide comprehensive MEP solutions under one roof, managing every aspect of your building's mechanical infrastructure.",
    features: ["Design-build services", "Mechanical installation", "Electrical systems", "Plumbing solutions", "Ongoing maintenance"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug || ""] || { title: "Service", description: "Professional MEP & HVAC service.", features: [] };

  return (
    <div>
      <HeroSection
        title={service.title}
        subtitle={`Professional ${service.title.toLowerCase()} services across the UAE.`}
        backgroundImage={heroBg}
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">{service.title}</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.description}</p>

          <div className="bg-secondary rounded-lg p-8 mb-8">
            <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-4">Key Features</h3>
            <ul className="space-y-3 text-muted-foreground">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> {f}</li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary rounded-lg p-8 mb-8">
            <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-4">Why Choose SplendorUAE?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> 15+ years of industry experience</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Licensed and certified engineers</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> 500+ successful projects completed</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> ISO certified quality standards</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Comprehensive warranty and support</li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground font-heading text-lg font-semibold px-10 py-4 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wide">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
      <ReviewsSection />
    </div>
  );
};

export default ServiceDetail;
