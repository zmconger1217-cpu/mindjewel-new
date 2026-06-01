"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">Our Story</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">About MINDJEWEL</h1>
      </AnimatedSection>

      <section className="max-w-7xl mx-auto px-4 pb-24">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3]">
              <Image
                src="/assets/images/boutique-interior.webp"
                alt="MINDJEWEL boutique"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6">Born from a Belief</h2>
              <div className="space-y-4 text-brown-lighter leading-relaxed">
                <p>
                  MINDJEWEL was founded on a simple truth: every woman carries a goddess within. 
                  Not a perfect, untouchable ideal — but a living, breathing power that evolves 
                  with every chapter of life.
                </p>
                <p>
                  We create jewelry that honors this inner divinity. Each collection is inspired 
                  by a different goddess archetype — the wild courage of Artemis, the calm wisdom 
                  of Athena, the warm devotion of Hestia, the transformative depth of Persephone, 
                  and the magnetic beauty of Venus.
                </p>
                <p>
                  Our pieces are designed to be worn every day, not just on special occasions. 
                  Because every day you choose to be yourself is a special occasion.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="bg-cream-dark py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-serif text-gold mb-3">✦</div>
                <h3 className="text-sm font-medium tracking-wide mb-2">Authenticity</h3>
                <p className="text-sm text-brown-lighter">
                  Real jewelry for real women. No pretense, no filters — just beauty that feels like you.
                </p>
              </div>
              <div>
                <div className="text-4xl font-serif text-gold mb-3">✦</div>
                <h3 className="text-sm font-medium tracking-wide mb-2">Craftsmanship</h3>
                <p className="text-sm text-brown-lighter">
                  Every piece is hand-finished by skilled artisans who care as much as we do.
                </p>
              </div>
              <div>
                <div className="text-4xl font-serif text-gold mb-3">✦</div>
                <h3 className="text-sm font-medium tracking-wide mb-2">Sustainability</h3>
                <p className="text-sm text-brown-lighter">
                  Beautiful jewelry shouldn&apos;t cost the earth. We&apos;re committed to ethical practices.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
