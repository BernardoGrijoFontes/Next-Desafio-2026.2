import Image from "next/image"
import Link from "next/link"

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
    }
]

export default function ProdutosEmDestaque(){
    return (
            <div className="w-full h-136 flex flex-col text-[#6271CF] py-4 items-center justify-center">
                <h1 className="text-[200%] font-extrabold">Produtos em destaque</h1>
                <div className="grid grid-cols-3 w-full h-full px-12 py-4">
                    {produtos.map((produto, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="bg-white flex flex-col py-4 px-4 items-center justify-center border-2 border-black/15 text-black h-full gap-2 rounded-lg w-[80%] hover:scale-105 cursor-pointer duration-75 ease-in-out">
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
    )
}