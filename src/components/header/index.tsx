import Link from "next/link"
import Image from "next/image"

const links = [
    {href: '/post', label: 'Publicacoes'},  
    {href: '/admin', label: 'Admin'}
]

export default function Header(){
    return (
        <header className="bg-[#6271CF] sticky top-0 z-10 mx-auto w-full py-8 px-4 md:p-0 mb-8 rounded-full">
            <div className="text-white flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto rounded-lg">
                <Link href='/' className="flex gap-4 items-center hover:scale-110">
                    <Image src={'/assets/Logo_NW.png'}
                    alt="Logo do brechó"
                    width={100}
                    height={100}
                    />   
                </Link>
                <div className="flex gap-16 items-center">
                    <Link href='/' className="font-extrabold hover:scale-110">Produtos</Link>
                    <Link href='/' className="font-extrabold hover:scale-110">Carrinho</Link>
                    <Link href='/' className="font-extrabold hover:scale-110">Login</Link>
                    <Link href='/' className="font-extrabold hover:scale-110">Gerenciamento</Link>
                </div>
            </div>
        </header>
    )
}