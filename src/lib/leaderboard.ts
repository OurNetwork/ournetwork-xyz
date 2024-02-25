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
      fields: ["Name", "Total Submissions", "Twitter handle"],
      sort: [{ field: "Total Submissions", direction: "desc" }],
    })
    .all();

  const leaderboard = records
    .map((record) => {
      const name = record.fields["Name"] as string;
      const twitterHandle = record.fields["Twitter handle"] as string;
      const totalSubmissions = record.fields["Total Submissions"] as number;

      return {
        name,
        twitterHandle,
        totalSubmissions,
      };
    })
    .filter((record) => record.name);

  return leaderboard;
});
