"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ColorKey,
  DeckTextureKey,
  WheelTextureKey,
} from "@/components/Models/Skateboard/constants";

type CustomizerControlsContext = {
  selectedWheel: WheelTextureKey;
  setWheel: (wheel: WheelTextureKey) => void;
  selectedDeck: DeckTextureKey;
  setDeck: (deck: DeckTextureKey) => void;
  selectedTruck: ColorKey;
  setTruck: (trucks: ColorKey) => void;
  selectedBolt: ColorKey;
  setBolt: (bolts: ColorKey) => void;
};

const CustomizerControlsContext =
  createContext<CustomizerControlsContext | null>(null);

type CustomizerControlsProviderProps = {
  defaultWheel: WheelTextureKey;
  defaultDeck: DeckTextureKey;
  defaultTruck: ColorKey;
  defaultBolt: ColorKey;
  children: ReactNode;
};

export function CustomizerControlsProvider({
  defaultWheel,
  defaultDeck,
  defaultTruck,
  defaultBolt,
  children,
}: CustomizerControlsProviderProps) {
  const searchParams = useSearchParams();

  const [selectedWheel, setWheel] = useState<WheelTextureKey>(
    (searchParams.get("wheel") as WheelTextureKey) ?? defaultWheel,
  );
  const [selectedDeck, setDeck] = useState<DeckTextureKey>(
    (searchParams.get("deck") as DeckTextureKey) ?? defaultDeck,
  );
  const [selectedTruck, setTruck] = useState<ColorKey>(
    (searchParams.get("truck") as ColorKey) ?? defaultTruck,
  );
  const [selectedBolt, setBolt] = useState<ColorKey>(
    (searchParams.get("bolt") as ColorKey) ?? defaultBolt,
  );

  const value = {
    selectedWheel,
    setWheel,
    selectedDeck,
    setDeck,
    selectedTruck,
    setTruck,
    selectedBolt,
    setBolt,
  };

  return (
    <CustomizerControlsContext.Provider value={value}>
      {children}
    </CustomizerControlsContext.Provider>
  );
}

export function useCustomizerControls() {
  const context = useContext(CustomizerControlsContext);

  if (!context) {
    throw new Error(
      "useCustomizerControls must be used within CustomizerControlsProvider",
    );
  }

  return context;
}
