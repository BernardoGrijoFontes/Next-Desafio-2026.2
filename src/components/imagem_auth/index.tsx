import Link from "next/link"
import { CircleArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ImagemAuth(){
    const router = useRouter();
    return (
            <div className="bg-[url(/assets/Imagem_login_desktop.png)] bg-cover bg-center w-full min-h-screen py-4 px-4">
                <button onClick={() => router.back()}>
                    <CircleArrowLeft className="w-15 h-15 text-white hover:scale-105 cursor-pointer duration-75 ease-in-out"/>
                </button>
            </div>
    )
}