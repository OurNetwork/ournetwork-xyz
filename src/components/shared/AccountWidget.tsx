import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { supabase } from "@/lib/supabaseClient";
import toast, { Toaster } from "react-hot-toast";

const AccountWidget = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("alessfigo24@gmail.com");
  const [session, setSession] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data: emailSentData, error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
        },
      });
      setLoading(false);

      if (emailSentData) {
        const { user, session } = emailSentData;
        if (user) {
          // todo: give a popup
          setSuccess(true);
        }
      }
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="bg-zinc-100 dark:bg-direWolf dark:bg-direWolf px-2 py-4 text-center text-gray dark:text-whiteEdgar rounded-xl space-y-6">
      {/* for debugging */}
      <div className="text-lg tracking-widest font-sans font-semibold hover:cursor-pointer" onClick={handleLogin}>
        Login
      </div>
      {loading && <div className="text-lg tracking-widest font-sans font-semibold text-yellow-500">Loading...</div>}
      {success && <div className="text-lg tracking-widest font-sans font-semibold text-green-500">{`An email has been sent to ${email}!`}</div>}
      <div className="text-lg tracking-widest font-sans font-semibold">My Account</div>
      {/* profile picture */}
      <div className="relative flex justify-center pb-4 w-[96px] mx-auto">
        <Image src="/assets/team/cody.jpeg" alt="profile picture" width={96} height={96} className="rounded-full" />
        <ArrowUpTrayIcon className="absolute bottom-0 right-0 h-4 w-4 ml-1 mb-2 text-black dark:text-white hover:cursor-pointer hover:underline" />
      </div>
      {/* details */}
      <div className="w-full text-sm space-y-4">
        <div className="flex justify-between">
          <div className="text-darkGreen dark:text-lightBlue">Name</div>
          Cody Garrison
        </div>
        <div className="flex justify-between">
          <div className="text-darkGreen dark:text-lightBlue">Email</div>
          cody@ournetwork.xyz
        </div>
        <div className="flex justify-between">
          <div className="text-darkGreen dark:text-lightBlue">Member Since</div>
          June 22, 2022
        </div>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default AccountWidget;
