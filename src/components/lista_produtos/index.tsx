import Image from "next/image";

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

export default function ListaDeProdutos(){
    return (
        <div className="flex flex-col items-center justify-center py-8 px-4">
            <h1 className="text-[200%] font-extrabold text-[#6271CF]">Mais vendidos</h1>
            {produtos.map((produto) => (
                <div key={produto.id} className="bg-white flex flex-col py-4 px-4 items-center justify-center text-black h-full gap-2 rounded-lg w-[80%] border-2 border-[#6271CF] hover:scale-105 cursor-pointer duration-75 ease-in-out">
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
                        <button className="text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full hover:scale-105 cursor-pointer duration-75 ease-in-out">Ver mais</button>
                    </div>
                </div> 
            ))}
        </div>
    )
}