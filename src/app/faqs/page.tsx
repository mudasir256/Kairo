import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs – Kairo",
  description: "Frequently asked questions about orders, shipping, returns and more.",
};

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Orders are processed within 1–2 business days. Delivery typically takes 3–7 business days within Pakistan, depending on your location.",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes. We offer free shipping on all orders above Rs. 2,500. Orders below that amount may incur a nominal delivery charge.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you’ll receive an email with a tracking link. You can also track your order from your account or by contacting us.",
  },
  {
    q: "What is your return and exchange policy?",
    a: "You can return or exchange most unused items within 14 days of delivery. See our Returns / Exchanges page for full details and steps.",
  },
  {
    q: "How do I choose the right size?",
    a: "Each product page includes a size guide. If you’re between sizes, we recommend sizing up for a relaxed fit or sticking to your usual size for a closer fit.",
  },
  {
    q: "How can I contact customer service?",
    a: "You can reach us via the Contact Us page. We aim to respond within 24–48 hours on business days.",
  },
];

export default function FAQsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2 animate-fade-up">
        FAQs
      </h1>
      <p className="text-[var(--muted)] mb-10 animate-fade-up animation-delay-100">
        Quick answers to common questions. Can’t find what you need?{" "}
        <Link href="/contact" className="text-[var(--accent)] hover:underline">
          Contact us
        </Link>
        .
      </p>
      <dl className="space-y-8">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`animate-fade-up ${i === 0 ? "" : i === 1 ? "animation-delay-100" : i === 2 ? "animation-delay-200" : i === 3 ? "animation-delay-300" : i === 4 ? "animation-delay-400" : "animation-delay-500"}`}
          >
            <dt className="font-medium text-[var(--foreground)] mb-2">
              {faq.q}
            </dt>
            <dd className="text-[var(--muted)] leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-12 animate-fade-up">
        <Link
          href="/contact"
          className="inline-block px-6 py-3 border border-[var(--border)] font-medium rounded-lg hover:bg-[var(--cream)] transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
