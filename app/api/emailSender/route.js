import nodemailer from "nodemailer"
import { NextResponse } from 'next/server';


export async function POST(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });

    try {
        const body = await req.json();
        const { email, message } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "rayabf5@gmail.com",
                pass: process.env.GMAIL_PASS
            }
        });

        const mailOptions = {
            to: "rayabf5@gmail.com",
            subject: 'Message employeur',
            text: message + `\n\nSend by : ${email}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
        return NextResponse.json({ message: 'Email envoyée' });
    } catch (error) {
        return NextResponse.json({success: false, message: "Une erreur c'est produite. Merci de réessayer"})
    }
}