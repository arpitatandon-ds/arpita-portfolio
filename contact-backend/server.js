
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { Resend } = require("resend");

const app = express();
app.set("trust proxy", 1);

const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: (
      process.env.FRONTEND_URL || "http://localhost:5173"
    )
      .split(",")
      .map((url) => url.trim()),
    methods: ["GET", "POST"],
  })
);

app.use(express.json({ limit: "10kb" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    message: "Too many messages. Please try again after 15 minutes.",
  },
});

app.get("/", (req, res) => {
  res.send("Portfolio contact API is running.");
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        message: "Please provide your name, email, and message.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (
      !cleanName ||
      cleanName.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
      cleanEmail.length > 254 ||
      !cleanMessage ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        message: "Please check your details and try again.",
      });
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.RECEIVER_EMAIL
    ) {
      console.error("Resend or receiver email is not configured.");

      return res.status(500).json({
        message: "Email service is not configured yet.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.RECEIVER_EMAIL],
      replyTo: cleanEmail,
      subject: `Portfolio message from ${cleanName}`,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email failed:", error.message);

      return res.status(500).json({
        message: "Could not send your message. Please try again later.",
      });
    }

    console.log("Contact email sent:", data?.id);

    return res.status(200).json({
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact email failed:", error.message);

    return res.status(500).json({
      message: "Could not send your message. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running on port ${PORT}`);
});
