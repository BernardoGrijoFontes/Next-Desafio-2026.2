import Image from "next/image"
import Link from "next/link"

export default function CarrinhoVazio(){
    return (
        <div className="flex flex-col items-center justify-start min-h-screen">
            <Image
            src={'/assets/Imagem_carrinho_vazio.png'}
            alt="Imagem de roupas"
            width={400}
            height={400}
            />
            <h1 className="text-[150%]">Seu carrinho está vazio...</h1>
            <h1 className="text-[100%]">Quer encontrar sua nova peça favorita?</h1>
            <Link href='/site/produtos' className="text-[100%] font-extrabold text-[#6271CF] underline cursor-pointer">Venha conferir nossos produtos!</Link>
        </div>
    )
}