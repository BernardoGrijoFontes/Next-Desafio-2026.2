import Image from "next/image"

export default function RedesSociais(){
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full flex flex-col px-4 py-4 justify-center text-white bg-[#6271CF] gap-4 rounded-lg">
                <h1 className="text-[150%] font-extrabold">Fale conosco:</h1>
                <div className="flex flex-row gap-4 px-4 items-center hover:scale-102 cursor-pointer duration-75 ease-in-out">
                    <Image src={'/assets/Instagram_logo.png'}
                    alt="Logo do Instagram"
                    width={30}
                    height={30}
                    /> 
                    <h1 className="font-extrabold text-[100%]">Instagram</h1>
                </div>
                <div className="flex flex-row gap-4 px-4 items-center hover:scale-102 cursor-pointer duration-75 ease-in-out">
                    <Image src={'/assets/Facebook.png'}
                    alt="Logo do Instagram"
                    width={30}
                    height={30}
                    /> 
                    <h1 className="font-extrabold text-[100%]">Facebook</h1>
                </div>
                <div className="flex flex-row gap-4 px-4 items-center hover:scale-102 cursor-pointer duration-75 ease-in-out">
                    <Image src={'/assets/Twitter.png'}
                    alt="Logo do Instagram"
                    width={30}
                    height={30}
                    /> 
                    <h1 className="font-extrabold text-[100%]">X</h1>
                </div>
                <div className="flex flex-row gap-4 px-4 items-center hover:scale-102 cursor-pointer duration-75 ease-in-out">
                    <Image src={'/assets/Email.png'}
                    alt="Logo gmail"
                    width={30}
                    height={30}
                    /> 
                    <h1 className="font-extrabold text-[100%]">nextwear@gmail.com</h1>
                </div>
                <div className="flex flex-row gap-4 px-4 items-center hover:scale-102 cursor-pointer duration-75 ease-in-out">
                    <Image src={'/assets/Telefone_logo.png'}
                    alt="Imagem de um telefone"
                    width={30}
                    height={30}
                    /> 
                    <h1 className="font-extrabold text-[100%]">(32) 123456789</h1>
                </div>
            </div>
        </div>
    )
}