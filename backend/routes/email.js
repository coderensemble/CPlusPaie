const express = require("express");
var router = express.Router();

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
    const { name, email, message } = req.body;
    console.log("Received Email Data:", req.body);
  
    const mailOptions = {
      from: 'onboarding@resend.dev',
      to: "adrien.neyron@gmail.com", // Remplacez par votre adresse e-mail
      subject: "Demande de devis",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
  
    try {
      await resend.emails.send(mailOptions);
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send email." });
    }
  });
  
  module.exports = router;