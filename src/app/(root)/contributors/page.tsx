import Leaderboard from "@/components/leaderboard";
import { getLeaderboard } from "@/lib/leaderboard";
import { Contributor } from "@/types";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const revalidate = 600;

export default async function Contributors() {
  const contributors: Contributor[] = await getLeaderboard();
  const rankedContributors = contributors.map((contributor, index) => ({
    ...contributor,
    rank: index + 1,
  }));

  return (
    <>
      <div className="lg:h-full w-full space-y-4 mt-2">
        {/* header and button */}
        <div className="flex justify-between items-center px-4 py-4 lg:py-0">
          <div className="text-xl lg:text-3xl">Contributor Leaderboard</div>
          <Link
            className="text-xs bg-black text-white text-center px-6 py-3 rounded-xl tracking-wider shadow-lg hover:cursor-pointer relative border-2 border-black dark:border-white"
            target="_blank"
            href={process.env.CONTRIBUTOR_FORM as string}
            passHref={true}
          >
            <div className="lg:text-md font-semibold">Become a Contributor</div>
            <div className="absolute top-1 right-1">
              <ArrowUpRightIcon className="text-white h-3 w-3 stroke-[8px]" />
            </div>
          </Link>
        </div>
        <Leaderboard contributors={rankedContributors} />
      </div>
    </>
  );
}
