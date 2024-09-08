"use client";

import { colorGradients } from "@/constants";
import { getArchiveURL, getCoverageList } from "@/lib/utils";
import Image from "next/image";
import LegacyImage from "next/legacy/image";
import { useSearch } from "@/context/SearchContext";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { OurNetworkLogo } from "./shared/OurNetworkLogo";
import { Subscribe } from "./shared/Subscribe";
import { useRouter, useSearchParams } from "next/navigation";

const VisitPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("on-firstVisit") === null;

    if (isFirstVisit) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("on-firstVisit", "no");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <AnimatePresence>
        {showPopup && (
          <motion.div className="fixed inset-0 bg-zinc-100 dark:bg-direWolf flex p-8 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute">
              <OurNetworkLogo width={200} height={80} />
            </div>
            <div className="absolute left-2/3 top-24">
              <Image src="/assets/blocks/small-4.png" alt="green blocks" width={30} height={30} priority />
            </div>
            <div className="absolute left-1/2 top-1/3 pl-6 lg:pl-12">
              <Image src="/assets/blocks/small-3.png" alt="green blocks" width={60} height={60} priority />
            </div>
            <div className="absolute left-1/2 top-3/4 pl-16 lg:pl-32 ">
              <Image src="/assets/blocks/small-5.png" alt="green blocks" width={30} height={30} priority />
            </div>
            <div className="flex flex-col justify-center text-center w-full h-full z-50">
              <div className="space-y-8 justify-center">
                <div className="mx-auto max-w-xl text-2xl lg:text-3xl tracking-widest font-light font-sans">Distributed Research for Distributed Networks</div>
                <div className="mx-auto max-w-md text-lg lg:text-xl tracking-tighter font-light ">The Leading Onchain Analytics Newsletter & Community.</div>
                <div>
                  <Subscribe />
                </div>
                <div className="uppercase text-xs hover:cursor-pointer hover:underline hover:underline-offset-8" onClick={closePopup}>
                  Let me read it first
                </div>
                <div className="absolute -top-2 right-4 hover:cursor-pointer" onClick={closePopup}>
                  <XMarkIcon className="h-12 w-12 text-gray-500 !z-50" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function Archives({ archives }: { archives: any[] }) {
  const { searchQuery, setSearchQuery } = useSearch();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const originalArchives = archives;
  const [filteredArchives, setFilteredArchives] = useState<any[]>(archives);

  useEffect(() => {
    const r = searchParams.get("r");
    console.log("r parameter:", r);
    if (r) {
      const match = r.match(/\/(.+)/);
      if (match) {
        const path = match[1];
        if (path.startsWith("on")) {
          const query = searchParams.toString();
          router.push(`/p/${path}`);
        }
      }
    }
  }, [router, searchParams]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = archives.filter((archive: any) => {
        const titleMatch = archive.title.toLowerCase().includes(searchQuery.toLowerCase());
        const excerptMatch = archive.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return titleMatch || excerptMatch;
      });

      setFilteredArchives(filtered);
    } else {
      setFilteredArchives(originalArchives);
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
      {!searchParams.get("r") && (
        <>
          <VisitPopup />
          <div className="hidden lg:block lg:flex lg:overflow-x-auto lg:space-x-4 h-full lg:w-[calc(100vw-324px)] overflow-y-hidden">
            {filteredArchives.map((archive: any, index: number) => {
              let color = colorGradients[archive.editionNo % 5];
              let bottomPosition = index % 2 === 0 ? { bottom: "38px", left: "24px", right: "0" } : { bottom: "72px", left: "100px", right: "0" };

              return (
                <a
                  key={index}
                  className="group bg-zinc-100 dark:bg-direWolf dark:bg-direWolf min-w-64 max-w-64 w-full relative transform hover:translate-y-2 transition duration-100"
                  href={getArchiveURL(archive.slug)}
                >
                  <div className="absolute top-0">
                    <Image src={color.gradient} alt="gradient header" width={300} height={32} priority />
                  </div>
                  <div className="absolute bottom-0">
                    <Image src={color.block} alt="gradient blocks" width={300} height={32} priority />
                  </div>
                  <div
                    className="absolute bottom-0 text-center mx-auto text-gray dark:text-white font-extralight dark:font-light font-sans text-2xl dark:drop-shadow-[0_0px_1.8px_rgba(0,0,0,0.8)]"
                    style={bottomPosition}
                  >
                    <div>{archive.onSeries}</div>
                  </div>
                  <div className="px-2 pt-8">
                    <div className="space-y-10">
                      <div className="text-center font-sans font-extralight space-y-6">
                        <div className="text-4xl h-28">{archive.title}</div>
                        <div className="text-sm">{archive.date}</div>
                      </div>
                      <div className="px-6 space-y-4">
                        <div className="text-sm font-light h-56">
                          {archive.coverageList.map((item: string, index: number) => {
                            return (
                              <div className="ml-4 -indent-4" key={index}>
                                {item}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="text-center font-light text-sm underline underline-offset-2 hover:cursor-pointer group-hover:font-normal">Read Issue</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="w-full block lg:hidden overflow-y-auto space-y-2">
            <div className="mt-3 flex mb-3 align-center rounded-xl bg-zinc-50 p-2 dark:bg-direWolf w-full font-sans">
              <MagnifyingGlassIcon className="h-5 w-5 my-auto text-gray-300" />
              <input type="text" placeholder="Search" className="px-2 relative bg-zinc-50 dark:bg-direWolf rounded text-xl w-full focus:outline-none" onChange={handleSearch} />
            </div>
            {filteredArchives.map((archive: any, index: number) => {
              let color = colorGradients[archive.editionNo % 5];

              return (
                <div key={index} className="bg-zinc-100 dark:bg-direWolf">
                  <a className="group w-full hover:shadow-xl bg-red-200" href={getArchiveURL(archive.slug)}>
                    <div className="absolute top-0 relative h-2">
                      <LegacyImage src={color.gradient} alt="gradient header" layout="fill" priority />
                    </div>

                    <div className="px-2 pt-6 pb-2 relative">
                      <div className="space-y-10">
                        <div className="text-center font-sans font-extralight space-y-6">
                          <div className="text-3xl">{archive.title}</div>
                          <div className="text-sm">{archive.date}</div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 right-0 text-gray dark:text-whiteEdgar font-sans font-extralight text-xl p-2">
                        <div>{archive.onSeries}</div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
