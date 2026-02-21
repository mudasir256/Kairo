import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/data/assets";

export const metadata: Metadata = {
  title: "About Us – Kairo",
  description:
    "Learn about Kairo – cozy fashion for everyone. Meet our CEO Arsal Ali. Quality clothing, shoes and accessories for men, women and kids.",
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
      </div>

      {/* CEO section */}
      <section className="mt-12 pt-10 border-t border-[var(--border)] animate-fade-up animation-delay-200">
        <h2 className="font-serif text-2xl font-semibold text-[var(--foreground)] mb-6">
          Our CEO
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="relative w-full sm:w-56 aspect-square rounded-2xl overflow-hidden bg-[var(--cream)] shrink-0">
            <Image
              src={assets.ceo}
              alt="Arsal Ali – CEO, Kairo"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 224px"
              priority
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-[var(--foreground)]">
              Arsal Ali
            </h3>
            <p className="text-sm text-[var(--accent)] mt-0.5">Chief Executive Officer</p>
            <p className="text-[var(--muted)] leading-relaxed mt-4">
              Arsal Ali leads Kairo from Lahore, bringing a clear vision for
              accessible, quality fashion. Under his leadership, Kairo has grown
              around the idea of cozy, always — offering thoughtful clothing,
              shoes and accessories for men, women and kids.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mt-3">
              From Lahore to the rest of Pakistan, Arsal is focused on making
              everyday style easy and enjoyable for everyone.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-8 text-[var(--muted)] leading-relaxed animate-fade-up">
        Thank you for being here. If you have questions or feedback, we’d
        love to hear from you.
      </p>
      <div className="mt-10 animate-fade-up">
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
