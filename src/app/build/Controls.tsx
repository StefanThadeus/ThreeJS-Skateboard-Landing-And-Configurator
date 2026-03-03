"use client";

import { Heading } from "@/components/Heading";
import clsx from "clsx";
import { ReactNode, useEffect } from "react";
import { useCustomizerControls } from "./context";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  ColorKey,
  COLORS,
  DECK_NAMES,
  DECK_TEXTURES,
  DeckTextureKey,
  WHEEL_TEXTURES,
  WheelTextureKey,
} from "@/components/Models/Skateboard/constants";

type Props = {
  className?: string;
};

export default function Controls({ className }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    setBolt,
    setDeck,
    setTruck,
    setWheel,
    selectedBolt,
    selectedDeck,
    selectedTruck,
    selectedWheel,
  } = useCustomizerControls();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (selectedWheel) params.set("wheel", selectedWheel);
    if (selectedDeck) params.set("deck", selectedDeck);
    if (selectedTruck) params.set("truck", selectedTruck);
    if (selectedBolt) params.set("bolt", selectedBolt);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [
    selectedWheel,
    selectedDeck,
    selectedTruck,
    selectedBolt,
    pathname,
    router,
  ]);

  const toOptions = (obj: Record<string, string>) =>
    Object.entries(obj).map(([id, src]) => ({ id, src }));

  const decks = toOptions(DECK_TEXTURES);
  const wheels = toOptions(WHEEL_TEXTURES);
  const colors = toOptions(COLORS);

  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      <Options title="Deck" selectedName={DECK_NAMES[selectedDeck]}>
        {decks.map((deck) => (
          <CircleOption
            key={deck.id}
            selected={deck.id === selectedDeck}
            onClick={() => setDeck(deck.id as DeckTextureKey)}
          >
            <Image
              src={deck.src}
              alt={deck.id}
              fill
              sizes="(max-width: 640px) 40px, 80px"
              className="object-cover"
            />
          </CircleOption>
        ))}
      </Options>

      <Options title="Wheels" selectedName={selectedWheel}>
        {wheels.map((wheel) => (
          <CircleOption
            key={wheel.id}
            selected={wheel.id === selectedWheel}
            onClick={() => setWheel(wheel.id as WheelTextureKey)}
          >
            <Image
              src={wheel.src}
              alt={wheel.id}
              fill
              sizes="(max-width: 640px) 40px, 80px"
              className="object-cover"
            />
          </CircleOption>
        ))}
      </Options>

      <Options title="Trucks" selectedName={selectedTruck}>
        {colors.map((color) => (
          <CircleOption
            key={color.id}
            selected={color.id === selectedTruck}
            onClick={() => setTruck(color.id as ColorKey)}
            color={color.src}
          />
        ))}
      </Options>

      <Options title="Bolts" selectedName={selectedBolt}>
        {colors.map((color) => (
          <CircleOption
            key={color.id}
            selected={color.id === selectedBolt}
            onClick={() => setBolt(color.id as ColorKey)}
            color={color.src}
          />
        ))}
      </Options>
    </div>
  );
}

type OptionsProps = {
  title?: ReactNode;
  selectedName?: string;
  children?: ReactNode;
};

function Options({ title, selectedName, children }: OptionsProps) {
  return (
    <div>
      <div className="flex">
        <Heading as="h2" size="xs" className="mb-2">
          {title}
        </Heading>
        <p className="ml-3 text-zinc-300 capitalize">
          <span className="select-none text-zinc-500">| </span>
          {selectedName}
        </p>
      </div>
      <ul className="mb-1 flex flex-wrap gap-2">{children}</ul>
    </div>
  );
}

type CircleOptionProps = {
  selected: boolean;
  onClick: () => void;
  children?: ReactNode;
  color?: string;
};

function CircleOption({
  selected,
  onClick,
  children,
  color,
}: CircleOptionProps) {
  return (
    <li>
      <button
        onClick={onClick}
        className={clsx(
          "relative size-10 rounded-full overflow-hidden border-2 transition",
          selected
            ? "border-white"
            : "border-transparent hover:border-zinc-500",
        )}
        style={color ? { backgroundColor: color } : undefined}
      >
        {children}
      </button>
    </li>
  );
}
