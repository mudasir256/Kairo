"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";
import { useCart } from "@/context/CartContext";

function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString()}`;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const delayClasses = [
      "",
      "animation-delay-100",
      "animation-delay-200",
      "animation-delay-300",
      "animation-delay-400",
      "animation-delay-500",
    ];
    const delayClass = delayClasses[Math.min(index, 5)] ?? "animation-delay-500";

  return (
    <article className={`group animate-fade-up ${delayClass}`}>
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[var(--cream)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {product.new && (
            <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-medium bg-[var(--foreground)] text-[var(--cream)] rounded">
              New
            </span>
          )}
        </div>
        <div className="mt-3">
          <p className="text-[var(--muted)] text-sm">{product.color}</p>
          <h3 className="font-medium text-[var(--foreground)] mt-0.5 line-clamp-2 group-hover:text-[var(--accent)] transition">
            {product.name}
          </h3>
          <p className="text-sm font-medium mt-1">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
        }}
        className="mt-2 w-full py-2 text-sm font-medium border border-[var(--border)] rounded-lg hover:bg-[var(--cream)] hover:border-[var(--accent)] transition-colors duration-200"
      >
        Add to cart
      </button>
    </article>
  );
}
