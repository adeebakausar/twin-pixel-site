import { useParams } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import treeServiceHero from "@/assets/tree-service-hero.jpg";
import { Link } from "react-router-dom";

const serviceData: Record<string, { title: string; description: string }> = {
  "tree-removal": {
    title: "Tree Removal",
    description: "Dead, diseased, or hazardous trees pose real danger to your home and family. Our professional tree removal crew safely drops trees of any size, hauls debris, and leaves your property clean. We handle tight spaces, utility lines, and permits.",
  },
  "logging": {
    title: "Logging",
    description: "Land clearing and timber operations require skill, equipment, and planning. We handle large-scale logging projects, managing site access, equipment placement, and wood removal. From timber harvesting to site prep, we coordinate every detail.",
  },
  "tree-pruning": {
    title: "Tree Pruning",
    description: "Pruning keeps trees strong and prevents future problems. Overgrown branches near homes and power lines become liabilities. Regular trimming improves tree health, opens views, and protects your roof and siding. We prune for structure, health, and safety.",
  },
  "stump-grinding": {
    title: "Stump Grinding",
    description: "Stumps left behind after tree removal block your lawn and invite insects. Our stump grinding removes the root system completely so you reclaim your space. We grind below grade and clean up debris—your yard is ready to replant right after.",
  },
  "emergency": {
    title: "Emergency Tree Services",
    description: "Storms happen without notice. Fallen trees, hanging limbs, and split trunks create hazards that can't wait. We respond fast to emergency calls, clearing streets, restoring access, and preventing further damage. Contact us immediately if a tree threatens your property.",
  },
  "land-clearing": {
    title: "Land Clearing",
    description: "Complete lot clearing for construction, development, or property improvement. We remove trees, brush, and debris efficiently, leaving your site clean and ready for the next phase. Our heavy equipment handles projects of any scale.",
  },
  "grading": {
    title: "Grading",
    description: "Proper grading ensures good drainage and a stable foundation for construction. We reshape terrain to direct water flow, prevent erosion, and prepare sites for building. Professional grading for residential and commercial projects.",
  },
  "drainage": {
    title: "Drainage",
    description: "Complete drainage system design and installation to protect your property from water damage. French drains, channel drains, and comprehensive water management solutions tailored to your property's specific needs.",
  },
  "erosion-control": {
    title: "Erosion & Sediment Control",
    description: "E&S control installation to protect your property and meet regulatory requirements. We install silt fences, sediment basins, check dams, and other erosion control measures for construction sites and developed properties.",
  },
  "basin-remediation": {
    title: "Basin Remediation",
    description: "Stormwater basin repair and remediation services to restore proper function. We clean, reshape, and repair detention and retention basins to ensure they manage stormwater effectively and meet compliance standards.",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug || ""] || { title: "Service", description: "Professional service in Lancaster County, PA." };

  return (
    <div>
      <HeroSection
        title={`${service.title} in Lancaster County, PA`}
        subtitle={`Professional ${service.title.toLowerCase()} services for Lancaster County and surrounding areas.`}
        backgroundImage={treeServiceHero}
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">{service.title}</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.description}</p>

          <div className="bg-secondary rounded-lg p-8 mb-8">
            <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-4">Why Choose BH Tree Service?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> 30+ years of industry experience</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Fully insured and licensed</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Free estimates on all projects</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Fast, professional service</li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Complete site cleanup included</li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground font-heading text-lg font-semibold px-10 py-4 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wide">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
