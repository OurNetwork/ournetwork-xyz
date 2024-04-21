"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const ThemeToggle = ({ isMobile = false }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [isDark, setIsDark] = useState(theme === "dark");

  const handleCheckboxChange = () => {
    setIsDark(!isDark);
    console.log("isDark", isDark);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {isMobile ? (
        <label className="relative bg-white dark:bg-black rounded-full z-2 flex cursor-pointer select-none items-center">
          <div>
            <input type="checkbox" checked={isDark} onChange={handleCheckboxChange} className="sr-only" />
            <div className={`box block h-8 w-12 rounded-full border-[1.5px] border-black dark:border-white`}></div>
            <div
              className={`absolute left-1 top-1 flex mt-[2px] h-5 w-5 items-center justify-center rounded-full bg-black dark:bg-white transition ${
                isDark ? "translate-x-full" : ""
              }`}
            >
              <div className="text-white dark:text-black">{isDark ? <MoonIcon className="h-3 w-3 transition-none" /> : <SunIcon className="h-3 w-3 transition-none" />}</div>
            </div>
          </div>
        </label>
      ) : (
        <label className="relative bg-white dark:bg-black rounded-full z-2 flex cursor-pointer select-none items-center">
          <div>
            <input type="checkbox" checked={isDark} onChange={handleCheckboxChange} className="sr-only" />
            <div className={`box block h-6 w-10 rounded-full border-[1.5px] border-black dark:border-white`}></div>
            <div className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white transition ${isDark ? "translate-x-full" : ""}`}>
              <div className="text-white dark:text-black">{isDark ? <MoonIcon className="h-3 w-3 transition-none" /> : <SunIcon className="h-3 w-3 transition-none" />}</div>
            </div>
          </div>
        </label>
      )}
    </>
  );
};
