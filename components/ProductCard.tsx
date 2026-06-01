"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square bg-cream-dark overflow-hidden">
          <Image
            src={product.images[0] || "/assets/images/placeholder-product.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {product.tags.includes("NEW") && (
            <span className="absolute top-3 left-3 bg-gold text-brown text-xs px-3 py-1 tracking-wider uppercase font-medium">
              New
            </span>
          )}
          {product.tags.includes("BESTSELLER") && (
            <span className="absolute top-3 right-3 bg-brown text-cream text-xs px-3 py-1 tracking-wider uppercase font-medium">
              Bestseller
            </span>
          )}
        </div>
      </Link>

      <div className="mt-4 space-y-2">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-medium tracking-wide hover:text-gold transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="text-xs text-brown-lighter tracking-wider uppercase">{product.material}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">${product.price}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="text-xs tracking-widest uppercase text-brown-lighter hover:text-gold transition-colors"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </motion.div>
  );
}
