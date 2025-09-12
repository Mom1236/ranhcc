import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, propertySize, message } = req.body || {};
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields: name, email, phone" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || "gmail",
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

    return res.json({ success: true });
  } catch (err: any) {
    console.error("Mailer error:", err);
    return res.status(500).json({ error: "Email failed to send" });
  }
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
