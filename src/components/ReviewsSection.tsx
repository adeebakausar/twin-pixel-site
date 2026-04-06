import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const ReviewsSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section className="relative">
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/50" />
        <div className="w-full leading-[0] overflow-hidden">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px] block">
            <path d="M0,0 L0,40 Q360,100 720,40 Q1080,-20 1440,40 L1440,0 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 px-4 pt-4 pb-16 md:pb-20">
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
          <div className="max-w-6xl mx-auto">
            <iframe
              className="lc_reviews_widget"
              src="https://reputationhub.site/reputation/widgets/review_widget/VpYniePP1Eyh1VyKfkYG"
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: '100%', width: '100%' }}
              title="Customer Reviews"
            />
          </div>
        </div>
        <div className="w-full leading-[0] overflow-hidden">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px] block">
            <path d="M0,60 Q360,0 720,60 Q1080,120 1440,60 L1440,100 L0,100 Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
