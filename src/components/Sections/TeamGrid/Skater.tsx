import { ButtonLink } from "@/components/ButtonLink";
import { SkaterScribble } from "./SkaterScribble";
import clsx from "clsx";
import Image from "next/image";

export type SkaterProps = {
  firstName: string;
  lastName: string;
  foregroundImage: string;
  backgroundImage: string;
  link: string;
  scribbleColor:
    | "text-brand-blue"
    | "text-brand-lime"
    | "text-brand-orange"
    | "text-brand-pink"
    | "text-brand-purple";
};

export function Skater({
  firstName,
  lastName,
  foregroundImage,
  backgroundImage,
  link,
  scribbleColor,
}: SkaterProps) {
  return (
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="relative grid w-full overflow-hidden">
        <Image
          src={backgroundImage}
          width={500}
          height={500}
          alt=""
          className="col-start-1 row-start-1 h-auto w-full scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
        />
        <SkaterScribble
          className={clsx(
            "pointer-events-none absolute inset-0 z-10 h-full w-full",
            scribbleColor,
          )}
        />
        <Image
          src={foregroundImage}
          width={500}
          height={500}
          alt=""
          className="col-start-1 row-start-1 z-20 h-auto w-full transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-48 bg-gradient-to-t from-black via-transparent to-transparent" />
        <h3 className="absolute bottom-0 left-0 z-40 grid p-2 font-sans text-2xl text-brand-gray md:text-3xl">
          <span className="mb-[-.3em] block">{firstName}</span>
          <span className="block">{lastName}</span>
        </h3>
      </div>
      <ButtonLink href={link} size="sm">
        Build their board
      </ButtonLink>
    </div>
  );
}
