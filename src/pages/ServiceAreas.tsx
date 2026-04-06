import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import heroBg from "@/assets/hero-bg.jpg";

const allAreas = [
  "Dubai", "Abu Dhabi", "Sharjah", "Ajman",
  "Ras Al Khaimah", "Fujairah", "Umm Al Quwain",
];

const ServiceAreas = () => {
  return (
    <div>
      <HeroSection
        title="Service Areas"
        subtitle="SplendorUAE proudly serves clients across all emirates in the UAE."
        backgroundImage={heroBg}
        showCTA={false}
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <h2 className="font-heading text-3xl font-bold uppercase text-center text-foreground mb-12">Areas We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allAreas.map((area) => (
              <Link
                key={area}
                to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg hover:border-primary transition-all group"
              >
                <h3 className="font-heading text-lg font-bold uppercase text-card-foreground group-hover:text-primary transition-colors">{area}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ReviewsSection />
    </div>
  );
};

export default ServiceAreas;
