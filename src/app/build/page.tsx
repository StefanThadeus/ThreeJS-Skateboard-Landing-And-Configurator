import { Suspense } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { Logo } from "@/components/Icons/Logo";
import { CustomizerControlsProvider } from "./context";
import Controls from "./Controls";
import Loading from "./Loading";
import Preview from "./Preview";
import {
  ColorKey,
  COLORS,
  DECK_TEXTURES,
  DeckTextureKey,
  WHEEL_TEXTURES,
  WheelTextureKey,
} from "@/components/Models/Skateboard/constants";

interface PageProps {
  searchParams: Promise<{
    wheel?: string;
    deck?: string;
    truck?: string;
    bolt?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { wheel, deck, truck, bolt } = await searchParams;

  const safeWheel =
    wheel && wheel in WHEEL_TEXTURES ? (wheel as WheelTextureKey) : "green";

  const safeDeck =
    deck && deck in DECK_TEXTURES ? (deck as DeckTextureKey) : "greenAndNavy";

  const safeTruck = truck && truck in COLORS ? (truck as ColorKey) : "asphalt";

  const safeBolt = bolt && bolt in COLORS ? (bolt as ColorKey) : "asphalt";

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Suspense>
        <CustomizerControlsProvider
          defaultWheel={safeWheel}
          defaultDeck={safeDeck}
          defaultTruck={safeTruck}
          defaultBolt={safeBolt}
        >
          <div className="relative aspect-square shrink-0 bg-[#3a414a] lg:aspect-auto lg:grow">
            <div className="absolute inset-0">
              <Preview />
            </div>

            <Link href="/" className="absolute left-6 top-6">
              <Logo className="h-12 text-white" />
            </Link>
          </div>
          <div className="grow bg-texture bg-zinc-900 text-white p-[clamp(1rem,2vw,1.5rem)] lg:w-96 lg:shrink-0 lg:grow-0">
            <Heading size="sm" className="mb-6 mt-0">
              Build your board
            </Heading>
            <Controls className="mb-6" />
            <ButtonLink href="" color="lime" icon="plus">
              Add to cart
            </ButtonLink>
          </div>
        </CustomizerControlsProvider>

        <Loading />
      </Suspense>
    </div>
  );
}
