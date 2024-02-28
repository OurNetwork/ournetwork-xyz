import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-zinc-100 flex p-8">
      <div className="absolute">
        <Image src="/assets/brand/OurNetwork.webp" alt="OurNetwork" width={200} height={80} priority />
      </div>
      <div className="h-screen w-full flex justify-center items-center font-mono">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-4xl lg:text-7xl font-bold text-blue">404 - Not Found</div>
          <div className="text-sm lg:text-xl">Sorry, the page you're looking for does not exist.</div>
          <Link className="!mt-8 uppercase text-xs hover:cursor-pointer underline md:no-underline hover:underline underline-offset-8" href="/">
            Take me back home
          </Link>
        </div>
      </div>
    </div>
  );
}
