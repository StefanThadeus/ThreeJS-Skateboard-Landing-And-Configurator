export type Skateboard = {
  name: string;
  price: number;
  imageSrc: string;
  customizer_link: string;
  dominantColor: string;
  reviewCount: number;
};

export const SKATEBOARDS: Skateboard[] = [
  {
    name: "Oni Mask",
    price: 5999,
    imageSrc: "/skateboards/onimask-complete.png",
    customizer_link: "/build?wheel=cream&deck=oniMask&truck=black&bolt=silver",
    dominantColor: "BurlyWood",
    reviewCount: 57,
  },
  {
    name: "Pink Drop",
    price: 8999,
    imageSrc: "/skateboards/pink-drop-complete.png",
    customizer_link:
      "/build?wheel=cream&deck=pinkSwirl&truck=silver&bolt=silver",
    dominantColor: "hotPink",
    reviewCount: 94,
  },
  {
    name: "Thank You",
    price: 6999,
    imageSrc: "/skateboards/thank-you-complete.png",
    customizer_link: "/build?wheel=red&deck=thankYou&truck=silver&bolt=silver",
    dominantColor: "red",
    reviewCount: 82,
  },
  {
    name: "Yellow & Black",
    price: 7999,
    imageSrc: "/skateboards/yellow-black-complete.png",
    customizer_link:
      "/build?wheel=yellow&deck=yellowAndBlack&truck=black&bolt=gold",
    dominantColor: "yellow",
    reviewCount: 76,
  },
];
