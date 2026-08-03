import Link from "next/link"
import { CircleArrowLeft } from "lucide-react"

export default function ImagemAuth(){
    return (
            <div className="bg-[url(/assets/Imagem_login_desktop.png)] bg-cover bg-center w-full min-h-screen py-4 px-4">
                <Link href='/'>
                    <CircleArrowLeft className="w-15 h-15 text-white hover:scale-105 cursor-pointer duration-75 ease-in-out"/>
                </Link>
            </div>
    )
}