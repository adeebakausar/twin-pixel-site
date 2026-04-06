import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-image.jpg";

const About = () => {
  return (
    <div>
      <HeroSection
        title="About SplendorUAE"
        subtitle="With over 15 years of excellence in the MEP and HVAC industry, we are the most trusted partner across the UAE."
        backgroundImage={heroBg}
      />

      <section className="section-padding">
        <div className="container-wide flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2009, SplendorUAE began as a small team of passionate engineers with a vision to revolutionize MEP and HVAC services in the UAE. Today, we stand as a leading service provider with over 500 successful projects.
            </p>
            <p className="text-muted-foreground mb-4">
              Our journey has been marked by continuous innovation, unwavering commitment to quality, and building lasting relationships with clients across the region. We serve both commercial and residential projects with the same level of dedication.
            </p>
            <p className="text-muted-foreground">
              From CHW piping fabrication to complete MEP installations, our certified engineers and skilled technicians deliver exceptional results on every project.
            </p>
          </div>
          <div className="flex-1">
            <img src={aboutImg} alt="SplendorUAE team" className="rounded-lg shadow-xl w-full" loading="lazy" width={1024} height={768} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-8">Our Foundation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Our Mission", desc: "To deliver exceptional MEP and HVAC solutions that exceed client expectations while maintaining the highest standards of safety, quality, and sustainability." },
              { title: "Our Vision", desc: "To be the most trusted and innovative MEP contractor in the UAE, setting industry benchmarks for excellence and reliability." },
              { title: "Our Values", desc: "Integrity, Excellence, Innovation, and Commitment to our clients, team members, and the communities we serve." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-8">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "15+", label: "Years of Experience" },
              { num: "500+", label: "Projects Completed" },
              { num: "50+", label: "Expert Team Members" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading text-3xl font-bold text-primary mb-1">{item.num}</h3>
                <p className="text-sm text-muted-foreground">{item.label}</p>
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
