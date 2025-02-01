import BrandLogo from "@/components/brandLogo";
import Link from "next/link";
import { type FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="flex py-6 shadow-lg fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href="#" className="text-lg">
          Features
        </Link>
        <Link href="/#pricing" className="text-lg">
          Pricing
        </Link>
        <Link href="#" className="text-lg">
          About
        </Link>
        <span className="text-lg">{}</span>
      </nav>
    </header>
  );
};

export default Navbar;
