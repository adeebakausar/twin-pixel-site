import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import treeServiceHero from "@/assets/tree-service-hero.jpg";
import aboutImg from "@/assets/about-image.jpg";

const About = () => {
  return (
    <div>
      <HeroSection
        title="About BH Tree Service"
        subtitle="Owner-operated, locally trusted, and committed to quality tree care in Lancaster County."
        backgroundImage={treeServiceHero}
      />

      <section className="section-padding">
        <div className="container-wide flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground mb-4">
              Owner-operated since moving back to PA, BH Tree Service was built on a passion for quality tree work. We've dedicated ourselves to delivering experienced, reliable service to as many Lancaster County customers as we can—with affordability never compromised.
            </p>
            <p className="text-muted-foreground mb-4">
              With over 30 years of tree industry experience, our crew handles everything from routine pruning to emergency storm damage response. We're fully insured, licensed, and committed to leaving your property better than we found it.
            </p>
            <p className="text-muted-foreground">
              Whether you need a single tree removed or an entire lot cleared for development, BH Tree Service has the equipment, expertise, and work ethic to get the job done right.
            </p>
          </div>
          <div className="flex-1">
            <img src={aboutImg} alt="BH Tree Service team" className="rounded-lg shadow-xl w-full" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "30+ Years Experience", desc: "Decades of hands-on tree industry knowledge." },
              { title: "Locally Owned", desc: "We live and work in Lancaster County." },
              { title: "Emergency Response", desc: "24/7 availability for storm damage and hazards." },
              { title: "Fully Insured", desc: "Licensed and insured for your peace of mind." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReviewsSection />
    </div>
  );
};

export default About;
