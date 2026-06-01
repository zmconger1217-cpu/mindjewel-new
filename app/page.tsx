"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import { products } from "@/data/products";
import { GODESS_INFO, type Goddess } from "@/lib/types";

const featured = products.filter((p) => p.tags.includes("BESTSELLER")).slice(0, 8);
const goddesses: Goddess[] = ["artemis", "athena", "hestia", "persephone", "venus"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/hero-jewelry.webp"
          alt="MINDJEWEL Fine Jewelry"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/30 via-brown/10 to-cream" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-cream mb-6">
            Jewelry That Reflects
            <br />
            <span className="italic">Who You Are Becoming</span>
          </h1>
          <p className="text-cream/80 text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            Light, bold, and effortlessly you. Discover pieces inspired by the goddess within.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/jewelry" className="btn-primary bg-cream text-brown hover:bg-gold hover:text-brown">
              Shop All
            </Link>
            <Link href="/collections" className="btn-outline border-cream text-cream hover:bg-cream hover:text-brown">
              Collections
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Brand Philosophy */}
      <AnimatedSection className="py-24 lg:py-32 px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">Our Philosophy</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif max-w-3xl mx-auto leading-tight mb-6">
          Every woman carries a goddess within
        </h2>
        <p className="text-brown-lighter max-w-xl mx-auto leading-relaxed">
          MINDJEWEL creates jewelry that honors the divine feminine in all its forms — 
          the wild hunter, the wise strategist, the devoted keeper, the fearless transformer, 
          and the eternal lover.
        </p>
      </AnimatedSection>

      {/* Category Links */}
      <AnimatedSection className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Rings", image: "/assets/images/category-ring.webp", href: "/jewelry?category=rings" },
            { label: "Necklaces", image: "/assets/images/category-necklace.webp", href: "/jewelry?category=necklaces" },
            { label: "Earrings", image: "/assets/images/category-earring.webp", href: "/jewelry?category=earrings" },
            { label: "Bracelets", image: "/assets/images/category-bracelet.webp", href: "/jewelry?category=bracelets" },
          ].map((cat) => (
            <Link key={cat.label} href={cat.href} className="group relative aspect-square overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brown/20 group-hover:bg-brown/30 transition-colors" />
              <span className="absolute bottom-6 left-6 text-cream text-sm tracking-widest uppercase font-medium">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      {/* Featured Products */}
      <AnimatedSection className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">Curated For You</p>
            <h2 className="text-3xl md:text-4xl font-serif">Best Sellers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {featured.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/jewelry" className="btn-outline">
              View All Jewelry
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Collections */}
      <AnimatedSection className="pb-24 px-4 bg-cream-dark">
        <div className="max-w-7xl mx-auto py-24">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">The Collections</p>
            <h2 className="text-3xl md:text-4xl font-serif">Five Goddesses, Five Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {goddesses.map((g) => (
              <Link key={g} href={`/collections/${g}`} className="group text-center">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={`/assets/images/collection-${g}.webp`}
                    alt={GODESS_INFO[g].name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-lg">{GODESS_INFO[g].name}</h3>
                <p className="text-xs text-brown-lighter tracking-wider uppercase mt-1">
                  {GODESS_INFO[g].tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Lifestyle */}
      <AnimatedSection className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square">
            <Image
              src="/assets/images/lifestyle-beach.webp"
              alt="MINDJEWEL lifestyle"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">Get Inspired</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Style That Tells Your Story
            </h2>
            <p className="text-brown-lighter leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
              From everyday stacking to statement pieces, discover how to wear MINDJEWEL 
              in a way that&apos;s uniquely yours.
            </p>
            <Link href="/get-inspired" className="btn-primary">
              Explore Styling
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
