import GhostAdminApi from "@tryghost/admin-api";

export async function POST(request: Request) {
  const { email } = await request.json();
  console.log({ Unsubscribe: email });

  try {
    const api = new GhostAdminApi({
      url: process.env.GHOST_URL as string,
      key: process.env.GHOST_ADMIN_API_KEY as string,
      version: "v5.0",
    });

    const memberData = await api.members.browse({ filter: `email:${email}` });

    if (!memberData || !memberData[0]) throw new Error("Member not found.");

    const data = await api.members.delete({
      id: memberData[0].id,
    });

    return Response.json({
      success: true,
      email,
    });
  } catch (error: any) {
    console.error(error);
    return Response.json({ success: false, error: error.context || error.message, email });
  }
}
