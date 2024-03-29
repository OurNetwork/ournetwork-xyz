import { cache } from "react";
import Airtable from "airtable";
import "server-only";
import { Contributor } from "@/types";

export const preload = () => {
  void getLeaderboard();
};

export const getLeaderboard = cache(async (): Promise<Contributor[]> => {
  const airtable = new Airtable();
  const records = await airtable
    .base(process.env.AIRTABLE_BASE_ID as string)
    .table(process.env.AIRTABLE_TABLE_ID as string)
    .select({
      fields: ["Name", "Total Submissions", "Twitter handle", "Last Featured on"],
      sort: [
        { field: "Total Submissions", direction: "desc" },
        { field: "Last Featured on", direction: "desc" },
      ],
    })
    .all();

  const leaderboard = records
    .map((record) => {
      const name = typeof record.fields["Name"] === "string" ? record.fields["Name"] : "";
      const twitterHandle = typeof record.fields["Twitter handle"] === "string" ? record.fields["Twitter handle"] : "";
      const totalSubmissions = typeof record.fields["Total Submissions"] === "number" ? record.fields["Total Submissions"] : 0;

      const formattedTwitterHandle = twitterHandle ? twitterHandle.slice(1) : "";

      return {
        name,
        twitterHandle: formattedTwitterHandle,
        totalSubmissions,
      };
    })
    .filter((record) => record.name && record.totalSubmissions > 0);

  return leaderboard;
});
