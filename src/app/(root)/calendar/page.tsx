import { getContent } from "@/lib/content";
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
            className="text-xs uppercase bg-lightBlue text-blue text-center px-6 py-1 rounded-xl tracking-wider shadow-lg hover:cursor-pointer"
            target="_blank"
            href={process.env.CONTRIBUTOR_FORM as string}
            passHref={true}
          >
            <div className="lg:text-xs font-semibold">Click Here</div>
            <div className="lg:text-md font-light">Become a Contributor</div>
          </Link>
        </div>
        {/* table body */}
        <div
          className="bg-zinc-100 dark:bg-direWolf w-full flex justify-center text-sm lg:text-lg tracking-widest px-1  overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 126px)" }}
        >
          <img src={contributorCalendar[0].image} alt="calendar" className="w-full max-w-7xl h-full" style={{ maxHeight: "calc(100vh - 128px)" }} />
        </div>
      </div>
    </>
  );
}
