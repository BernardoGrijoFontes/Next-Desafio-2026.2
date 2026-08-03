import Image from "next/image"
import Link from "next/link"
import { CircleArrowLeft } from "lucide-react"

export default function FormularioLogin(){
    return (
            <form className="flex flex-col w-full min-h-screen justify-center items-center gap-12">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[200%] text-[#6271CF] font-extrabold">Login</h1>
                    <div className="text-[100%] text-black flex flex-row gap-1">Não possui uma conta?<Link href='/' className="text-[#6271CF] underline cursor-pointer">Cadastre-se</Link></div>
                </div>
                <div className="flex flex-col justify-center items-center w-[60%] gap-8">
                    <div className="flex flex-col justify-center w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">E-mail:</h1>
                        <input 
                        name="email"
                        id="email"
                        type="text"
                        className="bg-white border-2 border-black w-full text-lg px-2 rounded-lg"
                        placeholder="Digite seu e-mail"
                        ></input>
                    </div>
                    <div className="flex flex-col justify-center w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">Senha:</h1>
                        <input 
                        name="senha"
                        id="senha"
                        type="text"
                        className="bg-white border-2 border-black w-full text-lg px-2 rounded-lg"
                        placeholder="Digite seu e-mail"
                        ></input>
                    </div>
                    <button className="text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full hover:scale-102 cursor-pointer duration-75 ease-in-out">Fazer login</button>
                </div>
            </form>
    )
}