import { ghostAdminApi } from "./ghost";

export const getDraft = async (slug: string) => {
  const retrievedDraft = await ghostAdminApi.posts.read({ id: slug }, { formats: ["html"] });
  let draft = {
    title: retrievedDraft.title,
    excerpt: retrievedDraft.custom_excerpt,
    published_at: retrievedDraft.published_at,
    feature_image: retrievedDraft.feature_image,
    html: retrievedDraft.html,
  };

  return draft;
};
