"use client";

export default function EnviarEmail() {

    async function enviar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        await fetch("/api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: form.get("nome_enviar"),
                email: form.get("email_enviar"),
                assunto: form.get("assunto_enviar"),
                mensagem: form.get("mensagem_enviar"),
            }),
        });

        alert("Mensagem enviada!");
    }

    return (
        <div className="flex flex-col py-4 items-center justify-center w-full gap-8">

            <form
                onSubmit={enviar}
                autoComplete="off"
                className="w-[60%] border-4 border-[#6271CF] rounded-lg bg-[#6271CF]/25"
            >

                <h1 className="w-full px-4 text-[150%] font-extrabold bg-[#6271CF] text-white">
                    Envie sua mensagem
                </h1>

                <div className="flex flex-col w-full items-center justify-center px-8 py-4">

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">
                            Nome:
                        </h1>

                        <input
                            name="nome_enviar"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">
                            E-mail:
                        </h1>

                        <input
                            name="email_enviar"
                            type="email"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">
                            Assunto:
                        </h1>

                        <input
                            name="assunto_enviar"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            placeholder="Informe o assunto"
                            required
                        />
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">
                            Mensagem:
                        </h1>

                        <textarea
                            name="mensagem_enviar"
                            rows={8}
                            placeholder="Digite sua mensagem"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full hover:scale-102 cursor-pointer"
                    >
                        Enviar mensagem
                    </button>

                </div>
            </form>
        </div>
    );
}