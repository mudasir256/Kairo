import Link from "next/link";
import Image from "next/image";
import { assets } from "@/data/assets";

const footerLinks = {
  shop: [
    { label: "Woman", href: "/women" },
    { label: "Man", href: "/men" },
    { label: "Kids", href: "/kids" },
    { label: "Shoes", href: "/shoes" },
    { label: "Accessories", href: "/accessories" },
  ],
  help: [
    { label: "About Us", href: "/about" },
    { label: "FAQs", href: "/faqs" },
    { label: "Returns / Exchanges", href: "/returns" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--cream)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="animate-fade-up">
            <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
              <Image
                src={assets.logo}
                alt="Kairo"
                width={120}
                height={42}
                className="h-9 w-auto object-contain brightness-0 invert opacity-90"
                unoptimized
              />
            </Link>
            <p className="mt-4 text-sm text-[var(--muted)] max-w-xs">
              Cozy fashion for everyone. Quality clothing, shoes and accessories
              for men, women and kids.
            </p>
          </div>
          <div className="animate-fade-up animation-delay-100">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[var(--accent-soft)] mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--accent-soft)] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-up animation-delay-200">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-[var(--accent-soft)] mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--accent-soft)] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 animate-fade-up animation-delay-300">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Kairo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--accent-soft)] transition-colors duration-200"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--accent-soft)] transition-colors duration-200"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
