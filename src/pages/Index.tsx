import { Shield, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-image.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import QuoteForm from "@/components/QuoteForm";
import ServiceCard from "@/components/ServiceCard";

const stats = [
  { icon: <Clock className="w-6 h-6" />, label: "30+ Years Tree Industry Experience" },
  { icon: <Users className="w-6 h-6" />, label: "Locally Owned & Operated" },
  { icon: <Shield className="w-6 h-6" />, label: "Emergency Services Available" },
  { icon: <Award className="w-6 h-6" />, label: "Fully Insured & Licensed" },
];

const homeServices = [
  { title: "Tree Service", description: "Professional tree removal, pruning, and stump grinding services in Lancaster County, PA.", link: "/tree-service", iconKey: "tree-service" },
  { title: "Land Clearing Service", description: "Professional land clearing and grading services in Lancaster County, PA for property development and construction.", link: "/land-clearing", iconKey: "land-clearing" },
  { title: "Drainage Service", description: "Professional drainage service in Lancaster County for water management and erosion control.", link: "/drainage", iconKey: "drainage" },
  { title: "Tree Removal", description: "Tree removal in Lancaster County, PA. Professional hazardous tree removal, stump grinding, emergency services. Free estimate—call now.", link: "/tree-service/tree-removal", iconKey: "tree-removal" },
  { title: "Logging", description: "Logging and tree removal in Lancaster County, PA. Safe, professional service with land restoration. Call for a free estimate today.", link: "/tree-service/logging", iconKey: "logging" },
];

const galleryImages = [
  { src: gallery1, alt: "Tree removal in Lancaster County, PA" },
  { src: gallery2, alt: "Stump grinding in Lancaster County, PA" },
  { src: gallery3, alt: "Land clearing project in Lancaster County, PA" },
  { src: gallery4, alt: "Emergency tree removal in Lancaster County, PA" },
  { src: gallery5, alt: "Tree pruning in Lancaster County, PA" },
  { src: gallery6, alt: "Firewood stacking in Lancaster County, PA" },
  { src: gallery7, alt: "Drainage installation in Lancaster County, PA" },
  { src: gallery8, alt: "Land clearing with excavator in Lancaster County, PA" },
  { src: gallery9, alt: "Completed tree service in Lancaster County, PA" },
  { src: gallery10, alt: "Logging service in Lancaster County, PA" },
];

const faqs = [
  { q: "How quickly can BH Tree Service remove a tree in Berks County?", a: "We can schedule tree removal appointments within a few days for most customers in Berks County. Contact us today to book your removal and get a timeline that works for your schedule." },
  { q: "What happens after you grind a stump in Bucks County?", a: "After stump grinding in Bucks County, the area is left clear and ready for new landscaping or lawn growth. We haul away debris so your property is clean and ready to use." },
  { q: "Do you offer emergency tree services in Carbon County?", a: "Yes, BH Tree Service provides emergency tree removal and cleanup in Carbon County 24/7 for storm damage and hazardous trees. Call us right away if you have a fallen or dangerous tree." },
  { q: "How do I prepare my yard for tree removal in Chester County?", a: "Clear the area around the tree and mark any fragile plants or structures you want protected in Chester County. Our crew will handle the rest and clean up when we're done." },
  { q: "Can BH Tree Service clear land for new construction in Delaware County?", a: "Yes, we perform full land clearing and grading for development projects in Delaware County. We also handle drainage and erosion control to prepare your site for building." },
  { q: "What's the first step to book tree pruning in Lancaster County?", a: "Call BH Tree Service to describe your trees and schedule a time that fits your calendar in Lancaster County. We'll confirm your appointment and arrive ready to work." },
];

const WaveDividerTop = () => (
  <div className="w-full leading-[0] overflow-hidden">
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px] block">
      <path d="M0,0 L0,40 Q360,100 720,40 Q1080,-20 1440,40 L1440,0 Z" fill="white" />
    </svg>
  </div>
);

const WaveDividerBottom = () => (
  <div className="w-full leading-[0] overflow-hidden">
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px] block">
      <path d="M0,60 Q360,0 720,60 Q1080,120 1440,60 L1440,100 L0,100 Z" fill="white" />
    </svg>
  </div>
);

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

      {/* Gallery / See Our Work Section */}
      <div className="relative">
        <div
          className="relative bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/40" />
          <WaveDividerTop />
          <div className="relative z-10 px-4 pt-4 pb-16 md:pb-20">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
                <div>
                  <p className="font-heading text-sm uppercase tracking-widest text-primary-foreground/80 mb-2">
                    See Why Our Customers Love Us
                  </p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-primary-foreground">
                    See Our Work
                  </h2>
                </div>
                <Link
                  to="/gallery"
                  className="mt-4 md:mt-0 inline-block bg-primary text-primary-foreground font-heading text-sm font-bold px-8 py-3 rounded hover:opacity-90 transition-opacity uppercase tracking-wide"
                >
                  See All Photos
                </Link>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {galleryImages.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-lg aspect-square group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <WaveDividerBottom />
        </div>
      </div>

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
    </div>
  );
};

export default Index;
