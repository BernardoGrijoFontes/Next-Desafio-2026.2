import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="bg-[#6271CF] w-full bottom-0 text-white py-8 px-4 flex flex-col items-center justify-center gap-8">
            <div className="font-extrabold flex flex-row justify-center items-center gap-2">
                    <Image src={'/assets/Logo_NW.png'}
                    alt="Logo do brechó"
                    width={50}
                    height={50}
                    /> 
                    <div>Next Wear Brechó</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 font-extrabold py-0">
                <div>Redes sociais:</div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <Link href='/'>
                        <Image src={'/assets/Instagram_logo.png'}
                        alt="Link do Instagram"
                        width={50}
                        height={50}
                        /> 
                    </Link>
                    <Link href='/'>
                        <Image src={'/assets/Facebook.png'}
                        alt="Link do Facebook"
                        width={50}
                        height={50}
                        /> 
                    </Link>
                    <Link href='/'>
                        <Image src={'/assets/Twitter.png'}
                        alt="Link do X"
                        width={50}
                        height={50}
                        /> 
                    </Link>
                </div>
            </div>
            <div className="font-extrabold">© 2026 Next Wear — Todos os direitos reservados</div>
        </div>
    )
}