import { Resend } from "resend";

interface ContactData {
  name: string;
  phone: string;
  address: string;
  issue: string;
}

export async function sendContactEmail(data: ContactData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, phone, address, issue } = data;

  await resend.emails.send({
    from: "Drain Pain Website <noreply@drainpainplumbing.com>",
    to: [process.env.CONTACT_EMAIL!],
    subject: `New Service Request — ${name}`,
    html: `
      <h2 style="color:#0A1628;font-family:sans-serif;">New Service Request</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;color:#374151;">Name</td><td style="padding:8px;">${name}</td></tr>
        <tr style="background:#F5F7FA;"><td style="padding:8px;font-weight:bold;color:#374151;">Phone</td><td style="padding:8px;"><a href="tel:${phone}" style="color:#E8651A;">${phone}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;color:#374151;">Address</td><td style="padding:8px;">${address}</td></tr>
        <tr style="background:#F5F7FA;"><td style="padding:8px;font-weight:bold;color:#374151;">Issue</td><td style="padding:8px;">${issue}</td></tr>
      </table>
      <p style="font-family:sans-serif;font-size:12px;color:#6B7280;margin-top:24px;">Sent from drainpainplumbing.com</p>
    `,
  });
}
