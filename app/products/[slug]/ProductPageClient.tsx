"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProductPageClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) return notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-xs text-brown-lighter tracking-wider">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/jewelry" className="hover:text-gold transition-colors">Jewelry</Link>
          <span>/</span>
          <span className="text-brown">{product.title}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <AnimatedSection>
            <div className="relative aspect-square bg-cream-dark mb-4">
              <Image
                src={product.images[selectedImage] || "/assets/images/placeholder-product.svg"}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 bg-cream-dark overflow-hidden transition-all duration-300 ${
                      selectedImage === i ? "ring-2 ring-gold" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection delay={0.2}>
            <div className="lg:sticky lg:top-24 space-y-6">
              {product.tags.includes("NEW") && (
                <span className="inline-block bg-gold text-brown text-xs px-3 py-1 tracking-wider uppercase font-medium">
                  New Arrival
                </span>
              )}

              <div>
                <h1 className="text-3xl md:text-4xl font-serif">{product.title}</h1>
                <p className="text-brown-lighter mt-1 tracking-wide">{product.subtitle}</p>
              </div>

              <p className="text-2xl font-serif">${product.price}</p>

              <p className="text-brown-light leading-relaxed">{product.description}</p>

              {/* Material & Color */}
              <div className="space-y-3 py-4 border-y border-brown/10">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-brown-lighter w-24">Material</span>
                  <span className="text-sm">{product.material}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-brown-lighter w-24">Color</span>
                  <span className="text-sm">{product.color}</span>
                </div>
                {product.stone && (
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-brown-lighter w-24">Stone</span>
                    <span className="text-sm">{product.stone}</span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-brown-lighter mb-3">Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-gold mt-0.5">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 items-center pt-4">
                <div className="flex border border-brown/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-sm hover:bg-cream-dark transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-3 text-sm min-w-[48px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-sm hover:bg-cream-dark transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    for (let i = 0; i < quantity; i++) addItem(product);
                  }}
                  className="flex-1 btn-primary"
                >
                  Add to Bag — ${product.price * quantity}
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex gap-6 pt-4 text-xs text-brown-lighter">
                <span>✓ Free Shipping</span>
                <span>✓ Gift Wrapping</span>
                <span>✓ 30-Day Returns</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <AnimatedSection className="mt-24">
            <h2 className="text-2xl font-serif text-center mb-12">You May Also Love</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
