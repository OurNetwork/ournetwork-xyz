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
      fields: ["Name", "Total Points", "Twitter handle", "Last Featured on"],
      sort: [
        { field: "Total Points", direction: "desc" },
        { field: "Last Featured on", direction: "desc" },
      ],
    })
    .all();

  const leaderboard = records
    .map((record) => {
      const name = typeof record.fields["Name"] === "string" ? record.fields["Name"] : "";
      const twitterHandle = Array.isArray(record.fields["Twitter handle"]) && record.fields["Twitter handle"].length > 0 ? record.fields["Twitter handle"][0] : "";
      const totalSubmissions = typeof record.fields["Total Points"] === "number" ? record.fields["Total Points"] : 0;

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
