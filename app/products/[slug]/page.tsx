import { products } from "@/data/products";
import ProductPageClient from "./ProductPageClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ProductPageClient params={params} />;
}
