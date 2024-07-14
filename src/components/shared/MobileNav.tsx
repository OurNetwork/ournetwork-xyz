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
import { SubscribeWidget } from "./SubscribeWidget";

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
          <SubscribeWidget />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
