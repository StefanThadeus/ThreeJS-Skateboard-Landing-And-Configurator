import clsx from "clsx";
import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { SlideIn } from "@/components/SlideIn";
import { ParallaxImage } from "./ParallaxImage";

export type TextAndImageData = {
  theme: "LightBlue" | "Red" | "DarkBlue" | "Yellow";
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  isImageOnLeft: boolean;
  foregroundImage: string;
  backgroundImage: string;
};

type TextAndImageSectionProps = {
  data: TextAndImageData;
  index: number;
  isLast?: boolean;
};

export function TextAndImageSection({
  data,
  index,
  isLast = false,
}: TextAndImageSectionProps) {
  const {
    theme,
    title,
    description,
    buttonText,
    buttonLink,
    isImageOnLeft,
    foregroundImage,
    backgroundImage,
  } = data;

  return (
    <Bounded
      className={clsx(
        "relative",
        !isLast && "sticky",
        theme === "LightBlue" && "bg-texture bg-brand-blue text-white",
        theme === "Red" && "bg-texture bg-brand-orange text-white",
        theme === "DarkBlue" && "bg-texture bg-brand-navy text-white",
        theme === "Yellow" && "bg-texture bg-brand-lime text-zinc-800",
      )}
      style={{
        zIndex: index + 1,
        ...(!isLast ? { top: `${index * 2}rem` } : {}),
      }}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            isImageOnLeft && "md:order-2",
          )}
        >
          <SlideIn>
            <Heading size="xl" as="h2" className="leading-none">
              {title}
            </Heading>
          </SlideIn>
          <SlideIn>
            <div className="max-w-md text-lg leading-relaxed">{description}</div>
          </SlideIn>
          <SlideIn>
            <ButtonLink href={buttonLink} color={theme === "Yellow" ? "orange" : "lime"}>
              {buttonText}
            </ButtonLink>
          </SlideIn>
        </div>

        <ParallaxImage
          foregroundImage={foregroundImage}
          backgroundImage={backgroundImage}
        />
      </div>
    </Bounded>
  );
}
