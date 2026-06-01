export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  goddess: string;
  price: number;
  material: string;
  color: string;
  description: string;
  details: string[];
  images: string[];
  tags: string[];
  createdAt: string;
  inStock: boolean;
  stone?: string;
}

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Goddess = "artemis" | "athena" | "hestia" | "persephone" | "venus";

export const GODESS_INFO: Record<Goddess, { name: string; tagline: string; description: string }> = {
  artemis: {
    name: "Artemis",
    tagline: "The Huntress",
    description: "Bold, untamed, and free. The Artemis collection celebrates the wild spirit within every woman — courageous, independent, and connected to nature.",
  },
  athena: {
    name: "Athena",
    tagline: "The Strategist",
    description: "Calm, wise, and decisive. Athena pieces are designed for the woman who leads with intellect — minimalist, powerful, and timeless.",
  },
  hestia: {
    name: "Hestia",
    tagline: "The Keeper",
    description: "Warm, grounded, and nurturing. Hestia jewelry honors the sacred center — the home, the hearth, and the comfort of belonging.",
  },
  persephone: {
    name: "Persephone",
    tagline: "The Transformer",
    description: "Dark, beautiful, and transformative. Persephone pieces embrace duality — light and shadow, innocence and power, growth through adversity.",
  },
  venus: {
    name: "Venus",
    tagline: "The Lover",
    description: "Romantic, radiant, and magnetic. Venus jewelry captures the beauty of love — in every form, every shade, and every stage of life.",
  },
};

export const CATEGORIES = ["rings", "necklaces", "earrings", "bracelets", "sets", "best sellers"] as const;
export type Category = typeof CATEGORIES[number];
