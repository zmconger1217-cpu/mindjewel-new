"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import { products } from "@/data/products";

const categories = ["all", "rings", "necklaces", "earrings", "bracelets"] as const;

export default function JewelryPage() {
  const [active, setActive] = useState<string>("all");

  const filtered = active === "all"
    ? products
    : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">The Collection</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">All Jewelry</h1>
        <p className="text-brown-lighter max-w-lg mx-auto">
          {products.length} pieces crafted to reflect the goddess within
        </p>
      </AnimatedSection>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm tracking-widest uppercase transition-all duration-300 ${
                active === cat
                  ? "bg-brown text-cream"
                  : "bg-transparent text-brown-lighter border border-brown/20 hover:border-brown"
              }`}
            >
              {cat === "all" ? "All" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
        {filtered.length === 0 && (
          <p className="text-center text-brown-lighter py-16">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}
