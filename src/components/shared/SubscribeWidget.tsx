import Image from "next/image";
import { Subscribe } from "./Subscribe";

export const SubscribeWidget = () => {
  return (
    <div className="relative bg-zinc-100 dark:bg-direWolf dark:bg-direWolf px-2 py-8 text-center text-gray dark:text-whiteEdgar">
      {/* img at the middle left */}
      <div className="absolute left-0 bottom-1/2 px-4">
        <Image src="/assets/blocks/small-1.png" alt="green blocks" width={54} height={54} priority />
      </div>
      {/* img at bottom */}
      <div className="absolute bottom-0 left-0 py-8 px-8">
        <Image src="/assets/blocks/small-2.png" alt="yellow blocks" width={84} height={51} priority />
      </div>
      {/* main container */}
      <div className="relative mb-4 ">
        <div className="text-xl tracking-widest text-darkGreen dark:text-lightBlue mb-4 lg:mb-6">Join OurNetwork</div>
        <div className="space-y-2 mb-4 lg:mb-14 text-left px-3">
          <div className="dark:drop-shadow-[0_0px_1.8px_rgba(0,0,0,0.8)]">{`Get crypto's leading onchain data newsletter plus access to our new distributed research platform.`}</div>
        </div>
        <div className="px-2 h-[100px] font-extralight">
          <Subscribe />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <a href="/disclosures" className="text-sm absolute left-0 bottom-0 p-2 text-gray dark:text-whiteEdgar hover:underline">
          Disclosures
        </a>
        <div className="text-sm absolute right-0 bottom-0 p-2 text-gray dark:text-whiteEdgar hover:underline hover:cursor-pointer">LOGIN</div>
      </div>
    </div>
  );
};
