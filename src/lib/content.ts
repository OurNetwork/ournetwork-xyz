import "server-only";
import { Archive, ContributorCalendar, TeamMember } from "@/types";
import { ghostApi } from "./ghost";
import { cache } from "react";
import { cleanTitle, convertDateFormat, getCoverageList, getONSeries } from "./utils";

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
  let contributorCalendar: ContributorCalendar[] = [];

  for (const post of archivesRaw) {
    if (post.primary_tag?.name === "Newsletter") {
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
    } else if (post.primary_tag?.slug === "contributor-calendar") {
      const date = convertDateFormat(post.published_at as string);

      contributorCalendar.push({
        title: post.title,
        image: post.feature_image,
        date,
      } as ContributorCalendar);
    }
  }

  archives = archives.sort((a, b) => (a.editionNo as number) - (b.editionNo as number)).reverse();
  contributorCalendar = contributorCalendar.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { archives, teamMembers, contributorCalendar };
});

export const getPost = cache(async (slug: string): Promise<any> => {
  return await ghostApi.posts.read({ slug }).catch((error) => {
    console.error("Fetch error:", error);
  });
});
