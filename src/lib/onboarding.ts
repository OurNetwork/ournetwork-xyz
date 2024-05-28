import { ServerClient } from "postmark";
import { ghostApi } from "./ghost";

const getLatestIssues = async () => {
  const issuesRaw = await ghostApi.posts.browse({
    filter: "tags.slug:newsletter",
    fields: ["id", "title", "slug", "published_at", "primary_tag"],
    limit: 3,
  });

  let issues: any[] = [];

  for (const issue of issuesRaw) {
    const title = issue.title as string;
    const url = `https://ournetwork.xyz/p/${issue.slug}`;

    issues.push({
      title,
      url,
    });
  }

  return issues;
};

export const sendWelcomeEmail = async (destinationEmail: string) => {
  const postmark = new ServerClient(process.env.POSTMARK_SERVER_TOKEN as string);

  try {
    // get top three most recent issues from ghost
    const issues = await getLatestIssues();

    // send email with postmark
    await postmark.sendEmailWithTemplate({
      From: "cody@ournetwork.xyz",
      To: destinationEmail,
      TemplateAlias: "ournetwork-welcome",
      TemplateModel: {
        issue_1_url: issues[0].url,
        issue_1_title: issues[0].title,
        issue_2_url: issues[1].url,
        issue_2_title: issues[1].title,
        issue_3_url: issues[2].url,
        issue_3_title: issues[2].title,
      },
    });

    return {
      success: true,
    };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
    };
  }
};
