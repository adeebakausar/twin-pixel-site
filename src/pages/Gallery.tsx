import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import heroBg from "@/assets/hero-bg.jpg";
import serviceChw from "@/assets/service-chw-piping.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import serviceValve from "@/assets/service-valve.jpg";
import serviceHeatExchanger from "@/assets/service-heat-exchanger.jpg";
import serviceDuctwork from "@/assets/service-ductwork.jpg";
import serviceMep from "@/assets/service-mep.jpg";

const galleryImages = [
  { src: serviceChw, alt: "CHW Piping Installation" },
  { src: serviceHvac, alt: "HVAC System Installation" },
  { src: serviceValve, alt: "Valve Package Installation" },
  { src: serviceHeatExchanger, alt: "Heat Exchanger Setup" },
  { src: serviceDuctwork, alt: "Ductwork Installation" },
  { src: serviceMep, alt: "MEP Services" },
];

const Gallery = () => {
  return (
    <div>
      <HeroSection
        title="Our Projects"
        subtitle="Showcasing our expertise through successful project deliveries across the UAE."
        backgroundImage={heroBg}
        showCTA={false}
      />

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold uppercase text-center text-foreground mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-video rounded-lg overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReviewsSection />
    </div>
  );
};

export default Gallery;
