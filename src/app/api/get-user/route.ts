import GhostAdminApi from "@tryghost/admin-api";

export async function POST(request: Request) {
  const { uuid } = await request.json();

  try {
    const api = new GhostAdminApi({
      url: process.env.GHOST_URL as string,
      key: process.env.GHOST_ADMIN_API_KEY as string,
      version: "v5.0",
    });

    const memberData = await api.members.browse({
      filter: `uuid:'${uuid}'`,
    });

    if (!memberData || !memberData[0]) throw new Error("Member not found.");

    return Response.json({
      success: true,
      email: memberData[0].email,
    });
  } catch (error: any) {
    console.error(error);
    let errorMsg = error.context || error.message || "An error has occured.";
    return Response.json({ success: false, error: errorMsg, uuid });
  }
}
