"use client";
import { useEffect, useState } from "react";
import { useSearch } from "@/context/SearchContext";
import { OurPoints } from "@/components/shared/OurPoints";
import { XSocial } from "@/components/shared/XSocial";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Leaderboard({ contributors }: { contributors: any[] }) {
  const { searchQuery, setSearchQuery } = useSearch();
  const pathname = usePathname();

  const originalContributors = contributors;
  const [filteredContributors, setFilteredContributors] = useState(originalContributors);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = contributors.filter((contributor: any) => {
        const nameMatch = contributor.name.toLowerCase().includes(searchQuery.toLowerCase());
        return nameMatch;
      });

      setFilteredContributors(filtered);
    } else {
      setFilteredContributors(originalContributors);
    }
  }, [searchQuery]);

  useEffect(() => {
    setSearchQuery("");
  }, [pathname]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="space-y-4">
        <div className="mt-3 flex mb-3 align-center rounded-xl bg-zinc-50 p-2 dark:bg-direWolf w-full font-sans">
          <MagnifyingGlassIcon className="h-5 w-5 my-auto text-gray-300" />
          <input type="text" placeholder="Search" className="px-2 relative bg-zinc-50 dark:bg-direWolf rounded text-xl w-full focus:outline-none" onChange={handleSearch} />
        </div>
        {/* table header */}
        <div className="flex justify-between items-center py-3 bg-zinc-100 dark:bg-direWolf w-full grid grid-cols-12 text-xs md:text-sm lg:text-lg tracking-widest text-darkGreen dark:text-lightBlue">
          <div className="col-span-2 lg:col-span-1 border-r border-r-[1px] border-darkGreen dark:border-lightBlue text-center">RANK</div>
          <div className="col-span-6 lg:col-span-5 border-r border-r-[1px] border-darkGreen dark:border-lightBlue flex justify-center lg:justify-end">
            <div className="w-3/4 text-center lg:pr-24">NAME</div>
          </div>
          <div className="col-span-4 lg:col-span-6 flex justify-end lg:pr-28">
            <OurPoints />
          </div>
        </div>
        {/* table body */}
        <div className="relative w-full ">
          {filteredContributors.length > 0 && (
            <>
              <div className="absolute left-2/3 top-8 hidden lg:block">
                <Image src="/assets/blocks/medium-1.png" alt="green blocks" width={150} height={54} priority />
              </div>
              <div className="absolute left-24 top-1/2 hidden lg:block">
                <Image src="/assets/blocks/medium-2.png" alt="green blocks" width={75} height={54} priority />
              </div>
              <div className="absolute right-1/2 top-3/4 px-4 hidden lg:block">
                <Image src="/assets/blocks/medium-3.png" alt="green blocks" width={75} height={54} priority />
              </div>
            </>
          )}
          <div className="bg-zinc-100 dark:bg-direWolf text-sm lg:text-lg tracking-widest px-1 py-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 196px)" }}>
            {filteredContributors.map((contributor) => {
              const tierLabel = (() => {
                switch (true) {
                  case contributor.rank === 1:
                    return "Chad Tier";
                  case contributor.rank === 4:
                    return "Tier 1";
                  case contributor.rank === 26:
                    return "Tier 2";
                  case contributor.rank === 101:
                    return "Tier 3";
                  default:
                    return null;
                }
              })();

              return (
                <div className="relative" key={contributor.rank}>
                  {tierLabel && <div className="absolute top-0 left-0 -mt-2 text-xs w-fit px-1 bg-zinc-100 dark:bg-direWolf text-darkGreen dark:text-lightBlue">{tierLabel}</div>}
                  <div className="grid grid-cols-12 py-4 border-t-[0.5px] border-slate-400 dark:border-gray">
                    <div className="col-span-2 lg:col-span-1 text-center">{contributor.rank}</div>
                    <div className="col-span-6 lg:col-span-5 flex justify-end">
                      <div className="w-3/12 lg:w-1/4 text-center text-xl">
                        {contributor.rank === 1 ? "👑" : contributor.rank === 2 ? "🥈" : contributor.rank === 3 ? "🥉" : ""}
                      </div>
                      <div className="w-8/12 lg:w-3/4 flex items-center">
                        {contributor.name}
                        <div className="hidden lg:block hover:cursor-pointer min:w-[20px] ml-2 lg:ml-4">
                          <XSocial href={`https://x.com/${contributor.twitterHandle}`} size={3} />
                        </div>
                      </div>
                      <div className="block lg:hidden w-1/12 ">
                        <a className="hover:cursor-pointer flex justify-end" target="_blank" href={`https://x.com/${contributor.twitterHandle}`}>
                          <XSocial href={`https://x.com/${contributor.twitterHandle}`} size={3} />
                        </a>
                      </div>
                    </div>
                    <div className="col-span-4 lg:col-span-6 flex justify-end lg:pr-24">
                      <div className="w-56 text-center">{contributor.totalSubmissions}</div>
                    </div>
                  </div>
                </div>
              );
            })}
            {filteredContributors.length === 0 && <div className="p-2 z-50">No results to show</div>}
          </div>
        </div>
      </div>
    </>
  );
}
