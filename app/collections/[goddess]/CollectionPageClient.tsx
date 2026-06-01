"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { GODESS_INFO, type Goddess } from "@/lib/types";

const VALID_GODDESSES: Goddess[] = ["artemis", "athena", "hestia", "persephone", "venus"];

export default function CollectionPageClient({ params }: { params: Promise<{ goddess: string }> }) {
  const { goddess } = use(params);
  
  if (!VALID_GODDESSES.includes(goddess as Goddess)) return notFound();

  const g = goddess as Goddess;
  const info = GODESS_INFO[g];
  const collectionProducts = products.filter((p) => p.goddess === g);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/assets/images/collection-${g}.webp)` }}
        />
        <div className="absolute inset-0 bg-brown/40" />
        <AnimatedSection className="relative z-10 text-center px-4">
          <p className="text-sm tracking-[0.3em] uppercase text-gold-light mb-3">{info.tagline}</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-cream">{info.name}</h1>
        </AnimatedSection>
      </div>

      {/* Description */}
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <p className="text-brown-lighter max-w-2xl mx-auto leading-relaxed text-lg">
          {info.description}
        </p>
      </AnimatedSection>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {collectionProducts.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
