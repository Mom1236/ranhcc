import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, service, propertySize, message } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields: name, email, phone' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Rancher Services" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Property Size: ${propertySize}
Message: ${message}
      `.trim(),
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Property Size:</strong> ${propertySize}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('Mailer error:', err);
    return res.status(500).json({ error: err?.message || 'Email failed to send' });
  }
}
