import HeroSection from "@/components/HeroSection";
import QuoteForm from "@/components/QuoteForm";
import ReviewsSection from "@/components/ReviewsSection";
import heroBg from "@/assets/hero-bg.jpg";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        subtitle="Ready to discuss your MEP and HVAC project? Our expert team is here to help."
        backgroundImage={heroBg}
        showCTA={false}
      />

      <section className="section-padding">
        <div className="container-wide flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Ready to discuss your project? Fill out the form or contact us directly. Our expert team will assess your requirements and provide a tailored MEP/HVAC solution.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">Phone</h3>
                  <a href="tel:+971501234567" className="text-muted-foreground hover:text-primary transition-colors">+971 50 123 4567</a>
                  <br />
                  <a href="tel:+97145678901" className="text-muted-foreground hover:text-primary transition-colors">+971 4 567 8901</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">Email</h3>
                  <a href="mailto:info@splendoruae.com" className="text-muted-foreground hover:text-primary transition-colors">info@splendoruae.com</a>
                  <br />
                  <a href="mailto:projects@splendoruae.com" className="text-muted-foreground hover:text-primary transition-colors">projects@splendoruae.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Business Bay, Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-foreground">Working Hours</h3>
                  <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 8:00 AM - 2:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
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
