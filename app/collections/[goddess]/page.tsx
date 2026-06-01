import CollectionPageClient from "./CollectionPageClient";

export function generateStaticParams() {
  return [
    { goddess: "artemis" },
    { goddess: "athena" },
    { goddess: "hestia" },
    { goddess: "persephone" },
    { goddess: "venus" },
  ];
}

export default function CollectionPage({ params }: { params: Promise<{ goddess: string }> }) {
  return <CollectionPageClient params={params} />;
}
