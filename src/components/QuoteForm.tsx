import { useState } from "react";
import logo from "@/assets/logo.png";

const QuoteForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "", agreed: false });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const params = new URLSearchParams();
      params.append("name", form.name);
      params.append("phone", form.phone);
      params.append("message", form.message);
      await fetch("https://services.leadconnectorhq.com/hooks/6V45N8I3W9GiHwA5iEDb/webhook-trigger/fb49ad74-c80c-4570-8cd7-93891a000c9a", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
        mode: "no-cors",
      });
      alert("Thank you! We'll get back to you soon.");
      setForm({ name: "", phone: "", message: "", agreed: false });
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-foreground rounded-lg p-6 md:p-8 w-full max-w-md">
      <div className="flex justify-center mb-4">
        <img src={logo} alt="BH Tree Service" className="h-14 w-auto" />
      </div>
      <h3 className="font-heading text-xl font-bold text-center text-background uppercase tracking-wide mb-6">
        Get a Free Quote
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-background mb-1">Full Name *</label>
          <input
            type="text"
            required
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-md bg-background text-foreground text-sm border-0 focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-background mb-1">Phone</label>
          <input
            type="tel"
            placeholder="(808) 555-1234"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-2.5 rounded-md bg-background text-foreground text-sm border-0 focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-background mb-1">Short message about your needs *</label>
          <textarea
            required
            placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={3}
            className="w-full px-4 py-2.5 rounded-md bg-background text-foreground text-sm border-0 focus:ring-2 focus:ring-primary resize-none"
          />
        </div>
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            required
            checked={form.agreed}
            onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
            className="mt-1 accent-primary"
          />
          <p className="text-xs text-background/80">
            I agree to the <span className="text-primary font-semibold">Terms & Conditions</span> provided by the company. By providing my phone number, I agree to receive text messages from the business.
          </p>
        </div>
        <p className="text-xs text-background/60">
          We respect your privacy - learn how we handle your data in our <span className="text-primary font-semibold">Privacy Policy</span>.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary text-primary-foreground font-heading text-xl font-bold py-4 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wider disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
