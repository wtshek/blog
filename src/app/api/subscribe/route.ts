import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextRequest, NextResponse } from "next/server";

const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const API_KEY = process.env.MAILCHIMP_API_KEY;
const DATACENTER = process.env.MAILCHIMP_API_SERVER;

mailchimp.setConfig({
  apiKey: API_KEY,
  server: DATACENTER,
});

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const response = await mailchimp.lists.addListMember(AUDIENCE_ID || "", {
      email_address: body.email || "",
      status: "subscribed",
    });

    if (response.status === 400) {
      return NextResponse.json(
        {
          error: `There was an error subscribing to the newsletter.`,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({ error: "" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as { message: string })?.message || error?.toString() },
      { status: 501 }
    );
  }
}
