import { useState } from "react";
import logo from "@/assets/logo.png";

const ReviewUs = () => {
  const [step, setStep] = useState<"rate" | "feedback" | "thankyou">("rate");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleRatingClick = (stars: number) => {
    setSelectedRating(stars);
    if (stars >= 4) {
      window.open(
        "https://www.google.com/maps/place/BH+Tree+Service+LLC/@40.0428,-76.1765,15z",
        "_blank"
      );
    } else {
      setStep("feedback");
    }
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("thankyou");
  };

  const renderStars = (count: number) => (
    <span className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">★</span>
      ))}
      {[...Array(5 - count)].map((_, i) => (
        <span key={i} className="text-muted-foreground/40 text-xl">★</span>
      ))}
    </span>
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#333] flex items-center justify-center p-4 overflow-auto">
        {step === "rate" && (
          <div className="bg-background rounded-lg shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-destructive text-destructive-foreground text-center py-3">
              <h2 className="font-heading font-bold text-lg italic">How would you rate us?</h2>
            </div>
            <div className="p-8 flex flex-col items-center">
              <img src={logo} alt="BH Tree Service" className="h-28 w-auto mb-6" />
              <p className="font-bold text-foreground mb-4">Please Rate Us <span className="text-destructive">*</span></p>
              <div className="space-y-3 w-full">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <button
                    key={stars}
                    onClick={() => handleRatingClick(stars)}
                    className="flex items-center gap-3 w-full p-2 rounded hover:bg-muted transition-colors text-left"
                  >
                    <span className="w-4 h-4 rounded-full border-2 border-muted-foreground inline-block flex-shrink-0" />
                    {renderStars(stars)}
                    <span className="font-bold text-foreground">({stars} Star{stars !== 1 ? "s" : ""})</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-muted px-6 py-3 flex justify-end">
              <span className="text-sm text-muted-foreground font-medium">Next ▶</span>
            </div>
          </div>
        )}

        {step === "feedback" && (
          <div className="bg-background rounded-lg shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-destructive text-destructive-foreground text-center py-3">
              <h2 className="font-heading font-bold text-lg italic">How would you rate us?</h2>
            </div>
            <form onSubmit={handleSubmitFeedback} className="p-8">
              <p className="text-foreground text-sm mb-1">Sorry to hear that you're not satisfied.</p>
              <p className="text-muted-foreground text-xs mb-6">Please provide us with your feedback and we'll do our best to improve.</p>
              
              <label className="block font-bold text-foreground text-sm mb-1">Name (optional)</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-border rounded px-3 py-2 text-sm mb-4 bg-background text-foreground placeholder:text-muted-foreground"
              />

              <label className="block font-bold text-foreground text-sm mb-1">Email (optional)</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-border rounded px-3 py-2 text-sm mb-4 bg-background text-foreground placeholder:text-muted-foreground"
              />

              <label className="block font-bold text-foreground text-sm mb-1">
                Your Feedback (Please let us know what can we do to improve?)
              </label>
              <textarea
                placeholder="Your Feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className="w-full border border-border rounded px-3 py-2 text-sm mb-4 bg-background text-foreground placeholder:text-muted-foreground resize-y"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-foreground text-background font-heading font-bold text-sm uppercase px-6 py-2.5 rounded hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {step === "thankyou" && (
          <div className="bg-background rounded-xl shadow-2xl max-w-lg w-full p-10 text-center">
            <p className="text-foreground text-lg mb-2">I'm sorry we missed the mark... 😔</p>
            <p className="text-muted-foreground text-sm">
              Thank you for letting us know. We value your review regardless and appreciate you letting us know where we can improve.
            </p>
          </div>
        )}
    </div>
  );
};

export default ReviewUs;
