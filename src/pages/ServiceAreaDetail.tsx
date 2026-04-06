import { useParams, Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import heroBg from "@/assets/hero-bg.jpg";

const ServiceAreaDetail = () => {
  const { area } = useParams();
  const areaName = area
    ? area.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Dubai";

  return (
    <div>
      <HeroSection
        title={`MEP & HVAC Services in ${areaName}`}
        subtitle={`Professional MEP and HVAC solutions for commercial and residential projects in ${areaName}.`}
        backgroundImage={heroBg}
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">MEP & HVAC Services in {areaName}</h2>
          <p className="text-muted-foreground mb-6">
            SplendorUAE provides comprehensive MEP and HVAC solutions throughout {areaName}. From CHW piping installation to complete mechanical, electrical, and plumbing services, our experienced team handles projects of all sizes with professionalism and expertise.
          </p>
          <p className="text-muted-foreground mb-6">
            Our team understands the specific requirements of {areaName} projects, including local building codes, climate considerations, and infrastructure standards. We bring the right expertise and equipment to every job.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { title: "CHW Piping Systems", path: "/services/chw-piping" },
              { title: "HVAC Installation", path: "/services/hvac-installation" },
              { title: "Valve Packages", path: "/services/valve-packages" },
              { title: "Heat Exchangers", path: "/services/heat-exchangers" },
              { title: "Ductwork Systems", path: "/services/ductwork" },
              { title: "MEP Services", path: "/services/mep-services" },
            ].map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary transition-all group"
              >
                <h3 className="font-heading text-base font-bold uppercase text-card-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">Professional {s.title.toLowerCase()} in {areaName}.</p>
              </Link>
            ))}
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

export default ServiceAreaDetail;
