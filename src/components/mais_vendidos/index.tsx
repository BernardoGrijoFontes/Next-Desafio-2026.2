"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay";
import CardProduto from "../card_produto";
import { getMaisVendidos } from "@/actions/home/actions";
import { MaisVendidos } from "@/types/home/home";

type MaisVendidosProps = {
    produtos: MaisVendidos[]
}

export default function Mais_vendidos({produtos}: MaisVendidosProps){

    const [emblaRef] = useEmblaCarousel(
        {
        loop: true,
        },
        [
            Autoplay({
            delay: 2500, 
            stopOnInteraction: false,
            stopOnMouseEnter: true,   
            }),
        ]
    );

    return (
        <div className="bg-[#6271CF] w-full h-136 flex flex-col text-white py-4 items-center justify-center">
            <h1 className="text-[200%] font-extrabold">Mais vendidos</h1>
            <div ref={emblaRef} className="overflow-hidden w-full h-full px-12 py-4">
                <div className="flex h-full">
                    {produtos.map((produto, index) => (
                        <div key={index} className="basis-1/3 shrink-0 flex justify-center">
                            <CardProduto 
                            nome={produto.nome}
                            preco={produto.preco}
                            imagem_um={produto.foto_um}
                            descricao={produto.descricao}
                            imagem_dois={produto.foto_dois}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}