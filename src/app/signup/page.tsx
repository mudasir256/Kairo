import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign up – Kairo",
  description: "Create your Kairo account for faster checkout and order tracking.",
};

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2 animate-fade-up">
        Create an account
      </h1>
      <p className="text-[var(--muted)] mb-8 animate-fade-up animation-delay-100">
        Sign up for faster checkout, order tracking and early access to new drops.
      </p>

      <form
        className="space-y-5 animate-fade-up animation-delay-200"
        action="#"
        method="post"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--foreground)] mb-1"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--foreground)] mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[var(--foreground)] mb-1"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="new-password"
            minLength={8}
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
            placeholder="At least 8 characters"
          />
          <p className="mt-1 text-xs text-[var(--muted)]">
            Must be at least 8 characters.
          </p>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[var(--foreground)] text-[var(--cream)] font-medium rounded-lg hover:opacity-90 transition-colors duration-200"
        >
          Create account
        </button>
      </form>

      <p className="mt-8 text-center text-[var(--muted)] text-sm animate-fade-up">
        Already have an account?{" "}
        <Link href="/login" className="text-[var(--accent)] font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
