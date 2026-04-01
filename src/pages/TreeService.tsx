import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import treeServiceHero from "@/assets/tree-service-hero.jpg";

const treeServices = [
  { title: "Tree Removal", description: "Professional tree removal services in Lancaster County, PA for hazardous trees and emergency cleanup.", link: "/tree-service/tree-removal", iconKey: "tree-removal" },
  { title: "Logging", description: "Professional logging and tree removal services in Lancaster County, PA for safe, complete land management.", link: "/tree-service/logging", iconKey: "logging" },
  { title: "Tree Pruning", description: "Professional tree pruning in Lancaster County, PA for healthy, safe trees.", link: "/tree-service/tree-pruning", iconKey: "tree-pruning" },
  { title: "Stump Grinding", description: "Professional stump grinding in Lancaster County for complete stump removal and debris cleanup.", link: "/tree-service/stump-grinding", iconKey: "stump-grinding" },
  { title: "Emergency Tree Services", description: "24/7 emergency tree removal and cleanup services across Lancaster County, Pennsylvania.", link: "/tree-service/emergency", iconKey: "emergency" },
];

const reviews = [
  { name: "Taylor S", text: "Cannot thank these guys enough for cutting down a huge oak directly behind my house and on a mountain, even with all the negatives surrounding the location these guys made it look easy!" },
  { name: "Monica Flamini", text: "Highly recommend for any needed tree/stump removal services. The team was professional and made quick and efficient work of the very large pine tree we needed removed." },
  { name: "Bill Loesel", text: "Cody and Casey were called in by our insurance agent - arrived less than 3 hours after the storm knocked most of a large tree into the driveway. Super knowledgeable about all things trees." },
];

const TreeService = () => {
  return (
    <div>
      <HeroSection
        title="Tree Service Lancaster County, PA"
        subtitle="Professional tree removal, pruning, and stump grinding services in Lancaster County, PA."
        backgroundImage={treeServiceHero}
      />

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <p className="font-heading text-sm uppercase tracking-widest text-primary mb-2">Local Tree Service Expertise</p>
          <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">Tree Service in Lancaster County, PA</h2>
          <p className="text-muted-foreground mb-8">
            In Lancaster County, PA, trees need regular care to stay healthy and safe. Storm damage, disease, and overgrowth happen fast in our climate. We handle tree removal, pruning, stump grinding, and emergency work so your property stays clear and protected.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-3">Tree Removal in Lancaster County, PA</h3>
              <p className="text-muted-foreground">Dead, diseased, or hazardous trees pose real danger to your home and family. Lancaster County properties often face storm damage and pest pressure that make removal necessary. We drop trees safely, haul debris, and clear the site so you can use your yard again.</p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-3">Tree Pruning in Lancaster County, PA</h3>
              <p className="text-muted-foreground">Pruning keeps trees strong and prevents future problems. Overgrown branches near homes and power lines become liabilities after rain or wind. Regular trimming improves tree health, opens up views, and protects your roof and siding.</p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-3">Stump Grinding in Lancaster County, PA</h3>
              <p className="text-muted-foreground">Stumps left behind after tree removal block your lawn and invite insects. Stump grinding removes the root system completely so you reclaim your space. We grind below grade and clean up debris.</p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold uppercase text-foreground mb-3">Emergency Tree Services</h3>
              <p className="text-muted-foreground">Storms happen without notice. Fallen trees, hanging limbs, and split trunks create hazards that can't wait. We respond fast to emergency calls, clearing streets, restoring access, and preventing further damage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <p className="font-heading text-sm uppercase tracking-widest text-primary text-center mb-2">What We Are Best At</p>
          <h2 className="font-heading text-3xl font-bold uppercase text-center text-foreground mb-12">Our Tree Service Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treeServices.map((s) => (
              <ServiceCard key={s.link} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding">
        <div className="container-wide">
          <p className="font-heading text-sm uppercase tracking-widest text-primary text-center mb-2">Discover What Our Customers Have to Say</p>
          <h2 className="font-heading text-3xl font-bold uppercase text-center text-foreground mb-12">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreeService;
