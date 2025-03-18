import Link from "next/link";
import BrandLogo from "@/components/brandLogo";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return ( 
    <header className="flex py-4 shadow bg-background">
      <nav className="flex items-center gap-10 container">
        <Link href="/dashboard" className="mr-auto">
          <BrandLogo />
        </Link>

        <Link href="/dashboard/products" className="hover:underline"> Products </Link>
        <Link href="/dashboard/analytics" className="hover:underline"> Analytics </Link>
        <Link href="/dashboard/subscription" className="hover:underline"> Subscription </Link>

        <div className="h-8 w-7">
          <UserButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
