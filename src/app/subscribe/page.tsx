import Image from "next/image";
import { OurNetworkLogo } from "@/components/shared/OurNetworkLogo";
import { Subscribe } from "@/components/shared/Subscribe";
import Link from "next/link";

export default function SubscribePage() {
  return (
    <div className="fixed inset-0 bg-zinc-100 dark:bg-direWolf flex p-8 z-50">
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
      <div className="flex flex-col justify-center text-center w-full h-full z-50 font-mono">
        <div className="space-y-8 justify-center">
          <div className="mx-auto max-w-xl text-2xl lg:text-3xl tracking-widest font-light font-sans dark:drop-shadow-[0_0px_1.8px_rgba(0,0,0,0.8)]">
            Distributed Research for Distributed Networks
          </div>
          <div className="mx-auto max-w-md text-lg lg:text-xl tracking-tighter font-light ">The Leading Onchain Analytics Newsletter & Community.</div>
          <div>
            <Subscribe />
          </div>
          <Link className="uppercase text-xs hover:cursor-pointer hover:underline hover:underline-offset-8" href="/">
            Let me read it first
          </Link>
        </div>
      </div>
    </div>
  );
}
