import { FooterPhysics } from "./FooterPhysics";
import Image from "next/image";
import NextLink from "next/link";
import { Bounded } from "@/components/Bounded";
import { Logo } from "@/components/Icons/Logo";
import type { Link } from "@/components/common/types";

const SKATEBOARDS = [
  "/skateboards/black-yellow-complete.png",
  "/skateboards/gray-black-complete.png",
  "/skateboards/green-navy-complete.png",
  "/skateboards/grid-streaks-complete.png",
  "/skateboards/onimask-complete.png",
  "/skateboards/pink-drop-complete.png",
  "/skateboards/red-black-complete.png",
  "/skateboards/red-white-complete.png",
  "/skateboards/thank-you-complete.png",
  "/skateboards/yellow-black-complete.png",
];

const LINKS: Link[] = [
  { text: "Team", href: "/#team" },
  { text: "Customizer", href: "/build" },
  { text: "About", href: "/#about" },
];
export const Footer = () => (
  <footer
    id="about"
    className="bg-texture bg-zinc-900 text-white overflow-hidden relative z-10"
  >
    <div className="relative h-[75vh] p-10 md:p-16 md:aspect-auto">
      <Image
        src="/skateboarders.jpg"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      <FooterPhysics
        boardTextureURLs={SKATEBOARDS}
        className="absolute inset-0 z-10 overflow-hidden"
      />
      <Logo className="pointer-events-none relative h-20 mix-blend-exclusion md:h-28" />
    </div>
    <Bounded>
      <ul className="flex flex-wrap justify-center gap-8 text-xl">
        {LINKS.map((link) => (
          <li key={link.text} className="hover:underline">
            <NextLink href={link.href}>{link.text}</NextLink>
          </li>
        ))}
      </ul>
    </Bounded>
  </footer>
);
