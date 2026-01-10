"use server";

import { Resend } from "resend";

const resend = new Resend("re_anVSoYYa_ChmdMfDnshKGb7wiT5Eiw5mR");

export async function sendEmail(formData: { 
  name: string; 
  email: string; 
  subject: string; 
  message: string 
}) {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "waliullah9099@gmail.com", 
      subject: formData.subject,
      html: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false, error };
  }
}