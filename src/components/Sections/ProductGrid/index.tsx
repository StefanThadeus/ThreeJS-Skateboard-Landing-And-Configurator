import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SkateboardProduct } from "./SkateboardProduct";
import { SlideIn } from "@/components/SlideIn";
import { SKATEBOARDS } from "./constants";

export const ProductGrid = () => {
  return (
    <Bounded className="bg-texture bg-brand-gray text-zinc-800">
      <SlideIn>
        <Heading
          size="xl"
          className="text-center mb-[clamp(1rem,2vw,1.5rem)]"
          as="h2"
        >
          Latest Drop
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center mb-[clamp(1.5rem,3vw,2.5rem)]">
          Grab our freshest designs before they sell out!
        </div>
      </SlideIn>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SKATEBOARDS.map((skateboard, index) => (
          <SkateboardProduct key={index} {...skateboard} />
        ))}
      </div>
    </Bounded>
  );
};
