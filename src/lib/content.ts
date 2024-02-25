import "server-only";
import { Archive, TeamMember } from "@/types";
import GhostContentAPI from "@tryghost/content-api";
import { cache } from "react";
import { cleanTitle, convertDateFormat, getCoverageList, getONSeries } from "./utils";

const ghostApi = new GhostContentAPI({
  url: process.env.GHOST_URL as string,
  key: process.env.GHOST_CONTENT_API_KEY as string,
  version: "v5.0",
  // @ts-ignore
  makeRequest: ({ url, method, params, headers }) => {
    let apiUrl = new URL(url);

    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (Array.isArray(value)) {
        let arrayValue = value.join(",");
        apiUrl.searchParams.set(key, arrayValue);
      } else {
        apiUrl.searchParams.set(key, value);
      }
    });

    return fetch(apiUrl, { method, headers, next: { revalidate: 0 } })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return { data: await res.json() };
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  },
});

export const preload = () => {
  void getContent();
};

export const getContent = cache(async (): Promise<any> => {
  const archivesRaw = await ghostApi.posts.browse({
    include: "tags",
    fields: ["id", "title", "slug", "excerpt", "published_at", "primary_tag", "feature_image"],
    limit: "all",
    order: "published_at",
  });

  let archives: Archive[] = [];
  let teamMembers: TeamMember[] = [];

  for (const post of archivesRaw) {
    if (post.primary_tag?.slug === "newsletter") {
      const title = cleanTitle(post.title as string);
      const coverageList = getCoverageList(post.excerpt as string);
      const onSeries = getONSeries(post.title as string);
      const date = convertDateFormat(post.published_at as string);
      const numbers = post.title?.match(/\d+/g);
      const editionNo = numbers ? parseInt(numbers[0], 10) : null;

      archives.push({
        title,
        onSeries,
        coverageList,
        slug: post.slug,
        excerpt: post.excerpt,
        date,
        editionNo,
      } as Archive);
    } else if (post.primary_tag?.slug === "team-member") {
      const splitExcerpt = post.excerpt?.split(":");
      const position = splitExcerpt ? splitExcerpt[0] : "";
      const x = splitExcerpt ? splitExcerpt[1] : "";

      teamMembers.push({
        name: post.title,
        displayPicture: post.feature_image,
        position,
        x,
      } as TeamMember);
    }
  }

  archives = archives.sort((a, b) => (a.editionNo as number) - (b.editionNo as number)).reverse();

  return { archives, teamMembers };
});
