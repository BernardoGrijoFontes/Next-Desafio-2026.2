export default function EnviarEmail(){
    return (
        <div className="flex flex-col py-4 items-center justify-center w-full gap-8">
            <h1 className="text-[200%] font-extrabold text-[#6271CF]">Contato</h1>
            <form autoComplete="off" className="w-[60%] border-4 border-[#6271CF] rounded-lg bg-[#6271CF]/25">
                <h1 className="w-full px-4 text-[150%] font-extrabold bg-[#6271CF] text-white">Envie sua mensagem</h1>
                <div className="flex flex-col w-full h-full items-center justify-center px-8 py-4">
                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">Nome:</h1>
                        <input 
                        name="nome_enviar"
                        id="nome_enviar"
                        type="text"
                        className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                        placeholder="Digite seu nome"
                        ></input>
                    </div>
                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">E-mail:</h1>
                        <input 
                        name="email_enviar"
                        id="email_enviar"
                        type="text"
                        className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                        placeholder="Digite seu e-mail"
                        ></input>
                    </div>
                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">Assunto:</h1>
                        <input 
                        name="assunto_enviar"
                        id="assunto_enviar"
                        type="text"
                        className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                        placeholder="Informe o assunto"
                        ></input>
                    </div>
                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">Assunto:</h1>
                        <textarea
                        id="mensagem_enviar"
                        name="mensagem_enviar"
                        rows={8}
                        placeholder="Digite sua mensagem"
                        className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                        ></textarea>
                    </div>
                    <button className="text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full hover:scale-102 cursor-pointer duration-75 ease-in-out">Enviar mensagem</button>
                </div>
            </form>
        </div>
    )
}