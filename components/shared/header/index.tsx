import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import Menu from "./menu";
import data from "@/lib/data";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black text-white">
        <div className="px-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/icons/logo.svg"
                            alt={`${APP_NAME} Logo`}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="text-2xl font-bold">{APP_NAME}</span>
                    </Link>
                </div>
                <div className="flex-1 items-center gap-4 max-w-xl md:block">
                    <Search />
                </div>
                <Menu />
            </div>
            <div className="md:hidden block py-2">
                <Search />
            </div>
        </div>
        <div className="flex items-center px-3 mb-[1px] bg-gray-800">
            <Button variant="ghost" className="flex items-center gap-1 header-button text-base [&_svg]:size-6">
                <MenuIcon className="w-5 h-5" /> <span className="sr-only">All</span>
            </Button>
            <nav className="flex gap-3 overflow-x-auto scrollbar-hide">
                {data.headerMenus.map((menu) => (
                    <Link
                        key={menu.name}
                        href={menu.href}
                        className="header-button text-base"
                    >
                        {menu.name}
                    </Link>
                ))}
            </nav>
        </div>
    </header>
  )
}