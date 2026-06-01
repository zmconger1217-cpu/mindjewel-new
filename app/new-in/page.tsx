"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const newProducts = products
  .filter((p) => p.tags.includes("NEW") || new Date(p.createdAt) > new Date("2026-03-01"))
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export default function NewInPage() {
  return (
    <div className="min-h-screen">
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">Just Arrived</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">New In</h1>
        <p className="text-brown-lighter max-w-lg mx-auto">
          The latest additions to the MINDJEWEL collection
        </p>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {newProducts.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
