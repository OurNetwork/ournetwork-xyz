import GhostAdminApi from "@tryghost/admin-api";

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const api = new GhostAdminApi({
      url: process.env.GHOST_URL as string,
      key: process.env.GHOST_ADMIN_API_KEY as string,
      version: "v5.0",
    });

    const member = { email };
    const options = { send_email: false };

    const data = await api.members.add(member, options);

    if (!data || !data.email) throw new Error("An error has occured.");

    return Response.json({
      success: true,
      email: data.email,
    });
  } catch (error: any) {
    console.error(error);

    let errorMsg = error.context || error.message;
    if (error.type === "ValidationError") {
      errorMsg = "Already subscribed!";
    }

    return Response.json({ success: false, error: errorMsg, email });
  }
}
