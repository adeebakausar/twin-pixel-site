import { Link } from "react-router-dom";
import { Phone, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const serviceAreas = [
  "Berks County", "Bucks County", "Carbon County", "Chester County",
  "Delaware County", "Lancaster County", "Lebanon County", "Lehigh County",
];

const reviews = [
  { name: "Gina Massetti", text: "Cody and his team are absolutely amazing to work with! Everything was so easy and seamless from the estimate, to scheduling, to completing the work.", rating: 5 },
  { name: "D Nonnenman", text: "BH Tree Service did a fantastic job dropping 5 trees for us. Professionalism was top notch with attention to detail. Appreciated the care taken to pro...", rating: 5 },
  { name: "Greg Herman", text: "Very fast and reliable service. Took time out of his busy schedule to accommodate me. Very respectful to the property.", rating: 5 },
  { name: "Sarah Mitchell", text: "Outstanding work! They removed a massive oak tree that was dangerously close to our house. Professional, efficient, and left the yard spotless.", rating: 5 },
  { name: "Tom Williams", text: "Best tree service in Lancaster County. Fair pricing and excellent communication throughout the entire process. Highly recommend!", rating: 5 },
  { name: "Jennifer Adams", text: "Called for emergency service after a storm and they were there within hours. Incredible response time and quality work.", rating: 5 },
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

const Footer = () => {
  const [reviewPage, setReviewPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const currentReviews = reviews.slice(reviewPage * perPage, reviewPage * perPage + perPage);

  return (
    <footer>
      {/* ===== REVIEWS SECTION ===== */}
      <div className="relative">
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/50" />
          <WaveDividerTop />
          <div className="relative z-10 px-4 pt-4 pb-16 md:pb-20">
            {/* Header */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between mb-10">
              <div>
                <div className="inline-block bg-foreground text-background font-heading text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-2 mb-3">
                  Discover What Our Customers Have To Say About Us
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-primary-foreground">
                    Reviews
                  </h2>
                  <div className="hidden md:block h-[3px] w-24 bg-primary mt-2" />
                </div>
              </div>
              <Link
                to="/review-us"
                className="mt-4 md:mt-2 inline-flex items-center gap-2 border-2 border-foreground bg-background text-foreground font-heading text-sm font-bold uppercase px-6 py-3 rounded-sm hover:bg-foreground hover:text-background transition-colors"
              >
                Leave a Review <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Review Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {currentReviews.map((review, i) => (
                <div key={i} className="bg-background rounded-lg p-6 shadow-lg border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary font-bold text-lg">{review.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, s) => (
                        <span key={s} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {review.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium text-sm">{review.name}</span>
                    <FaGoogle className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 text-primary-foreground">
              <button
                onClick={() => setReviewPage(Math.max(0, reviewPage - 1))}
                disabled={reviewPage === 0}
                className="p-1 hover:text-primary disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewPage(i)}
                  className={`w-7 h-7 text-sm font-bold rounded ${
                    reviewPage === i ? "text-primary-foreground text-lg" : "text-primary-foreground/60 hover:text-primary-foreground"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setReviewPage(Math.min(totalPages - 1, reviewPage + 1))}
                disabled={reviewPage === totalPages - 1}
                className="p-1 hover:text-primary disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <WaveDividerBottom />
        </div>
      </div>

      {/* ===== PROUDLY SERVING THESE AREAS ===== */}
      <section className="bg-background py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-[420px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              title="BH Tree Service Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12200!2d-76.1765!3d40.0428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c63a1b3b7b3b3b%3A0x2b0e1c4b9b3b3b3b!2sBH%20Tree%20Service%20LLC!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-foreground leading-tight mb-8">
              Proudly Serving<br />These Areas
            </h2>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm md:text-base text-foreground font-medium mb-8">
              {serviceAreas.map((area) => (
                <Link
                  key={area}
                  to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-primary transition-colors"
                >
                  {area}, PA
                </Link>
              ))}
            </div>
            <Link
              to="/service-areas"
              className="inline-block bg-primary text-primary-foreground font-heading text-sm font-bold px-8 py-3 rounded hover:opacity-90 transition-opacity uppercase tracking-wide"
            >
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <div className="relative">
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/50" />
          <WaveDividerTop />
          <div className="relative z-10 text-center px-4 py-12 md:py-16">
            <h2 className="font-heading text-3xl md:text-4xl font-black uppercase text-primary-foreground italic mb-2">
              Ready to Take the Next Step?
            </h2>
            <h2 className="font-heading text-3xl md:text-4xl font-black uppercase text-primary-foreground italic mb-8">
              Get a Free Quote Today!
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground font-heading text-sm font-bold px-10 py-3.5 rounded hover:opacity-90 transition-opacity uppercase tracking-wide"
            >
              Get a Free Quote
            </Link>
          </div>
          <WaveDividerBottom />
        </div>
      </div>

      {/* ===== BOTTOM FOOTER ===== */}
      <div className="bg-background px-4 py-14 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Company */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-4 tracking-wider">Company</h4>
            <img src={logo} alt="BH Tree Service" className="h-20 w-auto mb-3" />
            <a href="tel:16103245372" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
              <Phone className="w-3.5 h-3.5" /> (610) 324-5372
            </a>
            <a href="#" className="inline-block">
              <FaGoogle className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/tree-service" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Review Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-4 tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/tree-service" className="hover:text-primary transition-colors">Tree Service</Link></li>
              <li><Link to="/land-clearing" className="hover:text-primary transition-colors">Land Clearing Service</Link></li>
              <li><Link to="/drainage" className="hover:text-primary transition-colors">Drainage Service</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-4 tracking-wider">Service Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link to={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`} className="hover:text-primary transition-colors">
                    {area}, PA
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase text-foreground mb-4 tracking-wider">Operating Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon: 7:00 Am - 3:00 Pm</li>
              <li>Tue: 7:00 Am - 3:00 Pm</li>
              <li>Wed: 7:00 Am - 3:00 Pm</li>
              <li>Thu: 7:00 Am - 3:00 Pm</li>
              <li>Fri: 7:00 Am - 3:00 Pm</li>
              <li>Sat: Closed - Closed</li>
              <li>Sun: Closed - Closed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT BAR ===== */}
      <div className="border-t-2 border-primary mx-4 md:mx-16" />
      <div className="px-4 md:px-16 py-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="flex gap-8 text-sm font-medium text-foreground">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
        <Link
          to="/contact"
          className="mt-3 md:mt-0 inline-block bg-primary text-primary-foreground font-heading text-xs font-bold px-6 py-2.5 rounded hover:opacity-90 transition-opacity uppercase tracking-wider"
        >
          Get Free Quote
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
