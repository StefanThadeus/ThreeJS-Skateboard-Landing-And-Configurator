import { ReactNode } from "react";
import { Header } from "@/components/Sections/Header";
import { Footer } from "@/components/Sections/Footer";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
