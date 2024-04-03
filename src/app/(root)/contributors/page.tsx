import { XSocial } from "@/components/shared/XSocial";
import { getLeaderboard } from "@/lib/leaderboard";
import { Contributor } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 600;

export default async function Contributors() {
  const contributors: Contributor[] = await getLeaderboard();

  return (
    <>
      <div className="lg:h-full w-full space-y-4 mt-2">
        {/* header and button */}
        <div className="flex justify-between items-center px-4 py-4 lg:py-0">
          <div className="text-xl lg:text-3xl">Contributor Leaderboard</div>
          <Link
            className="text-xs uppercase bg-lightBlue text-blue text-center px-6 py-1 rounded-xl tracking-wider shadow-lg hover:cursor-pointer"
            target="_blank"
            href={process.env.CONTRIBUTOR_FORM as string}
            passHref={true}
          >
            <div className="lg:text-xs font-semibold">Click Here</div>
            <div className="lg:text-md font-light">Become a Contributor</div>
          </Link>
        </div>
        {/* table */}
        <div className="space-y-4">
          {/* table header */}
          <div className="flex justify-between items-center py-3 bg-zinc-100 dark:bg-direWolf w-full grid grid-cols-12 text-xs md:text-sm lg:text-lg tracking-widest dark:text-lightBlue uppercase">
            <div className="col-span-2 lg:col-span-1 border-r border-r-[1px] border-blue dark:border-lightBlue text-center">RANK</div>
            <div className="col-span-6 lg:col-span-5 border-r border-r-[1px] border-blue dark:border-lightBlue flex justify-center lg:justify-end">
              <div className="w-3/4 text-center lg:pr-24">Name</div>
            </div>
            <div className="col-span-4 lg:col-span-6 flex justify-end lg:pr-28">
              <div className="w-56 text-center">Points</div>
            </div>
          </div>
          {/* table body */}
          <div className="relative w-full ">
            <div className="absolute left-2/3 top-8 hidden lg:block">
              <Image src="/assets/blocks/medium-1.png" alt="green blocks" width={150} height={54} priority />
            </div>
            <div className="absolute left-24 top-1/2 hidden lg:block">
              <Image src="/assets/blocks/medium-2.png" alt="green blocks" width={75} height={54} priority />
            </div>
            <div className="absolute right-1/2 top-3/4 px-4 hidden lg:block">
              <Image src="/assets/blocks/medium-3.png" alt="green blocks" width={75} height={54} priority />
            </div>
            <div className="bg-zinc-100 dark:bg-direWolf text-sm lg:text-lg tracking-widest px-1 py-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 196px)" }}>
              {contributors.map((contributor, index) => {
                const tierLabel = (() => {
                  switch (true) {
                    case index == 0:
                      return "Chad Tier";
                    case index == 3:
                      return "Tier 1";
                    case index == 25:
                      return "Tier 2";
                    case index == 100:
                      return "Tier 3";
                    default:
                      return null;
                  }
                })();

                return (
                  <div className="relative" key={index}>
                    {tierLabel && <div className="absolute top-0 left-0 -mt-2 text-xs w-fit px-1 bg-zinc-100 dark:bg-direWolf text-blue dark:text-lightBlue">{tierLabel}</div>}
                    <div className="grid grid-cols-12 py-4 border-t-[0.5px] border-slate-400 dark:border-gray">
                      <div className="col-span-2 lg:col-span-1 text-center">{index + 1}</div>
                      <div className="col-span-6 lg:col-span-5 flex justify-end">
                        <div className="w-3/12 lg:w-1/4 text-center text-xl">{index === 0 ? "👑" : index === 1 ? "🥈" : index === 2 ? "🥉" : ""}</div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
