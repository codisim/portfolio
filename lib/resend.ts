"use server"
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(data: { name: string; email: string; subject: string; message: string }) {
    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "waliullah9099@gmail.com",
            subject: `Contact Form: ${data.subject}`,
            html: `
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Message:</strong> ${data.message}</p>
            `,
        });
        return { success: true };
    } catch (error) {
        throw new Error("Failed to send email");
    }
}