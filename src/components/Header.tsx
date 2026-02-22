"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { navCategories } from "@/data/categories";
import { assets } from "@/data/assets";
import { useState } from "react";

export function Header() {
  const { itemCount, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNavId, setOpenNavId] = useState<string | null>(null);
  const [openMobileSubId, setOpenMobileSubId] = useState<string | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top bar */}
        <div className="hidden sm:flex items-center justify-center py-2 text-sm text-[var(--muted)] bg-[var(--cream)] animate-fade-down">
          <span>Free shipping on orders above Rs. 2,500</span>
        </div>

        <div className="flex items-center justify-between h-16 md:h-20 animate-fade-down animation-delay-100">
          <button
            type="button"
            className="md:hidden p-2 -ml-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navCategories.map((cat) => (
              <div
                key={cat.id}
                className="relative group"
                onMouseEnter={() => setOpenNavId(cat.id)}
                onMouseLeave={() => setOpenNavId(null)}
              >
                <Link
                  href={`/${cat.slug}`}
                  className="text-[15px] font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition"
                >
                  {cat.name}
                </Link>
                {openNavId === cat.id && (
                  <div className="absolute left-0 top-full pt-1 animate-scale-in">
                    <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg py-3 min-w-[200px]">
                      {cat.children.map((child) => (
                        <Link
                          key={child.slug}
                          href={`/${child.slug}`}
                          className="block px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--cream)] hover:text-[var(--accent)]"
                          onClick={() => setOpenNavId(null)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center transition-transform duration-300 hover:scale-105"
            aria-label="Kairo home"
          >
            <Image
              src={assets.logo}
              alt="Kairo"
              width={140}
              height={48}
              className="h-10 w-auto md:h-12 object-contain"
              priority
              unoptimized
            />
          </Link>

          <div className="flex items-center gap-3 hidden md:flex">
            <Link
              href="/login"
              className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/search"
              className="p-2 rounded-full hover:bg-[var(--cream)] transition-colors duration-200"
              aria-label="Search"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
            <button
              type="button"
              className="relative p-2 rounded-full hover:bg-[var(--cream)] transition-colors duration-200"
              onClick={openCart}
              aria-label="Cart"
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[var(--accent)] text-white text-[10px] font-semibold flex items-center justify-center">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </button>
          </div>
          {/* Mobile: profile icon with dropdown (Login / Logout) */}
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setProfileOpen((o) => !o)}
              className="p-2 rounded-full hover:bg-[var(--cream)] transition-colors duration-200"
              aria-label="Account"
              aria-expanded={profileOpen}
              aria-haspopup="true"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            {profileOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  aria-hidden
                  onClick={() => setProfileOpen(false)}
                />
                <div className="absolute right-0 top-full mt-1 z-50 w-48 py-1 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg animate-scale-in">
                  <Link
                    href="/login"
                    className="block px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--cream)] hover:text-[var(--accent)]"
                    onClick={() => setProfileOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--cream)] hover:text-[var(--accent)]"
                    onClick={() => setProfileOpen(false)}
                  >
                    Sign up
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2.5 text-sm text-[var(--muted)] hover:bg-[var(--cream)] border-t border-[var(--border)]"
                    onClick={() => setProfileOpen(false)}
                  >
                    Logout
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu overlay - fixed so page does not move */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 top-16 left-0 right-0 bottom-0 bg-black/40 z-40 md:hidden"
              aria-hidden
              onClick={() => setMenuOpen(false)}
            />
            <div className="fixed top-16 left-0 right-0 z-50 md:hidden max-h-[70vh] overflow-y-auto bg-[var(--card)] border-b border-[var(--border)] shadow-lg animate-fade-down">
              <nav className="py-4 px-4 space-y-1">
              {navCategories.map((cat) => {
                const isSubOpen = openMobileSubId === cat.id;
                const hasChildren = cat.children.length > 0;
                return (
                  <div key={cat.id}>
                    {hasChildren ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setOpenMobileSubId((id) => (id === cat.id ? null : cat.id))}
                          className="flex items-center justify-between w-full py-2 font-medium text-left"
                          aria-expanded={isSubOpen}
                          aria-controls={`mobile-sub-${cat.id}`}
                          id={`mobile-cat-${cat.id}`}
                        >
                          {cat.name}
                          <svg
                            className={`w-5 h-5 text-[var(--muted)] transition-transform ${isSubOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div
                          id={`mobile-sub-${cat.id}`}
                          role="region"
                          aria-labelledby={`mobile-cat-${cat.id}`}
                          className={`grid transition-[grid-template-rows] duration-200 ease-out ${isSubOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                        >
                          <div className="overflow-hidden">
                            <div className="pl-4 space-y-1 pt-1 pb-2">
                              {cat.children.map((child) => (
                                <Link
                                  key={child.slug}
                                  href={`/${child.slug}`}
                                  className="block py-1.5 text-sm text-[var(--muted)] hover:text-[var(--accent)]"
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={`/${cat.slug}`}
                        className="block py-2 font-medium"
                        onClick={() => setMenuOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    )}
                  </div>
                );
              })}
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
