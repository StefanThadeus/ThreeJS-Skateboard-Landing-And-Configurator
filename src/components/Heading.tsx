import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

export function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-sans uppercase",
        size === "xl" && "text-[clamp(2.25rem,4vw+1rem,4rem)]",
        size === "lg" && "text-[clamp(2.25rem,3.5vw+1rem,3rem)]",
        size === "md" && "text-[clamp(1.875rem,3vw+0.75rem,2.25rem)]",
        size === "sm" && "text-[clamp(1.5rem,2.5vw+0.5rem,2rem)]",
        size === "xs" && "text-[clamp(1.125rem,2vw+0.25rem,1.25rem)]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
