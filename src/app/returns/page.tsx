import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns & Exchanges – Kairo",
  description:
    "How to return or exchange your Kairo order. Easy process within 14 days.",
};

export default function ReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6 animate-fade-up">
        Returns / Exchanges
      </h1>
      <div className="space-y-8 text-[var(--foreground)] animate-fade-up animation-delay-100">
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3">
            Eligibility
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Items must be unused, unwashed and in original packaging with tags
            attached. We accept returns and exchanges within 14 days of delivery.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3">
            How to return or exchange
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-[var(--muted)]">
            <li>Contact us via the Contact Us page or email with your order number.</li>
            <li>We’ll confirm eligibility and send you return instructions.</li>
            <li>Pack the item securely and ship it to the address we provide.</li>
            <li>Once we receive and inspect the item, we’ll process your refund or ship the exchange.</li>
          </ol>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3">
            Refunds
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            Refunds are issued to the original payment method within 5–7 business
            days after we receive the return. Exchanges are shipped as soon as
            the returned item is approved.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3">
            Non-returnable items
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            For hygiene reasons, certain items (e.g. select accessories) may not
            be returnable. This will be indicated on the product page. Sale
            items may have different terms; check the product listing at time of
            purchase.
          </p>
        </section>
      </div>
      <div className="mt-10 animate-fade-up">
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-[var(--foreground)] text-[var(--cream)] font-medium rounded-lg hover:opacity-90 transition"
        >
          Start a return
        </Link>
      </div>
    </div>
  );
}
