"use client";
import { useState } from "react";

export const Subscribe = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async () => {
    console.log("HELLO");
    setIsInvalid(false);
    setError("An error has occured. Please enter a valid email.");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length > 0 && emailRegex.test(email)) {
      setIsLoading(true);
      console.log("Subscribing..");
      console.log("Email: ", email);

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      console.log("Response: ", res);
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
      console.log("Invalid email");
      setIsInvalid(true);
    }
    setIsLoading(false);
  };
  return (
    <>
      <div className="text-right max-w-72 mx-auto">
        <input
          className="border-[1px] bg-transparent border-black shadow-lg rounded-sm mt-1 px-1 py-1 w-full focus:outline-none dark:text-floralWhite dark:bg-black"
          placeholder="Enter email address"
          value={email}
          onChange={handleEmail}
        />
        <button
          className="border-[1px] text-white tracking-wider text-sm font-normal bg-black border-black shadow-lg rounded-sm mt-2 px-3 py-2 hover:-translate-y-[2px] "
          onClick={handleSubscribe}
          disabled={isLoading}
        >
          {isLoading ? "Subscribing.." : isSuccess ? "Subscribed!" : "Subscribe"}
        </button>
        {isInvalid && <div className={`mt-1 italic font-normal`}>{error}</div>}
      </div>
    </>
  );
};
