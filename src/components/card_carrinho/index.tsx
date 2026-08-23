"use client"

import Image from "next/image"
import { Trash2 } from "lucide-react"
import { removerDoCarrinho } from "@/actions/home/actions"

type CardCarrinhoProps = {
    id: number;
    nome: string;
    preco: number;
    tamanho: string;
    imagem: string;
}

export default function CardCarrinho(props: CardCarrinhoProps){
    async function remover(id_passado: number){
        await removerDoCarrinho(id_passado)
        window.location.reload()
    }
    return (
        <div className="flex flex-row justify-center items-center gap-12 border-2 border-[#6271CF]/25 py-4 px-4 rounded-lg hover:scale-105 cursor-pointer duration-75 ease-in-out ">
            <Image
            className="w-60 h-60 object-cover"
                src={props.imagem}
                alt={props.nome}
                width={150}
                height={150}>
            </Image>
            <div className="flex flex-col gap-4">
                <h1>{props.nome}</h1>
                <h1>R${props.preco}</h1>
                <h1>Tamanho: {props.tamanho}</h1>
            </div>
            <div className="flex items-center justify-center rounded-full bg-[#6271CF] py-2 px-2 hover:scale-105 cursor-pointer duration-75 ease-in-out ">
                <button className="hover: cursor-pointer">
                    <Trash2 onClick={() => remover(props.id)} className="text-white"/>
                </button>
            </div>
        </div>
    )
}