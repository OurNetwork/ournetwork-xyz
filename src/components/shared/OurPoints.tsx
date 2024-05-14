"use client";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export const OurPoints = () => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="outline-none">
          <div className="pr-4 md:w-56 flex justify-center">
            <div>OUR Points</div>
            <InformationCircleIcon className="h-4 w-4 ml-1 text-black dark:text-white" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80 mt-4 mr-12 md:mr-36 border-[1px] rounded-xl border-lightBlue bg-zinc-100 dark:bg-direWolf font-sans !p-3 text-[10px] tracking-tighter">
          <div className="space-y-2">
            <div>
              {`Points is our way of publicly tracking contributor participation in OurNetwork, letting analysts build an `}
              <span className="font-semibold">onchain research</span>
              {`. Here’s the breakdown:`}
            </div>
            <div className="ml-4">
              <ul className="list-disc">
                <li>
                  {`Standard Issue Contribution: `}
                  <span className="text-darkGreen dark:text-lightBlue">100 Points</span>
                </li>
                <li>
                  {`Zoomed-In Series Contribution: `}
                  <span className="text-darkGreen dark:text-lightBlue">250 Points</span>
                </li>
                <li>
                  {`Monthly Contributor Survey Participation: `}
                  <span className="text-darkGreen dark:text-lightBlue">25 Points</span>
                </li>
              </ul>
            </div>
            <div>{`Multipliers are awarded for more recent contributions.`}</div>
            <div>
              {`Formula: `}
              <br />
              <span className="text-darkGreen dark:text-lightBlue">{`({Standard Submission} * 100 + {Zoomed-In Issue} * 250 + {ON Survey} * 25) - ((YEAR(TODAY()) - YEAR({Last Featured on})) * 5 * {Total Submissions})`}</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
