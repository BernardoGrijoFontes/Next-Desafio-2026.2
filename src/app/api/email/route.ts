import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { nome, email, assunto, mensagem } = await req.json();

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "b3rnardogfontes@gmail.com",
        subject: assunto,
        html: `
            <h2>Mensagem de ${nome}</h2>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Mensagem:</strong> ${mensagem}</p>
        `,
    });

    return Response.json({ sucesso: true });
}