import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – Kairo",
  description:
    "Learn about Kairo – cozy fashion for everyone. Quality clothing, shoes and accessories for men, women and kids.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-6 animate-fade-up">
        About Us
      </h1>
      <div className="prose prose-neutral max-w-none text-[var(--foreground)] animate-fade-up animation-delay-100">
        <p className="text-[var(--muted)] leading-relaxed">
          Kairo is built around one idea: cozy, always. We believe everyone
          deserves quality clothing, shoes and accessories that feel good and
          last — for men, women and kids.
        </p>
        <p className="mt-4 text-[var(--muted)] leading-relaxed">
          We focus on timeless pieces and seasonal drops so you can dress for
          the moment without the clutter. Free shipping on orders above Rs.
          2,500 is our way of making that a little easier.
        </p>
        <p className="mt-4 text-[var(--muted)] leading-relaxed">
          Thank you for being here. If you have questions or feedback, we’d
          love to hear from you.
        </p>
      </div>
      <div className="mt-10 animate-fade-up animation-delay-200">
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-[var(--foreground)] text-[var(--cream)] font-medium rounded-lg hover:opacity-90 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
