"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const materials = [
  { name: "Sterling Silver", description: "925 pure silver, hypoallergenic and timeless" },
  { name: "14K Rose Gold Vermeil", description: "Thick 14K gold layer over sterling silver" },
  { name: "18K Gold Vermeil", description: "Rich gold plating for everyday luxury" },
  { name: "Rhodium-Plated Silver", description: "Brilliant white finish, scratch-resistant" },
  { name: "Black Rhodium", description: "Dark, dramatic coating for bold pieces" },
];

export default function TrustPage() {
  return (
    <div className="min-h-screen">
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">Our Commitment</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Trust</h1>
      </AnimatedSection>

      {/* Materials */}
      <section id="materials" className="max-w-7xl mx-auto px-4 pb-24">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="/assets/images/craftsmanship-detail.webp"
                alt="Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6">Finest Materials</h2>
              <p className="text-brown-lighter leading-relaxed mb-8">
                Every MINDJEWEL piece is crafted from premium materials chosen for their 
                beauty, durability, and ethical sourcing.
              </p>
              <div className="space-y-4">
                {materials.map((m) => (
                  <div key={m.name} className="border-b border-brown/10 pb-4">
                    <h3 className="text-sm font-medium tracking-wide">{m.name}</h3>
                    <p className="text-sm text-brown-lighter mt-1">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="bg-cream-dark py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif mb-6">Sustainability</h2>
            <p className="text-brown-lighter leading-relaxed mb-8">
              We believe luxury and responsibility can coexist. MINDJEWEL is committed to 
              sustainable practices at every step — from sourcing to packaging.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-sm font-medium tracking-wide mb-2">Ethical Sourcing</h3>
                <p className="text-sm text-brown-lighter">
                  All materials are responsibly sourced from certified suppliers who share our values.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium tracking-wide mb-2">Eco Packaging</h3>
                <p className="text-sm text-brown-lighter">
                  Recyclable boxes, biodegradable pouches, and zero plastic in every shipment.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium tracking-wide mb-2">Built to Last</h3>
                <p className="text-sm text-brown-lighter">
                  Quality craftsmanship means pieces that last a lifetime, not a season.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Care */}
      <section id="care" className="max-w-3xl mx-auto px-4 py-24">
        <AnimatedSection>
          <h2 className="text-3xl font-serif text-center mb-8">Jewelry Care</h2>
          <div className="space-y-6 text-brown-lighter leading-relaxed">
            <div>
              <h3 className="text-sm font-medium text-brown tracking-wide mb-2">Daily Care</h3>
              <p className="text-sm">
                Put jewelry on last, after perfume and skincare. Remove before swimming, 
                exercising, or sleeping.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-brown tracking-wide mb-2">Cleaning</h3>
              <p className="text-sm">
                Gently wipe with a soft cloth after each wear. For deeper cleaning, use warm 
                water and mild soap — avoid harsh chemicals.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-brown tracking-wide mb-2">Storage</h3>
              <p className="text-sm">
                Store each piece separately in the provided pouch to prevent scratching. 
                Keep away from direct sunlight and moisture.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-brown tracking-wide mb-2">Professional Maintenance</h3>
              <p className="text-sm">
                We offer complimentary re-plating and polishing for vermeil pieces within 
                the first year. Contact us for details.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-brown text-cream py-24 px-4 text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-serif mb-4">Questions? We&apos;re Here</h2>
          <p className="text-cream/60 mb-8 max-w-md mx-auto">
            Our team is ready to help with sizing, care, or anything else.
          </p>
          <a href="/contact" className="btn-gold">
            Contact Us
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}
