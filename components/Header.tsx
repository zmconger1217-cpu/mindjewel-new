"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";

const navItems = [
  {
    label: "Jewelry",
    href: "/jewelry",
    children: [
      { label: "Rings", href: "/jewelry?category=rings" },
      { label: "Necklaces", href: "/jewelry?category=necklaces" },
      { label: "Earrings", href: "/jewelry?category=earrings" },
      { label: "Bracelets", href: "/jewelry?category=bracelets" },
      { label: "Sets", href: "/jewelry?category=sets" },
      { label: "Best Sellers", href: "/jewelry?tag=BESTSELLER" },
    ],
  },
  { label: "New In", href: "/new-in" },
  {
    label: "Gifts",
    href: "/gifts",
    children: [
      { label: "Self Gifts", href: "/gifts#self" },
      { label: "Gifts for Her", href: "/gifts#for-her" },
    ],
  },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "Artemis", href: "/collections/artemis" },
      { label: "Athena", href: "/collections/athena" },
      { label: "Hestia", href: "/collections/hestia" },
      { label: "Persephone", href: "/collections/persephone" },
      { label: "Venus", href: "/collections/venus" },
    ],
  },
  { label: "Last Chance", href: "/last-chance" },
  {
    label: "Get Inspired",
    href: "/get-inspired",
    children: [
      { label: "Style by Mood", href: "/get-inspired#mood" },
      { label: "Goddess Styling", href: "/get-inspired#goddess" },
    ],
  },
  {
    label: "Trust",
    href: "/trust",
    children: [
      { label: "Brand Story", href: "/about" },
      { label: "Materials", href: "/trust#materials" },
      { label: "Sustainability", href: "/trust#sustainability" },
      { label: "Care", href: "/trust#care" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function DropdownMenu({ item }: { item: typeof navItems[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={item.href}
        className="text-sm tracking-widest uppercase hover:text-gold transition-colors py-2"
      >
        {item.label}
      </Link>
      {item.children && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-1 bg-white shadow-lg min-w-[200px] z-50"
            >
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-5 py-3 text-sm text-brown-light hover:bg-cream hover:text-gold transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-brown/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="text-xl lg:text-2xl font-serif tracking-[0.2em] text-brown">
            MINDJEWEL
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <DropdownMenu key={item.label} item={item} />
            ))}
          </nav>

          {/* Cart */}
          <Link href="/cart" className="relative p-2 -mr-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-brown text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-brown/10"
          >
            <nav className="py-4 px-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-3 text-sm tracking-widest uppercase hover:text-gold transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-brown-lighter hover:text-gold transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
