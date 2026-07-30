import Link from "next/link"
import Image from "next/image"

const links = [
    {href: '/post', label: 'Publicacoes'},  
    {href: '/admin', label: 'Admin'}
]

export default function Header(){

    return (
        <header className="bg-indigo-950 sticky top-0 z-10 mx-auto w-full py-8 px-4 md:p-0 mb-8">
            <div className="text-white flex flex-wrap items-center justify-beteween w-full md:w-10/12 mx-auto">
                <Link href='/' className="flex gap-4 items-center">
                    <Image src={'/assets/Copilot_20260722_185845.png'}
                    alt="Logo do brechó"
                    width={904}
                    height={904}
                    className="h-20 w-20 rounded-xl"
                    />   
                </Link>
            </div>
        </header>
    )
}