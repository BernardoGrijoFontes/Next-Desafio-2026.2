import Image from "next/image"

export default function PaginaLogin(){
    return (
        <div className="flex flex-row w-full min-h-screen">
            <div className="bg-[url(/assets/Imagem_login_desktop.png)] bg-cover bg-center w-full min-h-screen">
            </div>
            <div className="flex flex-col w-full min-h-screen justify-center items-center">
                <h1 className="text-[200%] text-[#6271CF] font-extrabold">Login</h1>
                <h1 className="text-[100%] text-black flex flex-row gap-1">Não possui uma conta?<h1 className="text-[#6271CF] underline cursor-pointer">Cadastre-se</h1></h1>
            </div>
        </div>
    )
}