import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/signin" className="header-button flex flex-col items-center justify-center">
          <UserIcon className="w-8 h-8 flex items-center" />
          <span className="font-semibold mt-1">SignIn</span>
        </Link>
        <Link href="/cart" className="header-button flex flex-col items-center justify-center">
          <ShoppingCartIcon className="w-8 h-8 flex items-center" />
          <span className="font-semibold mt-1">Cart</span>
        </Link>
      </nav>
    </div>
  );
}
