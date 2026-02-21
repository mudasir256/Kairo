import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Kairo",
  description: "How Kairo collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6 animate-fade-up">
        Privacy Policy
      </h1>
      <p className="text-[var(--muted)] mb-10 animate-fade-up animation-delay-100">
        Last updated: February 2025. We respect your privacy and are committed
        to protecting your personal data.
      </p>

      <div className="space-y-8 text-[var(--foreground)] animate-fade-up animation-delay-200">
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3">
            Information we collect
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            We collect information you provide when you place an order, create an
            account, subscribe to our newsletter or contact us. This may include
            your name, email address, shipping address, phone number and payment
            details. We also collect technical data such as IP address and
            browser type when you use our website.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3">
            How we use your information
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            We use your information to process orders, send order updates,
            respond to enquiries and improve our services. With your consent, we
            may send you marketing emails about new arrivals and offers. You can
            unsubscribe at any time.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3">
            Sharing and disclosure
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            We do not sell your personal data. We may share your information with
            service providers who help us run our business (e.g. payment
            processors, delivery partners) under strict confidentiality. We may
            also disclose information where required by law.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3">
            Security
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            We use appropriate technical and organisational measures to protect
            your personal data against unauthorised access, loss or misuse.
            Payment information is handled by secure, compliant payment
            providers.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3">
            Your rights
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            You have the right to access, correct or delete your personal data,
            and to object to or restrict certain processing. You can also
            withdraw consent for marketing at any time. To exercise these rights
            or ask questions about this policy, contact us via the Contact Us
            page.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mb-3">
            Changes
          </h2>
          <p className="text-[var(--muted)] leading-relaxed">
            We may update this privacy policy from time to time. The “Last
            updated” date at the top will reflect the latest version. We
            encourage you to review this page periodically.
          </p>
        </section>
      </div>
    </div>
  );
}
