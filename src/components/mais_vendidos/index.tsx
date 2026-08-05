"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

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
    preco: "R$ 100,00",
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 2,
    nome: "Produto 2",
    preco: "R$ 120,00",
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 3,
    nome: "Produto 3",
    preco: "R$ 150,00",
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 4,
    nome: "Produto 4",
    preco: "R$ 180,00",
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 5,
    nome: "Produto 5",
    preco: "R$ 210,00",
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 6,
    nome: "Produto 6",
    preco: "R$ 270,00",
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
                            <div className="bg-white flex flex-col py-4 px-4 items-center justify-center text-black h-full gap-2 rounded-lg w-[80%] hover:scale-105 cursor-pointer duration-75 ease-in-out">
                                <Image 
                                src={produto.imagem}
                                alt={produto.nome}
                                width={200}
                                height={200}
                                />
                                <div className="flex flex-col items-center justify-center gap-4 w-full">
                                    <h1 className="text-[100%] font-extrabold">{produto.nome}</h1>
                                    <h2 className="text-[100%] font-extrabold">{produto.preco}</h2>
                                    <h1 className="text-[100%] text-black/50 font-extrabold overflow-hidden">{produto.descricao}</h1>
                                    <Link href='site/produto' className="flex text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full justify-center items-center hover:scale-105 cursor-pointer duration-75 ease-in-out">Ver mais</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}