"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const moods = [
  { label: "Minimalist", description: "Clean lines, subtle sparkle", image: "/assets/images/athena-minimal-band.webp", href: "/jewelry?goddess=athena" },
  { label: "Bold & Dark", description: "Dramatic, mysterious pieces", image: "/assets/images/noir-hoop-earrings.webp", href: "/jewelry?goddess=persephone" },
  { label: "Romantic", description: "Soft, warm, rose-touched", image: "/assets/images/venus-solitaire-ring.webp", href: "/jewelry?goddess=venus" },
  { label: "Earthy", description: "Organic, nature-inspired", image: "/assets/images/wildflower-ring.webp", href: "/jewelry?goddess=artemis" },
  { label: "Warm Classic", description: "Timeless gold pieces", image: "/assets/images/golden-hour-pendant.webp", href: "/jewelry?goddess=hestia" },
  { label: "Statement", description: "Bold conversation starters", image: "/assets/images/eclipse-necklace.webp", href: "/jewelry" },
];

const goddessLooks = [
  { goddess: "Artemis", style: "Stack rings with nature-inspired pieces. Mix silver textures.", image: "/assets/images/artemis-bangle.webp" },
  { goddess: "Athena", style: "Less is more. One statement piece, clean lines.", image: "/assets/images/athena-bangle.webp" },
  { goddess: "Hestia", style: "Warm gold layers. Everyday comfort meets elegance.", image: "/assets/images/hearth-cuff-bracelet.webp" },
  { goddess: "Persephone", style: "Mix metals. Dark stones with gold accents.", image: "/assets/images/shadow-bangle.webp" },
  { goddess: "Venus", style: "Romantic layers. Rose gold with delicate charms.", image: "/assets/images/siren-tennis-bracelet.webp" },
];

export default function GetInspiredPage() {
  return (
    <div className="min-h-screen">
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-3">Your Style Guide</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Get Inspired</h1>
        <p className="text-brown-lighter max-w-lg mx-auto">
          Discover how to wear MINDJEWEL in a way that&apos;s uniquely yours
        </p>
      </AnimatedSection>

      {/* Style by Mood */}
      <section id="mood" className="max-w-7xl mx-auto px-4 pb-24">
        <AnimatedSection>
          <h2 className="text-2xl font-serif text-center mb-12">Style by Mood</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {moods.map((mood, i) => (
            <AnimatedSection key={mood.label} delay={i * 0.1}>
              <Link href={mood.href} className="group block">
                <div className="relative aspect-square overflow-hidden mb-3">
                  <Image
                    src={mood.image}
                    alt={mood.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brown/10 group-hover:bg-brown/20 transition-colors" />
                </div>
                <h3 className="font-serif text-lg">{mood.label}</h3>
                <p className="text-sm text-brown-lighter">{mood.description}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Goddess Styling */}
      <section id="goddess" className="bg-cream-dark py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-serif text-center mb-4">Goddess Styling</h2>
            <p className="text-brown-lighter text-center max-w-lg mx-auto mb-16">
              Each goddess collection has its own styling philosophy. Here&apos;s how to wear each one.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {goddessLooks.map((look, i) => (
              <AnimatedSection key={look.goddess} delay={i * 0.1}>
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={look.image}
                    alt={look.goddess}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg mb-1">{look.goddess}</h3>
                <p className="text-sm text-brown-lighter leading-relaxed">{look.style}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
