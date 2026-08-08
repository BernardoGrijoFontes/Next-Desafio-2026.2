"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay";
import CardProduto from "../card_produto";

export default function Mais_vendidos(){

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

  const produtos = [
    {
    id: 1,
    nome: "Produto 1",
    preco: 210.00,
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 2,
    nome: "Produto 2",
    preco: 210.00,
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 3,
    nome: "Produto 3",
    preco: 210.00,
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 4,
    nome: "Produto 4",
    preco: 210.00,
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 5,
    nome: "Produto 5",
    preco: 210.00,
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 6,
    nome: "Produto 6",
    preco: 270.00,
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    }
  ];

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
                            imagem_um={produto.imagem}
                            descricao={produto.descricao}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}