import { Bounded } from "../../Bounded";
import { ButtonLink } from "../../ButtonLink";
import { Heading } from "../../Heading";
import { TallLogo } from "../../Icons/TallLogo";
import { WideLogo } from "../../Icons/WideLogo";
import { InteractiveSkateboard } from "./InteractiveSkateboard";

export const Hero = () => {
  return (
    <Bounded className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture">
      <div className="absolute inset-0 flex items-center pt-20">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>

      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 py-[clamp(2.5rem,5vw,4rem)]">
        <Heading size="xl" className="relative place-self-start leading-none">
          Escape the
          <br />
          Cul-de-sac
        </Heading>

        <div className="flex relative w-full flex-col items-center justify-between gap-[clamp(0.5rem,3vw,1rem)] lg:flex-row">
          <div className="max-w-[45ch] font-semibold text-[clamp(1.125rem,2vw+0.25rem,1.25rem)]">
            {
              "Not just a board, your board. Design a board that's as real as the places you take it."
            }
          </div>

          <ButtonLink
            href="#"
            icon="skateboard"
            size="lg"
            className="z-20 mt-2 block"
          >
            Build your board
          </ButtonLink>
        </div>
      </div>

      <InteractiveSkateboard />
    </Bounded>
  );
};
