"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

export const OurNetworkLogo = ({ width, height }) => {
  const { theme } = useTheme();
  return <Image src={`/assets/brand/OurNetwork${theme === "dark" ? "-dark" : ""}.png`} alt="OurNetwork" width={200} height={80} priority />;
};
