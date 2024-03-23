export async function POST(request: Request) {
  const { email } = await request.json();

  const mailChimpData = {
    members: [
      {
        email_address: email,
        status: "subscribed",
      },
    ],
  };

  const res = await fetch(`https://${process.env.MAILCHIMP_DOMAIN}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `auth ${process.env.MAILCHIMP_API_KEY}`,
    },
    body: JSON.stringify(mailChimpData),
  });

  const data = await res.json();

  return Response.json(data);
}
