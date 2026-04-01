import HeroSection from "@/components/HeroSection";
import QuoteForm from "@/components/QuoteForm";
import ReviewsSection from "@/components/ReviewsSection";
import treeServiceHero from "@/assets/tree-service-hero.jpg";
import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch for a free quote on tree removal, land clearing, or drainage services."
        backgroundImage={treeServiceHero}
        showCTA={false}
      />

      <section className="section-padding">
        <div className="container-wide flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Ready to get started? Fill out the form or give us a call. We'll get back to you as soon as possible with a free estimate.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">Phone</h3>
                  <a href="tel:16103245372" className="text-muted-foreground hover:text-primary transition-colors">(610) 324-5372</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">Service Area</h3>
                  <p className="text-muted-foreground">Lancaster County, PA & surrounding counties</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">Hours</h3>
                  <p className="text-muted-foreground">24/7 Emergency Services Available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <QuoteForm />
          </div>
        </div>
      </section>
      <ReviewsSection />
    </div>
  );
};

export default Contact;
