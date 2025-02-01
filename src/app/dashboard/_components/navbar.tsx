import BrandLogo from "@/components/brandLogo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { type FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="flex py-4 shadow bg-background">
      <nav className="flex items-center gap-10 container">
        <Link href="/dashboard" className="mr-auto">
          <BrandLogo />
        </Link>

        <Link href="/dashboard/products"> Products </Link>
        <Link href="/dashboard/analytics"> Analytics </Link>
        <Link href="/dashboard/subscription"> Subscription </Link>

        <UserButton />
      </nav>
    </header>
  );
};

export default Navbar;
