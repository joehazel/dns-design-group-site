import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, projectType, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'DNS Design Group <onboarding@resend.dev>',
      to: ['joe@webhazel.com', 'debmissimo@gmail.com'],
      replyTo: email,
      subject: `New inquiry from ${firstName} ${lastName} — ${projectType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2C2C2A;">
          <div style="border-bottom: 2px solid #BA7517; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 500;">New Project Inquiry</h2>
            <p style="margin: 4px 0 0; color: #888780; font-size: 14px;">DNS Design Group — Contact Form</p>
          </div>

          <table style="width: 100%; font-size: 15px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888780; width: 130px;">Name</td>
              <td style="padding: 8px 0; font-weight: 500;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888780;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #BA7517;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888780;">Project type</td>
              <td style="padding: 8px 0;">${projectType}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #F9F5EF; border-radius: 4px; border-left: 3px solid #BA7517;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #888780; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <p style="margin-top: 32px; font-size: 12px; color: #B4B2A9;">
            Reply directly to this email to respond to ${firstName}.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
