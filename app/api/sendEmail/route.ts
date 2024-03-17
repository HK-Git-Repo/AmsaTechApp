import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_AWS_HOST,
  port: Number(process.env.MAIL_AWS_PORT),
  secure: true,
  auth: {
    user: process.env.MAIL_AWS_USER,
    pass: process.env.MAIL_AWS_PASS,
  },
});

export async function POST(request: Request) {
  if( request.method === "POST" ) {
    const { name, email, typeActivite, nomSociete, adresse, ville, tel, message } = await request.json();
    try {
      await transporter.sendMail({
        from: process.env.MAIL_SENDER_RECEVER,
        to: process.env.MAIL_SENDER_RECEVER,
        subject: 'AmsaTech.ma utilisateur vient de vous contacter',
        text: message,
        html: `<p>Contact Contenue</p><br>
          <p><strong>Name: </strong>${name}</p>
          <p><strong>Email: </strong>${email}</p>
          <p><strong>Type Activité: </strong>${typeActivite}</p>
          <p><strong>Nom Société: </strong>${nomSociete}</p>
          <p><strong>Adresse: </strong>${adresse}</p>
          <p><strong>Ville: </strong>${ville}</p>
          <p><strong>Tél: </strong>${tel}</p>
          <p><strong>Message: </strong>${message}</p>`,
      });
      return NextResponse.json(
        { success: true, message: 'Email sent successfully!' },
        { status: 200 }
      );
    } catch (error : any) {
      return NextResponse.json(
        { success: false, message: `Error sending mail: ${error.message}` },
        { status: 500 }
      );      
    }
  } else {
    return NextResponse.json({ message: "Method Not Allowed" } , { status: 405 } );
  }
};