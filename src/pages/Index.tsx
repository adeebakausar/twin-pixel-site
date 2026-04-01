import { Shield, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-image.jpg";
import QuoteForm from "@/components/QuoteForm";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";

const stats = [
  { icon: <Clock className="w-6 h-6" />, label: "30+ Years Tree Industry Experience" },
  { icon: <Users className="w-6 h-6" />, label: "Locally Owned & Operated" },
  { icon: <Shield className="w-6 h-6" />, label: "Emergency Services Available" },
  { icon: <Award className="w-6 h-6" />, label: "Fully Insured & Licensed" },
];

const homeServices = [
  { title: "Tree Service", description: "Professional tree removal, pruning, and stump grinding services in Lancaster County, PA.", link: "/tree-service", iconKey: "tree-service" },
  { title: "Land Clearing Service", description: "Professional land clearing and grading services in Lancaster County, PA for property development.", link: "/land-clearing", iconKey: "land-clearing" },
  { title: "Drainage Service", description: "Professional drainage service in Lancaster County for water management and erosion control.", link: "/drainage", iconKey: "drainage" },
  { title: "Tree Removal", description: "Professional hazardous tree removal, stump grinding, emergency services. Free estimate.", link: "/tree-service/tree-removal", iconKey: "tree-removal" },
  { title: "Logging", description: "Logging and tree removal in Lancaster County, PA. Safe, professional service with land restoration.", link: "/tree-service/logging", iconKey: "logging" },
];

const reviews = [
  { name: "Taylor S", text: "Cannot thank these guys enough for cutting down a huge oak directly behind my house and on a mountain, even with all the negatives surrounding the location these guys made it look easy!! Would recommend them for all of your tree needs!" },
  { name: "Kau G", text: "Was very happy with Cody and his crew. They were very professional, had good communication to set up the work and completed everything perfectly as expected." },
  { name: "Monica Flamini", text: "Highly recommend for any needed tree/stump removal services. The team was professional and made quick and efficient work of the very large pine tree we needed removed. Customer service was top tier." },
  { name: "Pat V", text: "Cody did a great job removing a very large tree near my house. They worked quickly and efficiently wrapping up the job in only 2 hours. They cleaned up everything before they left." },
  { name: "Bob Powers", text: "Cody and his Team did a TERRIFIC job. Cody is very knowledgeable, very honest, and very hard working. He did exactly what he promised at a very fair price." },
  { name: "Chris Nosser", text: "Cody and team always come through for me at a very fair price. Had a tree fall and hit the house, they were out the next morning to get it taken care of." },
];

const faqs = [
  { q: "How quickly can BH Tree Service remove a tree?", a: "We can schedule tree removal appointments within a few days for most customers. Contact us today to book your removal and get a timeline that works for your schedule." },
  { q: "What happens after you grind a stump?", a: "After stump grinding, the area is left clear and ready for new landscaping or lawn growth. We haul away debris so your property is clean and ready to use." },
  { q: "Do you offer emergency tree services?", a: "Yes, BH Tree Service provides emergency tree removal and cleanup 24/7 for storm damage and hazardous trees. Call us right away if you have a fallen or dangerous tree." },
  { q: "Do I need a permit for tree removal?", a: "Permit requirements vary by municipality; we confirm what's needed and handle the paperwork for you." },
  { q: "Can you prune trees near power lines?", a: "Yes, we work safely around utilities and follow all local codes for clearance and trimming near power lines." },
  { q: "How do I prepare my yard for tree removal?", a: "Clear the area around the tree and mark any fragile plants or structures you want protected. Our crew will handle the rest." },
];

const serviceAreas = [
  "Berks County", "Bucks County", "Carbon County", "Chester County",
  "Delaware County", "Lancaster County", "Lebanon County", "Lehigh County",
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="BH Tree Service" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 container-wide px-4 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12 w-full">
          <div className="flex-1">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-background leading-tight">
              Tree Removal & Land Clearing, Lancaster County PA
            </h1>
            <p className="font-body text-lg text-background/90 mt-6 max-w-xl">
              BH Tree Service LLC provides expert tree removal, pruning, stump grinding, and land clearing throughout Lancaster County. With decades of industry experience, we handle emergency services, erosion control, and drainage work at fair prices.
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-6">
        <div className="container-wide px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 text-primary-foreground justify-center text-center sm:text-left">
              {stat.icon}
              <span className="font-heading text-sm font-semibold uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-wide flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="font-heading text-sm uppercase tracking-widest text-primary mb-2">About Us</p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Owner-operated since moving back to PA, BH Tree Service was built on a passion for quality tree work. We've dedicated ourselves to delivering experienced, reliable service to as many Lancaster County customers as we can—with affordability never compromised.
            </p>
          </div>
          <div className="flex-1">
            <img src={aboutImg} alt="Tree Services in Lancaster County" className="rounded-lg shadow-xl w-full" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <p className="font-heading text-sm uppercase tracking-widest text-primary text-center mb-2">What We Are Best At</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-center text-foreground mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((s) => (
              <ServiceCard key={s.link} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding">
        <div className="container-wide">
          <p className="font-heading text-sm uppercase tracking-widest text-primary text-center mb-2">Discover What Our Customers Have to Say</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-center text-foreground mb-12">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-center text-foreground mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-card border border-border rounded-lg group">
                <summary className="font-heading font-bold text-card-foreground px-6 py-4 cursor-pointer hover:text-primary transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-muted-foreground px-6 pb-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-heading text-2xl font-bold uppercase text-center text-foreground mb-8">Proudly Serving These Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                className="text-center text-sm font-semibold text-foreground hover:text-primary transition-colors py-2"
              >
                {area}, PA
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/service-areas" className="text-primary font-heading font-semibold uppercase tracking-wide hover:underline">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
