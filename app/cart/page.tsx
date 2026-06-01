"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import AnimatedSection from "@/components/AnimatedSection";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <AnimatedSection className="text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-3xl font-serif mb-4">Your Bag is Empty</h1>
          <p className="text-brown-lighter mb-8 max-w-md mx-auto">
            Looks like you haven&apos;t found your perfect piece yet. Let us help you discover it.
          </p>
          <Link href="/jewelry" className="btn-primary">
            Shop All Jewelry
          </Link>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <AnimatedSection className="py-16 lg:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif">Your Bag</h1>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto px-4 pb-24">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.product.slug}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex gap-6 py-6 border-b border-brown/10"
            >
              {/* Image */}
              <div className="relative w-24 h-24 bg-cream-dark flex-shrink-0">
                <Image
                  src={item.product.images[0] || "/assets/images/placeholder-product.svg"}
                  alt={item.product.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <Link
                      href={`/products/${item.product.slug}`}
                      className="text-sm font-medium hover:text-gold transition-colors"
                    >
                      {item.product.title}
                    </Link>
                    <p className="text-xs text-brown-lighter mt-0.5">{item.product.material}</p>
                  </div>
                  <p className="text-sm font-medium">${item.product.price * item.quantity}</p>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex border border-brown/15">
                    <button
                      onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                      className="px-3 py-1 text-sm hover:bg-cream-dark transition-colors"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 text-sm min-w-[36px] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                      className="px-3 py-1 text-sm hover:bg-cream-dark transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.slug)}
                    className="text-xs text-brown-lighter hover:text-gold transition-colors tracking-wider uppercase"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Summary */}
        <div className="mt-8 pt-8 border-t border-brown/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-brown-lighter">Subtotal</span>
            <span className="text-sm">${totalPrice}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-brown-lighter">Shipping</span>
            <span className="text-sm text-gold">Free</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-brown/10">
            <span className="text-lg font-serif">Total</span>
            <span className="text-lg font-serif">${totalPrice}</span>
          </div>

          <div className="mt-8 space-y-3">
            <button className="btn-primary w-full">
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="btn-outline w-full"
            >
              Clear Bag
            </button>
          </div>

          <p className="text-center text-xs text-brown-lighter mt-4">
            ✓ Free shipping on all orders &nbsp;·&nbsp; ✓ 30-day returns &nbsp;·&nbsp; ✓ Gift wrapping available
          </p>
        </div>
      </div>
    </div>
  );
}
