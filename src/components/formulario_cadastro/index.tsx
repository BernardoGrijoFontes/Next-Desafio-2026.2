import Image from "next/image"
import Link from "next/link"

export default function PaginaCadastro(){
    return (
            <form className="flex flex-col w-full min-h-screen justify-center items-center gap-12">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[200%] text-[#6271CF] font-extrabold">Cadastro</h1>
                    <div className="text-[100%] text-black flex flex-row gap-1">Já possui uma conta?<Link href='/' className="text-[#6271CF] underline cursor-pointer">Faça login</Link></div>
                </div>
                <div className="flex flex-col justify-center items-center w-[60%] gap-8">
                    <div className="flex flex-col justify-center w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">Nome completo:</h1>
                        <input 
                        name="nome"
                        id="nome"
                        type="text"
                        className="bg-white border-2 border-black w-full text-lg px-2 rounded-lg"
                        placeholder="Digite seu nome completo"
                        ></input>
                    </div>
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
                    <button className="text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full hover:scale-102 cursor-pointer duration-75 ease-in-out">Fazer cadastro</button>
                </div>
            </form>
    )
}