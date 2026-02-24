import Link from "next/link";
import { ButtonLink } from "../ButtonLink";
import { Logo } from "../Icons/Logo";

type Link = {
  text: string;
  href: string;
};

const LINKS: Link[] = [
  { text: "Team", href: "#" },
  { text: "Customizer", href: "#" },
  { text: "About", href: "#" },
];

export async function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 h-[clamp(8rem,8vw+2rem,12rem)] px-[clamp(1rem,4vw,1.5rem)] py-[clamp(1rem,4vw,1.5rem)] hd:h-32">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center md:flex-nowrap md:justify-between gap-6 md:gap-8">
        <Link href="/" className="order-1">
          <Logo className="text-brand-purple h-[clamp(3rem,10vw,5rem)]" />
        </Link>

        <ButtonLink
          href=""
          icon="cart"
          color="purple"
          aria-label="Cart (1)"
          className="order-2 ml-auto md:ml-0 md:order-3"
        >
          <span className="md:hidden">1</span>
          <span className="hidden md:inline">Cart (1)</span>
        </ButtonLink>

        <nav
          aria-label="Main"
          className="order-3 w-full md:order-2 md:w-auto md:flex-1 md:flex md:justify-center"
        >
          <ul className="flex items-center justify-center gap-6 md:gap-8">
            {LINKS.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.href}
                  className="text-[clamp(1.125rem,3vw,1.25rem)] whitespace-nowrap"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
