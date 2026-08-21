import Link from "next/link"
import Image from "next/image"
import { getUsuarioLogado } from "@/actions/home/actions"

export default async function Header(){
    const usuario = await getUsuarioLogado()
    return (
        <header className="bg-[#6271CF] sticky top-0 z-10 mx-auto w-[90%] py-8 px-4 md:p-0 mb-8 rounded-full">
            <div className="text-white flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto rounded-lg">
                <Link href='/' className="flex gap-4 items-center hover:scale-110 duration-75 ease-in-out cursor-pointer">
                    <Image src={'/assets/Logo_NW.png'}
                    alt="Logo do brechó"
                    width={100}
                    height={100}
                    />   
                </Link>
                <div className="flex gap-16 items-center">
                    <Link href='/produtos' className="font-extrabold hover:scale-110 duration-75 ease-in-out cursor-pointer">Produtos</Link>
                    <Link href='/contato' className="font-extrabold hover:scale-110 duration-75 ease-in-out cursor-pointer">Contato</Link>
                    <Link href={usuario?'/admin/gerenciamento':'/'} className="font-extrabold hover:scale-110 duration-75 ease-in-out cursor-pointer">Gerenciamento</Link>
                    <Link href={usuario?'/':'/auth/login'} className="font-extrabold hover:scale-110 duration-75 ease-in-out cursor-pointer">Login</Link>
                    <Link href='/carrinho' className="font-extrabold hover:scale-110 duration-75 ease-in-out cursor-pointer">Carrinho</Link>
                </div>
            </div>
        </header>
    )
}