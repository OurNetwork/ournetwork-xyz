import GhostAdminApi from "@tryghost/admin-api";

export async function POST(request: Request) {
  const { slug } = await request.json();
  console.log({ hi: slug });

  try {
    const api = new GhostAdminApi({
      url: process.env.GHOST_URL as string,
      key: process.env.GHOST_ADMIN_API_KEY as string,
      version: "v5.0",
    });

    console.log({ api });

    const retrievedDraft = await api.posts.read({ id: slug }, { formats: ["html"] });
    console.log({ retrievedDraft });

    if (!retrievedDraft || !retrievedDraft.id) throw new Error("Draft not found.");

    return Response.json({
      success: true,
      draft: {
        title: retrievedDraft.title,
        excerpt: retrievedDraft.custom_excerpt,
        published_at: retrievedDraft.published_at,
        feature_image: retrievedDraft.feature_image,
        html: retrievedDraft.html,
      },
    });
  } catch (error: any) {
    console.error(error);
    let errorMsg = error.context || error.message || "An error has occured.";
    return Response.json({ success: false, error: errorMsg });
  }
}
