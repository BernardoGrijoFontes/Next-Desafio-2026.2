import Image from "next/image"

export default function RedesSociais(){
    return (
        <div className="w-full py-4 flex items-center justify-center">
            <div className="w-[40%] flex flex-col px-4 py-4 justify-center text-white bg-[#6271CF] gap-4 rounded-lg">
                <h1 className="text-[150%] font-extrabold">Nossas redes sociais:</h1>
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
            </div>
        </div>
    )
}