import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forgot password – Kairo",
  description: "Reset your Kairo account password.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2 animate-fade-up">
        Forgot password?
      </h1>
      <p className="text-[var(--muted)] mb-8 animate-fade-up animation-delay-100">
        Enter your email and we’ll send you a link to reset your password.
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
        <button
          type="submit"
          className="w-full py-3 bg-[var(--foreground)] text-[var(--cream)] font-medium rounded-lg hover:opacity-90 transition-colors duration-200"
        >
          Send reset link
        </button>
      </form>

      <p className="mt-8 text-center text-[var(--muted)] text-sm animate-fade-up">
        <Link href="/login" className="text-[var(--accent)] font-medium hover:underline">
          Back to sign in
        </Link>
      </p>
    </div>
  );
}
