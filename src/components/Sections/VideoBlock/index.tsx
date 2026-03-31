import { Bounded } from "@/components/Bounded";
import { LazyYouTubePlayer } from "./LazyYouTubePlayer";
import clsx from "clsx";
import Image from "next/image";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

const VIDEO_BLOCK_ID = "44I29krtxaw";

export const VideoBlock = () => (
  <Bounded className="relative z-20 bg-texture bg-zinc-900">
    <h2 className="sr-only">Video Reel</h2>
    <div className="relative aspect-video">
      <div
        className={clsx(
          MASK_CLASSES,
          "absolute inset-0 bg-brand-lime translate-x-4 translate-y-4 md:translate-x-5 md:translate-y-5",
        )}
      />
      <div
        className={clsx(
          MASK_CLASSES,
          "absolute inset-0 bg-white -translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3",
        )}
      />
      <div
        className={clsx(
          MASK_CLASSES,
          "absolute inset-0 bg-white translate-x-2 -translate-y-2 md:translate-x-3 md:-translate-y-3",
        )}
      />
      <div
        className={clsx(
          MASK_CLASSES,
          "absolute inset-0 bg-white -translate-x-2 translate-y-2 md:-translate-x-3 md:translate-y-3",
        )}
      />

      <div className={clsx(MASK_CLASSES, "relative h-full")}>
        <LazyYouTubePlayer youTubeID={VIDEO_BLOCK_ID} />

        <Image
          src="/image-texture.png"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-50"
        />
      </div>
    </div>
  </Bounded>
);
