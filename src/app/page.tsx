import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import {
  getFeaturedProducts,
  getNewProducts,
  getProductsByCategory,
} from "@/data/products";
import { navCategories } from "@/data/categories";
import { assets } from "@/data/assets";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newProducts = getNewProducts();
  const shoes = getProductsByCategory("shoes").slice(0, 5);
  const bags = getProductsByCategory("bags").slice(0, 5);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={assets.hero}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[var(--foreground)]/40" />
        <div className="relative z-10 text-center px-4 text-[var(--cream)]">
          <h1 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight animate-fade-up">
            Cozy, always
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-md mx-auto opacity-90 animate-fade-up animation-delay-200">
            Spring with side effects — new arrivals for everyone.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center animate-fade-up animation-delay-400">
            <Link
              href="/women"
              className="px-6 py-3 bg-[var(--cream)] text-[var(--foreground)] font-medium rounded-full hover:bg-white transition-all duration-300 hover:scale-105"
            >
              Shop Woman
            </Link>
            <Link
              href="/men"
              className="px-6 py-3 border-2 border-[var(--cream)] text-[var(--cream)] font-medium rounded-full hover:bg-[var(--cream)] hover:text-[var(--foreground)] transition-all duration-300 hover:scale-105"
            >
              Shop Man
            </Link>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="bg-[var(--accent)] text-[var(--cream)] text-center py-3 text-sm font-medium animate-fade-in">
        Free shipping on orders above Rs. 2,500
      </div>

      {/* New */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8 animate-fade-up">
          <h2 className="font-serif text-3xl font-semibold">New</h2>
          <Link
            href="/women?filter=new"
            className="text-sm font-medium text-[var(--accent)] hover:underline transition-opacity duration-200 hover:opacity-80"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {newProducts.slice(0, 5).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Shoes */}
      <section className="bg-[var(--cream)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold mb-2 animate-fade-up">Shoes</h2>
          <p className="text-[var(--muted)] mb-8 animate-fade-up animation-delay-100">Shop woman · Shop man</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {shoes.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/shoes"
              className="inline-block font-medium text-[var(--accent)] hover:underline"
            >
              View all shoes
            </Link>
          </div>
        </div>
      </section>

      {/* Sale / End of season - use asset banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-serif text-3xl font-semibold mb-8 text-center animate-fade-up">
          End of season
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/women"
            className="relative block aspect-[2/3] rounded-2xl overflow-hidden bg-[var(--cream)] group animate-fade-up animation-delay-100"
          >
            <Image
              src={assets.saleBanner1}
              alt="Sale – Woman"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="absolute bottom-4 left-4 right-4 py-2 text-center bg-[var(--foreground)]/80 text-[var(--cream)] font-medium rounded-lg transition-opacity duration-200 group-hover:opacity-90">
              Shop Woman
            </span>
          </Link>
          <Link
            href="/men"
            className="relative block aspect-[2/3] rounded-2xl overflow-hidden bg-[var(--cream)] group animate-fade-up animation-delay-200"
          >
            <Image
              src={assets.saleBanner2}
              alt="Sale – Man"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <span className="absolute bottom-4 left-4 right-4 py-2 text-center bg-[var(--foreground)]/80 text-[var(--cream)] font-medium rounded-lg transition-opacity duration-200 group-hover:opacity-90">
              Shop Man
            </span>
          </Link>
        </div>
      </section>

      {/* Categories strip */}
      <section className="py-12 border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 animate-fade-up">
            {navCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/${cat.slug}`}
                className="font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bags */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-serif text-3xl font-semibold mb-2 animate-fade-up">Bags</h2>
        <p className="text-[var(--muted)] mb-8 animate-fade-up animation-delay-100">Fresh off the rack</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {bags.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/bags"
            className="inline-block font-medium text-[var(--accent)] hover:underline"
          >
            View all bags
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--foreground)] text-[var(--cream)] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-semibold animate-fade-up">
            Sign up and save
          </h2>
          <p className="mt-2 text-[var(--muted)] animate-fade-up animation-delay-100">
            Get early access to new drops and exclusive offers.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto animate-fade-up animation-delay-200">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-[var(--cream)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-soft)] transition-shadow duration-200"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:opacity-90 transition-all duration-200 hover:scale-[1.02]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
