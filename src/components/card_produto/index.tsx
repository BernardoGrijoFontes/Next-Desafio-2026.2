import Link from "next/link"
import Image from "next/image"

type CardProps = {
    nome: string;
    preco: number;
    descricao: string;
    imagem_um: string;
}

export default function CardProduto(props: CardProps){
    return (
        <div className="bg-white flex flex-col py-4 px-4 items-center justify-center border-2 border-black/15 text-black h-full gap-2 rounded-lg w-[80%] hover:scale-105 cursor-pointer duration-75 ease-in-out">
            <Image 
            src={props.imagem_um}
            alt={props.nome}
            width={200}
            height={200}
            />
            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <h1 className="text-[100%] font-extrabold">{props.nome}</h1>
                <h2 className="text-[100%] font-extrabold">R${props.preco.toFixed(2)}</h2>
                <h1 className="text-[100%] text-black/50 font-extrabold overflow-hidden">{props.descricao}</h1>
                <Link href='site/produto' className="flex text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full justify-center items-center hover:scale-105 cursor-pointer duration-75 ease-in-out">Ver mais</Link>
            </div>
        </div>
    )
}