import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { Logo } from "@/components/Icons/Logo";
import Link from "next/link";
import { CustomizerControlsProvider } from "./context";
import Controls from "./Controls";
import Loading from "./Loading";
import Preview from "./Preview";

export default async function Page() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <CustomizerControlsProvider
        defaultDeck="greenAndNavy"
        defaultWheel="green"
        defaultBolt="asphalt"
        defaultTruck="asphalt"
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
    </div>
  );
}
