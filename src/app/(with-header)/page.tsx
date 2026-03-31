import { Hero } from "@/components/Sections/Hero";
import { ProductGrid } from "@/components/Sections/ProductGrid";
import { TextAndImageSections } from "@/components/Sections/TextAndImage";
import { VideoBlock } from "@/components/Sections/VideoBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <TextAndImageSections />
      <VideoBlock />
    </>
  );
}
