"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const selfGifts = products.filter((p) => p.price <= 200).slice(0, 8);
const giftsForHer = products.filter((p) => p.tags.includes("BESTSELLER")).slice(0, 8);

export default function GiftsPage() {
  return (
    <div className="min-h-screen">
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">The Art of Giving</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Gifts</h1>
        <p className="text-brown-lighter max-w-lg mx-auto">
          Whether for yourself or someone special, find the perfect piece
        </p>
      </AnimatedSection>

      {/* Self Gifts */}
      <section id="self" className="max-w-7xl mx-auto px-4 pb-24">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="relative aspect-[4/3]">
              <Image
                src="/assets/images/product-box.webp"
                alt="Self gift"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-4">Treat Yourself</h2>
              <p className="text-brown-lighter leading-relaxed mb-6">
                You deserve something beautiful. These pieces are perfect for celebrating 
                your own milestones, big and small.
              </p>
              <a href="#self-products" className="btn-outline">
                Shop Self Gifts
              </a>
            </div>
          </div>
        </AnimatedSection>

        <div id="self-products" className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {selfGifts.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Gifts for Her */}
      <section id="for-her" className="max-w-7xl mx-auto px-4 pb-24 bg-cream-dark py-16">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif mb-4">Gifts for Her</h2>
              <p className="text-brown-lighter leading-relaxed mb-6">
                Show her she&apos;s extraordinary. Our best-selling pieces make unforgettable gifts 
                for birthdays, anniversaries, or just because.
              </p>
              <a href="#her-products" className="btn-primary">
                Shop Gifts for Her
              </a>
            </div>
            <div className="relative aspect-[4/3] order-1 md:order-2">
              <Image
                src="/assets/images/product-box.webp"
                alt="Gifts for her"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        <div id="her-products" className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {giftsForHer.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
