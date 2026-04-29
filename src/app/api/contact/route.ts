import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, address, issue } = body;

    if (!name || !phone || !address || !issue) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      console.error("[contact] Missing RESEND_API_KEY or CONTACT_EMAIL env vars");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    await sendContactEmail({ name, phone, address, issue });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
