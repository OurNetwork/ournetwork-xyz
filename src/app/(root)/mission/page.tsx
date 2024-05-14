"use client";
import { useTheme } from "next-themes";

export default function Mission() {
  const { theme } = useTheme();

  return (
    <div className="pb-4 lg:pb-8 space-y-4">
      <div className="flex justify-between items-center px-4 py-4 lg:py-0">
        <div className="text-xl lg:text-3xl">Mission</div>
      </div>
      <div className="bg-zinc-100 dark:bg-direWolf min-h-full w-full py-8 flex flex-col justify-between font-light px-4 lg:px-16">
        {/* header and ecosystem diagram */}
        <div className="flex-col justify-center space-y-8">
          <div className="mx-auto text-center max-w-4xl text-xl lg:text-3xl font-sans tracking-wider">Democratizing onchain information flow with community-powered research</div>
          <div className="mx-auto w-full h-[1px] bg-gray"></div>
          <div className="flex max-w-2xl text-left text-xl font-sans tracking-widest">Our Mission</div>
          <div className="w-full px-12 pb-6 space-y-6 text-justify font-sans tracking-wider text-lg md:text-xl">
            <p>
              {`"OurNetwork aims to help you understand crypto like never before by harnessing the power of onchain data & analytics. This is made possible by a community of contributors who actively participate at the forefront of this emerging data landscape.`}
            </p>
            <p>
              {`Onchain data allows OurNetwork’s contributors to showcase transactions, trends, and patterns based on the numbers, not narratives. Armed with this fundamentals-focused vision, a do-it-yourself model and a core team, OurNetwork provides unique insights on the health of crypto protocols."`}
            </p>
          </div>
          <div className="mx-auto w-full h-[1px] bg-gray"></div>
          <div className="flex max-w-2xl text-left text-xl font-sans tracking-widest">The ON Ecosystem</div>
          <div className="flex px-4 py-4 md:px-16 md:py-12 mx-auto justify-center lg:max-w-5xl">
            <img src={`/assets/brand/ecosystem.png`} alt={"on ecosystem"} className="block dark:hidden" />
            <img src={`/assets/brand/ecosystem-dark.png`} alt={"on ecosystem"} className="hidden dark:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
