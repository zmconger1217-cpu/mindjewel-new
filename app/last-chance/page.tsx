"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function LastChancePage() {
  return (
    <div className="min-h-screen">
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">Limited Time</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Last Chance</h1>
        <p className="text-brown-lighter max-w-lg mx-auto mb-8">
          These pieces are leaving soon. Don&apos;t miss your chance to own them.
        </p>
        <div className="bg-cream-dark max-w-md mx-auto py-16 px-8">
          <p className="text-brown-lighter mb-6">
            Check back soon — special offers and limited editions are on their way.
          </p>
          <Link href="/jewelry" className="btn-primary">
            Browse All Jewelry
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
