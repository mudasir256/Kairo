"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString()}`;
}

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    itemCount,
    total,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={closeCart}
        aria-hidden
      />
      <div
        className={`fixed right-0 top-0 bottom-0 w-full max-w-md bg-[var(--card)] shadow-xl z-50 flex flex-col transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          <h2 className="font-serif text-xl font-semibold">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-[var(--cream)]"
            aria-label="Close cart"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-[var(--muted)] text-center py-12">
              Your cart is empty.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.size ?? ""}`}
                  className="flex gap-3 border-b border-[var(--border)] pb-4"
                >
                  <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-[var(--cream)] shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm line-clamp-2">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-[var(--muted)] mt-0.5">
                      {item.product.color}
                      {item.size && ` · ${item.size}`}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            Math.max(0, item.quantity - 1)
                          )
                        }
                        className="w-7 h-7 rounded border border-[var(--border)] flex items-center justify-center text-sm hover:bg-[var(--cream)]"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded border border-[var(--border)] flex items-center justify-center text-sm hover:bg-[var(--cream)]"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-2 text-xs text-[var(--muted)] hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 && (
          <div className="p-4 border-t border-[var(--border)] bg-[var(--cream)]">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full py-3 text-center font-medium bg-[var(--foreground)] text-[var(--cream)] rounded-lg hover:opacity-90 transition"
            >
              Check out
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
