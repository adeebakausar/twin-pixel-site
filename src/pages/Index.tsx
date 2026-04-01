import { Shield, Clock, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-image.jpg";
import serviceTree from "@/assets/service-tree.jpg";
import serviceLand from "@/assets/service-landclearing.jpg";
import serviceDrainage from "@/assets/service-drainage.jpg";
import serviceRemoval from "@/assets/service-removal.jpg";
import serviceLogging from "@/assets/service-logging.jpg";
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

const stats = [
  { icon: <Clock className="w-6 h-6" />, label: "30+ Years Tree Industry Experience" },
  { icon: <Users className="w-6 h-6" />, label: "Locally Owned & Operated" },
  { icon: <Shield className="w-6 h-6" />, label: "Emergency Services Available" },
  { icon: <Award className="w-6 h-6" />, label: "Fully Insured & Licensed" },
];

const homeServices = [
  { title: "Tree Service", image: serviceTree, link: "/tree-service" },
  { title: "Land Clearing Service", image: serviceLand, link: "/land-clearing" },
  { title: "Drainage Service", image: serviceDrainage, link: "/drainage" },
  { title: "Tree Removal", image: serviceRemoval, link: "/tree-service/tree-removal" },
  { title: "Logging", image: serviceLogging, link: "/tree-service/logging" },
];

const galleryImages = [
  { src: gallery1, alt: "Tree removal in Berks County, PA" },
  { src: gallery2, alt: "Tree removal in Berks County, PA" },
  { src: gallery3, alt: "Tree removal in Berks County, PA" },
  { src: gallery4, alt: "Tree removal in Berks County, PA" },
  { src: gallery5, alt: "Tree removal in Berks County, PA" },
  { src: gallery6, alt: "Tree service in Bucks County, PA" },
  { src: gallery7, alt: "Tree service in Bucks County, PA" },
  { src: gallery8, alt: "Tree service in Bucks County, PA" },
  { src: gallery9, alt: "Tree service in Bucks County, PA" },
  { src: gallery10, alt: "Tree service in Bucks County, PA" },
];


const servingAreas = [
  "Berks County, PA", "Bucks County, PA", "Carbon County, PA", "Chester County, PA",
  "Delaware County, PA", "Lancaster County, PA", "Lebanon County, PA", "Lehigh County, PA",
];

const faqs = [
  { q: "How quickly can BH Tree Service remove a tree in Berks County?", a: "We can schedule tree removal appointments within a few days for most customers in Berks County. Contact us today to book your removal and get a timeline that works for your schedule." },
  { q: "What happens after you grind a stump in Bucks County?", a: "After stump grinding in Bucks County, the area is left clear and ready for new landscaping or lawn growth. We haul away debris so your property is clean and ready to use." },
  { q: "Do you offer emergency tree services in Carbon County?", a: "Yes, BH Tree Service provides emergency tree removal and cleanup in Carbon County 24/7 for storm damage and hazardous trees. Call us right away if you have a fallen or dangerous tree." },
  { q: "How do I prepare my yard for tree removal in Chester County?", a: "Clear the area around the tree and mark any fragile plants or structures you want protected in Chester County. Our crew will handle the rest and clean up when we're done." },
  { q: "Can BH Tree Service clear land for new construction in Delaware County?", a: "Yes, we perform full land clearing and grading for development projects in Delaware County. We also handle drainage and erosion control to prepare your site for building." },
  { q: "What's the first step to book tree pruning in Lancaster County?", a: "Call BH Tree Service to describe your trees and schedule a time that fits your calendar in Lancaster County. We'll confirm your appointment and arrive ready to work." },
];

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="mb-8">
            <div className="inline-block bg-foreground text-background font-heading text-xs font-bold uppercase tracking-wider px-3 py-1.5 mb-2">
              What We Are Best At
            </div>
            <div className="flex items-center gap-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground">Our Services</h2>
              <div className="hidden md:block h-[3px] flex-1 bg-primary max-w-[200px]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {homeServices.slice(0, 3).map((s) => (
              <Link key={s.link} to={s.link} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img src={s.image} alt={s.title} loading="lazy" width={800} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-foreground text-background font-heading text-xs font-bold uppercase tracking-wider px-2.5 py-1">{s.title}</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-primary-foreground font-heading text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
                  View More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {homeServices.slice(3).map((s) => (
              <Link key={s.link} to={s.link} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img src={s.image} alt={s.title} loading="lazy" width={800} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-foreground text-background font-heading text-xs font-bold uppercase tracking-wider px-2.5 py-1">{s.title}</span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-primary-foreground font-heading text-sm font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
                  View More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* See Our Work Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <div className="inline-block bg-foreground text-background font-heading text-xs font-bold uppercase tracking-wider px-3 py-1.5 mb-2">
                See Why Our Customers Love Us
              </div>
              <div className="flex items-center gap-4">
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground">See Our Work</h2>
                <div className="hidden md:block h-[3px] flex-1 bg-primary max-w-[200px]" />
              </div>
            </div>
            <Link
              to="/gallery"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-foreground text-background font-heading text-xs font-bold uppercase px-5 py-2.5 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors tracking-wider"
            >
              See All Photos <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-lg group">
                <img src={img.src} alt={img.alt} loading="lazy" width={800} height={600} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={gallery3} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,0 L0,40 Q360,80 720,40 Q1080,0 1440,40 L1440,0 Z" fill="hsl(var(--background))" />
          </svg>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,0 L0,40 Q360,80 720,40 Q1080,0 1440,40 L1440,0 Z" fill="hsl(var(--background))" />
          </svg>
        </div>

        <div className="relative z-10 container-wide pt-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <div className="inline-block bg-foreground text-background font-heading text-xs font-bold uppercase tracking-wider px-3 py-1.5 mb-2">
                Discover What Our Customers Have To Say About Us
              </div>
              <div className="flex items-center gap-4">
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-white">Reviews</h2>
                <div className="hidden md:block h-[3px] flex-1 bg-primary max-w-[200px]" />
              </div>
            </div>
            <Link
              to="/review-us"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-background text-foreground font-heading text-xs font-bold uppercase px-5 py-2.5 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors tracking-wider border-2 border-foreground"
            >
              Leave a Review <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Review Widget */}
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/6V45N8I3W9GiHwA5iEDb"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: '100%', width: '100%' }}
            title="Customer Reviews"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
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

      {/* Proudly Serving These Areas */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground mb-10">Proudly Serving These Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {servingAreas.map((area) => (
              <div key={area} className="bg-card border border-border rounded-lg px-4 py-3 font-heading text-sm font-semibold text-card-foreground">
                {area}
              </div>
            ))}
          </div>
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 bg-foreground text-background font-heading text-xs font-bold uppercase px-6 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors tracking-wider"
          >
            View All Service Areas <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase text-primary-foreground mb-2">
            Ready To Take The Next Step?
          </h2>
          <h3 className="font-heading text-3xl md:text-4xl font-extrabold uppercase text-primary-foreground mb-8">
            Get A Free Quote Today!
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground font-heading text-sm font-bold uppercase px-8 py-4 rounded-sm hover:bg-foreground hover:text-background transition-colors tracking-wider"
          >
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
