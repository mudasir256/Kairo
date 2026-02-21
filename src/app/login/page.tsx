import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login – Kairo",
  description: "Sign in to your Kairo account.",
};

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2 animate-fade-up">
        Welcome back
      </h1>
      <p className="text-[var(--muted)] mb-8 animate-fade-up animation-delay-100">
        Sign in to your account to track orders and save your favourites.
      </p>

      <form
        className="space-y-5 animate-fade-up animation-delay-200"
        action="#"
        method="post"
      >
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
          <div className="flex items-center justify-between mb-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[var(--foreground)]"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-[var(--accent)] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[var(--foreground)] text-[var(--cream)] font-medium rounded-lg hover:opacity-90 transition-colors duration-200"
        >
          Sign in
        </button>
      </form>

      <p className="mt-8 text-center text-[var(--muted)] text-sm animate-fade-up">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-[var(--accent)] font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
