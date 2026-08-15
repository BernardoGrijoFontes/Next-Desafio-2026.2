import Link from "next/link"
import Image from "next/image"
import { LogOut } from "lucide-react"
import { Home } from "lucide-react"
import { ShoppingBag } from "lucide-react"

export default function Sidebar(){
    return (
        <div className="flex flex-col w-full h-full bg-[#6271CF] items-center">
            <Link href='/' className="flex gap-4 items-center hover:scale-110 duration-75 ease-in-out">
                <Image src={'/assets/Logo_NW.png'}
                alt="Logo do brechó"
                width={100}
                height={100}
                />   
            </Link>
            <div className="flex flex-col gap-8 items-center justify-center h-[75%] py-4">
                <Home
                className="text-white"
                width={40}
                height={40}
                />
                <ShoppingBag
                className="text-white"
                width={40}
                height={40}
                />
            </div>
            <LogOut 
            className="text-white"
            width={40}
            height={40}
            />
        </div>
    )
}