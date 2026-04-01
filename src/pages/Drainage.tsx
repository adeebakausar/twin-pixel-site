import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ReviewsSection from "@/components/ReviewsSection";
import treeServiceHero from "@/assets/tree-service-hero.jpg";

const Drainage = () => {
  return (
    <div>
      <HeroSection
        title="Drainage Service Lancaster County, PA"
        subtitle="Professional drainage solutions for water management and erosion control."
        backgroundImage={treeServiceHero}
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">Drainage Services in Lancaster County</h2>
          <p className="text-muted-foreground mb-6">
            Water management is critical for protecting your property from flooding, erosion, and structural damage. BH Tree Service provides comprehensive drainage solutions including French drains, basin remediation, and erosion and sediment control installation.
          </p>
          <p className="text-muted-foreground mb-6">
            Our team assesses your property's unique challenges and designs drainage systems that direct water away from structures and prevent soil erosion. We handle everything from residential yards to commercial development sites.
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold uppercase text-center text-foreground mb-12">Our Drainage Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ServiceCard title="Drainage" description="Complete drainage system installation for water management." link="/drainage/drainage" iconKey="drainage" />
            <ServiceCard title="Erosion & Sediment Control" description="E&S control installation to protect your property." link="/drainage/erosion-control" iconKey="grading" />
            <ServiceCard title="Basin Remediation" description="Stormwater basin repair and remediation services." link="/drainage/basin-remediation" iconKey="drainage" />
          </div>
        </div>
      </section>
      <ReviewsSection />
    </div>
  );
};

export default Drainage;
