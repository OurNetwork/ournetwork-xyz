"use client";

import { Sheet, SheetContent, SheetClose, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks, socialLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { OurNetworkLogo } from "./OurNetworkLogo";
import { XSocial } from "./XSocial";
import { ThemeToggle } from "./ThemeToggle";
import { Subscribe } from "./Subscribe";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="lg:hidden flex justify-between px-4 py-5 shadow-lg">
      <OurNetworkLogo width={200} height={80} />
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon size={32} />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white dark:bg-eerieBlack font-mono flex flex-col justify-between h-full">
          <div>
            <OurNetworkLogo width={200} height={80} />
            <div className="pt-8 pb-4 mb-4 space-y-2 border-b-[2px]">
              {sidebarLinks.map((item) => {
                const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
                return (
                  <div key={item.label} className="font-light text-xl">
                    <SheetClose asChild>
                      <Link href={item.route} className={isActive ? "decoration-2 underline underline-offset-4" : "no-underline"}>
                        {item.label}
                      </Link>
                    </SheetClose>
                  </div>
                );
              })}
            </div>
            <div className="flex w-full justify-between">
              <div className="flex items-center px-2 space-x-4">
                <XSocial href="https://x.com/ournetwork__" size={6} />
                {socialLinks.map((item) => {
                  return (
                    <div key={item.label}>
                      <Link href={item.url}>
                        <Image src={item.icon} alt={item.label} width={30} height={30} />
                      </Link>
                    </div>
                  );
                })}
              </div>
              <ThemeToggle isMobile />
            </div>
          </div>
          <div className="relative bg-zinc-100 dark:bg-direWolf px-2 py-8 text-center text-gray dark:text-whiteEdgar">
            <div className="absolute left-0 bottom-1/2 px-4">
              <Image src="/assets/blocks/small-1.png" alt="green blocks" width={54} height={54} priority />
            </div>
            <div className="absolute bottom-0 left-0 py-8 px-8">
              <Image src="/assets/blocks/small-2.png" alt="yellow blocks" width={84} height={51} priority />
            </div>
            <div className="relative mb-4">
              <div className="text-xl tracking-widest text-darkGreen dark:text-lightBlue mb-4 lg:mb-6">Join OurNetwork</div>
              <div className="lg:space-y-2 mb-4 lg:mb-14 text-left px-3">
                <div className="dark:drop-shadow-[0_0px_1.8px_rgba(0,0,0,0.8)]">{`Get crypto's leading onchain data newsletter plus access to our new distributed research platform.`}</div>
              </div>
              <div className="px-2 h-[100px] font-extralight">
                <Subscribe />
              </div>
            </div>
            <a href="/disclosures" className="text-sm absolute left-0 bottom-0 p-2 text-gray dark:text-whiteEdgar hover:underline">
              Disclosures
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
