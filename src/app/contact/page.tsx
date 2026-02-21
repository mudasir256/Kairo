import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Kairo",
  description: "Get in touch with Kairo. We’re here to help with orders, returns and questions.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2 animate-fade-up">
        Contact Us
      </h1>
      <p className="text-[var(--muted)] mb-10 animate-fade-up animation-delay-100">
        Have a question, feedback or need help with an order? Reach out and we’ll
        get back to you as soon as we can.
      </p>

      <form
        className="space-y-6 animate-fade-up animation-delay-200"
        action="#"
        method="post"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--foreground)] mb-1"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
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
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[var(--foreground)] mb-1"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
          >
            <option value="order">Order / shipping</option>
            <option value="return">Returns / exchanges</option>
            <option value="product">Product question</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--foreground)] mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent resize-y"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-[var(--foreground)] text-[var(--cream)] font-medium rounded-lg hover:opacity-90 transition"
        >
          Send message
        </button>
      </form>

      <div className="mt-12 pt-8 border-t border-[var(--border)] animate-fade-up">
        <p className="text-sm text-[var(--muted)]">
          We aim to respond within 24–48 hours on business days. For urgent
          order-related issues, include your order number in the message.
        </p>
      </div>
    </div>
  );
}
