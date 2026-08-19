import Link from "next/link"
import Image from "next/image"

export default function Header(){
    return (
        <header className="bg-[#6271CF] sticky top-0 z-10 mx-auto w-[90%] py-8 px-4 md:p-0 mb-8 rounded-full">
            <div className="text-white flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto rounded-lg">
                <Link href='/' className="flex gap-4 items-center hover:scale-110 duration-75 ease-in-out">
                    <Image src={'/assets/Logo_NW.png'}
                    alt="Logo do brechó"
                    width={100}
                    height={100}
                    />   
                </Link>
                <div className="flex gap-16 items-center">
                    <Link href='/produtos' className="font-extrabold hover:scale-110 duration-75 ease-in-out">Produtos</Link>
                    <Link href='/contato' className="font-extrabold hover:scale-110 duration-75 ease-in-out">Contato</Link>
                    <Link href='/admin/gerenciamento' className="font-extrabold hover:scale-110 duration-75 ease-in-out">Gerenciamento</Link>
                    <Link href='/auth/login' className="font-extrabold hover:scale-110 duration-75 ease-in-out">Login</Link>
                    <Link href='/carrinho' className="font-extrabold hover:scale-110 duration-75 ease-in-out">Carrinho</Link>
                </div>
            </div>
        </header>
    )
}