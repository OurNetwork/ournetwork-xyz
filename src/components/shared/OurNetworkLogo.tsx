"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

export const OurNetworkLogo = ({ width, height }) => {
  const { theme } = useTheme();
  return (
    <>
      <Image src={`/assets/brand/OurNetwork.png`} alt="OurNetwork" width={width} height={height} priority className="block dark:hidden" />
      <Image src={`/assets/brand/OurNetwork-dark.png`} alt="OurNetwork" width={width} height={height} priority className="hidden dark:block" />
    </>
  );
};
