import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: process.env.EMAIL_USER,  // Set in .env file
        pass: process.env.EMAIL_PASS,  // Set in .env file
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), { status: 500 });
  }
}