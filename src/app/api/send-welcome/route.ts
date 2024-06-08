import { sendWelcomeEmail } from "@/lib/onboarding";

export async function POST(request: Request) {
  const { email } = await request.json();
  const apiKey = request.headers.get("x-api-key");

  if (apiKey !== process.env.SEND_EMAIL_TOKEN) {
    return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { status: 401 });
  }

  console.log(`Received request to send welcome email to: ${email}`);

  try {
    await sendWelcomeEmail(email);

    return new Response(
      JSON.stringify({
        success: true,
        email,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, email }), { status: 500 });
  }
}
