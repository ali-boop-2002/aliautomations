import { NextResponse } from 'next/server';

type FormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

const RESEND_API_URL = 'https://api.resend.com/emails';

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as FormPayload;

    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.FORM_NOTIFICATION_TO_EMAIL;
    const fromEmail =
      process.env.FORM_NOTIFICATION_FROM_EMAIL ||
      'Ali Automations <onboarding@resend.dev>';

    if (!resendApiKey || !toEmail) {
      return NextResponse.json(
        { error: 'Email service is not configured on the server.' },
        { status: 500 }
      );
    }

    const html = `
      <h2>New Form Submission</h2>
      <p><strong>First Name:</strong> ${escapeHtml(body.firstName)}</p>
      <p><strong>Last Name:</strong> ${escapeHtml(body.lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(body.phone || '-')}</p>
      <p><strong>Company:</strong> ${escapeHtml(body.company || '-')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(body.message).replace(/\n/g, '<br/>')}</p>
    `;

    const resendResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: body.email,
        subject: `New form submission from ${body.firstName} ${body.lastName}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return NextResponse.json(
        { error: `Failed to send email: ${errorText}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request payload' },
      { status: 400 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
