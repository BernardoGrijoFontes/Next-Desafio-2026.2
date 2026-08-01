import Image from "next/image"

export default function Hero_section(){
    return (
        <div className="bg-[url(/assets/Background_hero_section.png)] bg-cover bg-center w-full h-136 flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-[#6271CF] text-[600%]">NEXT WEAR BRECHÓ</h1>
            <h1 className="font-extrabold text-[#6271CF] text-[400%]">Estilo em movimento</h1>
        </div>
    )
}