export const ASSET_PATH = "/3D-Models/skateboard";

export const PATHS = {
  deck: `${ASSET_PATH}/deck`,
  wheel: `${ASSET_PATH}/wheel`,
  model: `${ASSET_PATH}/skateboard.gltf`,
} as const;

export const DECK_TEXTURES = {
  clean: `${PATHS.deck}/deck-clean.png`,
  againstTheTide: `${PATHS.deck}/against-the-tide.png`,
  blackAndYellow: `${PATHS.deck}/black-and-yellow.png`,
  grayAndBlack: `${PATHS.deck}/gray-and-black.png`,
  greenAndNavy: `${PATHS.deck}/green-and-navy.png`,
  gridStreaks: `${PATHS.deck}/grid-streaks.png`,
  oniMask: `${PATHS.deck}/oni-mask.png`,
  pinkSwirl: `${PATHS.deck}/pink-swirl.png`,
  redAndBlack: `${PATHS.deck}/red-and-black.png`,
  redAndWhite: `${PATHS.deck}/red-and-white.png`,
  thankYou: `${PATHS.deck}/thank-you-deck.png`,
  yellowAndBlack: `${PATHS.deck}/yellow-and-black.png`,
} as const;

export type DeckTextureKey = keyof typeof DECK_TEXTURES;

export const WHEEL_TEXTURES = {
  cream: `${PATHS.wheel}/cream.png`,
  black: `${PATHS.wheel}/black.png`,
  blue: `${PATHS.wheel}/blue.png`,
  green: `${PATHS.wheel}/green.png`,
  navy: `${PATHS.wheel}/navy.png`,
  pink: `${PATHS.wheel}/pink.png`,
  purple: `${PATHS.wheel}/purple.png`,
  red: `${PATHS.wheel}/red.png`,
  yellow: `${PATHS.wheel}/yellow.png`,
} as const;

export type WheelTextureKey = keyof typeof WHEEL_TEXTURES;
