import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import treeServiceHero from "@/assets/tree-service-hero.jpg";

const LandClearing = () => {
  return (
    <div>
      <HeroSection
        title="Land Clearing Service Lancaster County, PA"
        subtitle="Professional land clearing and grading services for property development and construction."
        backgroundImage={treeServiceHero}
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">Land Clearing in Lancaster County</h2>
          <p className="text-muted-foreground mb-6">
            Whether you're preparing a site for new construction, clearing overgrown lots, or need brush removal, BH Tree Service has the heavy equipment and expertise to handle it. We manage everything from small residential lots to large commercial parcels.
          </p>
          <p className="text-muted-foreground mb-6">
            Our land clearing services include complete tree and brush removal, stump grinding, grading, and site preparation. We work efficiently to minimize disruption and leave your property ready for the next phase of development.
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold uppercase text-center text-foreground mb-12">Our Land Clearing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ServiceCard title="Land Clearing" description="Complete lot clearing for construction and development projects." link="/land-clearing/land-clearing" iconKey="land-clearing" />
            <ServiceCard title="Grading" description="Professional grading services for proper drainage and site preparation." link="/land-clearing/grading" iconKey="grading" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandClearing;
