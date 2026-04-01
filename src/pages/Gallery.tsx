import HeroSection from "@/components/HeroSection";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  heroBg, heroBg, heroBg, heroBg, heroBg, heroBg,
];

const Gallery = () => {
  return (
    <div>
      <HeroSection
        title="Our Projects"
        subtitle="See our work across Lancaster County and surrounding areas."
        backgroundImage={heroBg}
        showCTA={false}
      />

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-bold uppercase text-center text-foreground mb-12">See Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-video rounded-lg overflow-hidden">
                <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
