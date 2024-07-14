"use client";

import { sidebarLinks, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSearch } from "@/context/SearchContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ThemeToggle } from "./ThemeToggle";
import { XSocial } from "./XSocial";
import { OurNetworkLogo } from "./OurNetworkLogo";
import { Subscribe } from "./Subscribe";
import { SubscribeWidget } from "./SubscribeWidget";
import AccountWidget from "./AccountWidget";
import { supabase } from "@/lib/supabaseClient";
import toast, { Toaster } from "react-hot-toast";

const LeftSidebar = () => {
  const pathname = usePathname();
  const { setSearchQuery } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setSearchQuery("");
  }, [pathname]);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const { data } = await supabase.auth.getUser();

    if (data) {
      // logged in
      alert("Logged in as " + data?.user?.email);
    } else {
      // not logged in
      toast("Not logged in");
      console.log("Not logged in");
    }
  }

  return (
    <section className="hidden lg:block custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[308px] px-4 py-8">
      <div className="flex flex-col justify-between h-full">
        {/* top part */}
        <div>
          <OurNetworkLogo width={288} height={80} />
          <div className="pt-8 pb-4 mb-4 px-4 space-y-2 border-b-[2px] dark:border-gray">
            {sidebarLinks.map((item) => {
              const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;
              return (
                <div key={item.label} className="font-light">
                  <Link href={item.route} className={isActive ? "decoration-2 underline underline-offset-4" : "no-underline"}>
                    {item.label}
                  </Link>
                </div>
              );
            })}
            {/* search bar */}
            {(pathname === "/" || pathname === "/contributors") && (
              <div className="mt-3 flex mb-3 align-center rounded-xl bg-zinc-50 dark:bg-direWolf p-2 w-full max-w-xl font-sans">
                <MagnifyingGlassIcon className="h-5 w-5 my-auto text-gray-300" />
                <input type="text" placeholder="Search" className="px-2 relative bg-zinc-50 dark:bg-direWolf rounded text-md w-full focus:outline-none" onChange={handleSearch} />
              </div>
            )}
          </div>
          <div className="flex w-full justify-between">
            <div className="flex items-center px-2 space-x-4">
              <XSocial href="https://x.com/ournetwork__" size={4} />
              {socialLinks.map((item) => {
                return (
                  <div key={item.label}>
                    <Link href={item.url} target="_blank">
                      <Image src={item.icon} alt={item.label} width={20} height={20} />
                    </Link>
                  </div>
                );
              })}
            </div>
            <ThemeToggle />
          </div>
        </div>
        {/* bottom part */}
        <SubscribeWidget />
        <AccountWidget />
      </div>
      {/* <Toaster position="bottom-left" reverseOrder={false} /> */}
    </section>
  );
};

export default LeftSidebar;
