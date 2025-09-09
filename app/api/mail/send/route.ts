import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {return NextResponse.json({ success: false, message: "Merci de remplir tous les champs..." }, { status: 400 })}

    return NextResponse.json({ success: true, message: "Email envoyée." }, {status: 200});
}
