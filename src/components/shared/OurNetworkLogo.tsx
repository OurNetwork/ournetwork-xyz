"use client";
import Image from "next/image";
import Link from "next/link";

export const OurNetworkLogo = ({ width, height }) => {
  return (
    <Link href="/">
      <Image src={`/assets/brand/OurNetwork.png`} alt="OurNetwork" width={width} height={height} priority className="block dark:hidden" />
      <Image src={`/assets/brand/OurNetwork-dark.png`} alt="OurNetwork" width={width} height={height} priority className="hidden dark:block" />
    </Link>
  );
};
