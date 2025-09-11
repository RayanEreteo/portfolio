import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configuration du transporteur SMTP
const TRANSPORTER = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Fonction pour envoyer un email
function sendMail(name: string, email: string, message: string) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Nouveau message de ${name}`,
        text: message,
    };

    return TRANSPORTER.sendMail(mailOptions);
}

// Gestionnaire de la route API
export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
        return NextResponse.json({ success: false, message: "Merci de remplir tous les champs..." }, { status: 400 });
    }

    try {
        await sendMail(name, email, message);
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
        return NextResponse.json({ success: false, message: "Erreur lors de l'envoi de l'email." }, { status: 500 });
    }
    return NextResponse.json({ success: true, message: "Email envoyée avec succès." }, {status: 200});
}
