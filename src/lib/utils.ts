import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cleanTitle(title: string) {
  if (!title) {
    console.error("Invalid title provided.");
    return "";
  }

  const delimiter = title.includes(":") ? ":" : " ";
  const parts = title.split(delimiter);

  if (parts.length < 2) {
    console.error("Title format is incorrect or missing parts.");
    return "";
  }

  return parts[1].replace(/[^a-zA-Z0-9 -]/g, "").trim();
}

export function getONSeries(title: string) {
  if (!title) {
    console.error("Invalid title provided.");
    return "";
  }

  const delimiter = title.includes(":") ? ":" : " ";
  const parts = title.split(delimiter);

  if (parts.length < 1) {
    console.error("Title format is incorrect or missing parts.");
    return "";
  }

  return parts[0].trim();
}
export function getCoverageList(coverage: string) {
  let startIndex;
  startIndex = coverage.toLowerCase().indexOf("coverage on");
  if (startIndex === -1) {
    startIndex = coverage.toLowerCase().indexOf("coverage of");
    return [coverage];
  }

  const coverageText = coverage.substring(startIndex + "Coverage on".length);
  const endIndex = coverageText.indexOf(". ") !== -1 ? coverageText.indexOf(".") : coverageText.length;
  const coverageList = coverageText
    .substring(0, endIndex)
    .split(",")
    .map((item) => item.trim());

  const lastItem = coverageList[coverageList.length - 1];
  const lastItemCleaned = lastItem.replace(/\.$/, "");
  coverageList[coverageList.length - 1] = lastItemCleaned;

  const lastItemSplit = lastItemCleaned.split(/ and|&/i).map((item) => item.trim());
  coverageList.pop();
  coverageList.push(...lastItemSplit);

  let cleanedCoverageList = coverageList.map((item) => item.replace(/\s+$/, ""));

  const lastItemIndex = cleanedCoverageList.length - 1;
  cleanedCoverageList[lastItemIndex] = cleanedCoverageList[lastItemIndex].replace("and", "");

  cleanedCoverageList = cleanedCoverageList.map((item) => item.trim());

  for (let i = 0; i < cleanedCoverageList.length; i++) {
    cleanedCoverageList[i] = cleanedCoverageList[i].charAt(0).toUpperCase() + cleanedCoverageList[i].slice(1);
  }

  if (lastItemIndex > -1 && cleanedCoverageList[lastItemIndex] === "More") {
    cleanedCoverageList.pop();
  }

  return cleanedCoverageList;
}

export function getArchiveURL(slug: string) {
  // return `https://ournetwork.substack.com/p/${slug}`;
  return `/p/${slug}`;
}

export function convertDateFormat(dateString: string) {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

export function convertToHumanReadableFormat(dateString: string) {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
