"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { GODESS_INFO, type Goddess } from "@/lib/types";

const goddesses: Goddess[] = ["artemis", "athena", "hestia", "persephone", "venus"];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">The Divine Five</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Collections</h1>
        <p className="text-brown-lighter max-w-lg mx-auto">
          Five goddesses, five stories, five ways to express your inner power
        </p>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-24">
        {goddesses.map((g, i) => (
          <AnimatedSection key={g}>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center ${
              i % 2 === 1 ? "md:direction-rtl" : ""
            }`}>
              <div className={`relative aspect-[3/4] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={`/assets/images/collection-${g}.webp`}
                  alt={GODESS_INFO[g].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={`${i % 2 === 1 ? "md:order-1" : ""} flex flex-col justify-center`}>
                <p className="text-sm tracking-[0.3em] uppercase text-gold mb-2">
                  {GODESS_INFO[g].tagline}
                </p>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">{GODESS_INFO[g].name}</h2>
                <p className="text-brown-lighter leading-relaxed mb-8 max-w-md">
                  {GODESS_INFO[g].description}
                </p>
                <Link href={`/collections/${g}`} className="btn-primary self-start">
                  Explore {GODESS_INFO[g].name}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
