import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_ADDRESS = process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>";
const CONTACT_TO =
  process.env.CONTACT_TO || "mathieu.lopes.moreira@etu.univ-poitiers.fr";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Clé RESEND_API_KEY manquante." },
        { status: 500 }
      );
    }

    // Envoi de l'email
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: CONTACT_TO,
      replyTo: email,
      subject: `[Portfolio] Message de ${name}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F5F0EB; padding: 40px; border: 1px solid #1a1a1a;">
          <div style="border-bottom: 1px solid #C9A96E; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="font-size: 20px; color: #C9A96E; margin: 0; letter-spacing: 2px; text-transform: uppercase;">
              Nouveau message — Portfolio
            </h1>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="font-size: 11px; color: #C9A96E; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px;">Nom</p>
            <p style="font-size: 16px; color: #F5F0EB; margin: 0;">${name}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="font-size: 11px; color: #C9A96E; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px;">Email</p>
            <p style="font-size: 16px; color: #F5F0EB; margin: 0;">
              <a href="mailto:${email}" style="color: #F5F0EB; text-decoration: underline;">${email}</a>
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="font-size: 11px; color: #C9A96E; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 6px;">Message</p>
            <div style="background: #111; padding: 20px; border-left: 2px solid #C9A96E; margin-top: 8px;">
              <p style="font-size: 15px; color: #F5F0EB; margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; margin-top: 30px;">
            <p style="font-size: 11px; color: #666; margin: 0;">
              Envoyé depuis le portfolio — vous pouvez répondre directement à cet email.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi du message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}
