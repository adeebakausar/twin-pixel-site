import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showCTA?: boolean;
}

const HeroSection = ({ title, subtitle, backgroundImage, showCTA = true }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center wave-divider">
      <div className="absolute inset-0">
        <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
        <div className="hero-overlay" />
      </div>
      <div className="relative z-10 text-center px-4 py-32">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-background leading-tight max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-lg text-background/90 mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {showCTA && (
          <Link
            to="/contact"
            className="inline-block mt-8 bg-primary text-primary-foreground font-heading text-lg font-semibold px-10 py-4 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wide"
          >
            Get Free Quote
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
