import { Hero } from "@/components/Sections/Hero";
import { ProductGrid } from "@/components/Sections/ProductGrid";
import { TextAndImageSections } from "@/components/Sections/TextAndImage";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <TextAndImageSections />
    </>
  );
}
