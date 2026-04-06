import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center section-padding">
      <div className="text-center max-w-lg">
        <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
        <h1 className="font-heading text-4xl font-bold text-foreground uppercase mb-4">
          Thank You!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          We've received your consultation request. Our team will review your project details and get back to you within 24 hours.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-primary-foreground font-heading font-bold py-3 px-8 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
