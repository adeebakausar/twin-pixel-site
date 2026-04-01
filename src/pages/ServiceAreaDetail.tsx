import { useParams } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ReviewsSection from "@/components/ReviewsSection";
import heroBg from "@/assets/hero-bg.jpg";

const ServiceAreaDetail = () => {
  const { area } = useParams();
  const areaName = area
    ? area.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Lancaster County";

  return (
    <div>
      <HeroSection
        title={`Tree Service in ${areaName}, PA`}
        subtitle={`Professional tree removal, pruning, and stump grinding services in ${areaName}, PA.`}
        backgroundImage={heroBg}
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">Tree Service in {areaName}, PA</h2>
          <p className="text-muted-foreground mb-6">
            BH Tree Service provides comprehensive tree care throughout {areaName}, PA. From routine pruning and stump grinding to emergency storm damage response and complete land clearing, our experienced crew handles it all with professionalism and care.
          </p>
          <p className="text-muted-foreground mb-6">
            Our team knows the specific challenges that {areaName} properties face—from mature tree management to storm damage recovery. We bring the right equipment and expertise to every job, big or small.
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold uppercase text-center text-foreground mb-12">Services in {areaName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ServiceCard title="Tree Removal" description={`Safe tree removal in ${areaName}, PA.`} link="/tree-service/tree-removal" iconKey="tree-removal" />
            <ServiceCard title="Tree Pruning" description={`Professional pruning in ${areaName}, PA.`} link="/tree-service/tree-pruning" iconKey="tree-pruning" />
            <ServiceCard title="Stump Grinding" description={`Stump grinding services in ${areaName}, PA.`} link="/tree-service/stump-grinding" iconKey="stump-grinding" />
          </div>
        </div>
      </section>
      <ReviewsSection />
    </div>
  );
};

export default ServiceAreaDetail;
