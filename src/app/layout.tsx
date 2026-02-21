import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { BottomTab } from "@/components/BottomTab";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kairo – Cozy Fashion for Everyone",
  description:
    "Men's, women's & kids clothing, shoes, belts, caps, bags and more. Free shipping on orders above Rs. 2,500.",
  icons: {
    icon: "/kairo/logokairo.png",
    apple: "/kairo/logokairo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <CartProvider>
          <Header />
          <main className="flex-1 pb-14 md:pb-0">{children}</main>
          <Footer />
          <BottomTab />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
