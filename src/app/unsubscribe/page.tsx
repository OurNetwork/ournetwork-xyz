"use client";
import { OurNetworkLogo } from "@/components/shared/OurNetworkLogo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Unsubscribe() {
  const [email, setEmail] = useState<string>("Loading..");
  const [error, setError] = useState<string>("");
  const [isEmailLoading, setIsEmailLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const uuid = searchParams.get("uuid");

  useEffect(() => {
    if (!uuid) {
      setError("An error has occured. Please enter a valid email.");
      setIsSuccess(false);
      setIsInvalid(true);
      return;
    }

    const fetchEmail = async () => {
      const res = await fetch("/api/get-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uuid: uuid }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error);
        setIsSuccess(false);
        setIsInvalid(true);
      } else {
        setEmail(data.email);
        setIsEmailLoading(false);
      }
    };

    fetchEmail();
  }, [uuid]);

  const handleUnsubscribe = async () => {
    setIsInvalid(false);
    setError("An error has occured. Please enter a valid email.");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length > 0 && emailRegex.test(email)) {
      setIsLoading(true);

      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error);
        setIsSuccess(false);
        setIsInvalid(true);
      } else {
        setIsInvalid(false);
        setIsSuccess(true);
      }
    } else {
      setIsInvalid(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-zinc-100 dark:bg-direWolf flex p-8">
      <div className="absolute">
        <OurNetworkLogo width={200} height={80} />
      </div>
      <div className="mx-auto max-w-4xl h-screen w-full flex justify-center items-center font-mono">
        <div className="flex flex-col space-y-4">
          <div className="text-2xl lg:text-5xl font-bold text-darkGreen dark:text-lightBlue">{`We are sad to see you go :(`}</div>
          <div className="text-sm lg:text-xl">{`Are you sure you want to unsubscribe?`}</div>
          <input
            className="border-[1px] max-w-72 bg-transparent border-black shadow-lg rounded-sm mt-1 px-1 py-1 w-full focus:outline-none dark:text-floralWhite dark:bg-black"
            placeholder="Loading.."
            value={email}
            disabled
          />
          <button
            className="w-fit border-[1px] text-white tracking-wider text-sm font-normal bg-black border-black shadow-lg rounded-sm mt-2 px-3 py-2 hover:-translate-y-[2px] "
            onClick={handleUnsubscribe}
            disabled={isEmailLoading || isLoading}
          >
            {isLoading ? "Unsubscribing.." : isSuccess ? "Unsubscribed!" : "Unsubscribe"}
          </button>
          {isInvalid && <div className={`mt-1 italic font-normal`}>{error}</div>}
          <Link className="mx-auto !mt-8 uppercase text-xs hover:cursor-pointer underline md:no-underline hover:underline underline-offset-8" href="/">
            Take me back home
          </Link>
        </div>
      </div>
    </div>
  );
}
