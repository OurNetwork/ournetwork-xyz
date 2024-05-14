import { getContent } from "@/lib/content";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default async function Calendar() {
  const { contributorCalendar } = await getContent();

  return (
    <>
      <div className="lg:h-full w-full space-y-4 mt-2">
        {/* header and button */}
        <div className="flex justify-between items-center px-4 py-4 lg:py-0">
          <div className="text-xl lg:text-3xl">{`Contributor Calendar: ${contributorCalendar[0].title}`}</div>
          <Link
            className="text-xs bg-black text-white text-center px-6 py-3 rounded-xl tracking-wider shadow-lg hover:cursor-pointer relative border-2 border-black dark:border-white"
            target="_blank"
            href={process.env.CONTRIBUTOR_FORM as string}
            passHref={true}
          >
            {/* <div className="lg:text-xs font-semibold">Click Here</div> */}
            <div className="lg:text-md font-semibold">Become a Contributor</div>
            <div className="absolute top-1 right-1">
              <ArrowUpRightIcon className="text-white h-3 w-3 stroke-[8px]" />
            </div>
          </Link>
        </div>
        <div
          className="bg-zinc-100dark:bg-direWolf bg-transparent w-full flex justify-center text-sm lg:text-lg tracking-widest px-1 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 126px)" }}
        >
          <div className="w-full max-w-7xl h-full flex justify-center items-center">
            <img
              src={contributorCalendar[0].image}
              alt="calendar"
              className="max-w-full max-h-full rounded-3xl border-lightBlue border-2"
              style={{ maxHeight: "calc(100vh - 128px)", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
