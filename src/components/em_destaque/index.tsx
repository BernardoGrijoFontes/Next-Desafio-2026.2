import CardProduto from "../card_produto"

  const produtos = [
    {
    id: 1,
    nome: "Produto 1",
    preco: 150.00,
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 2,
    nome: "Produto 2",
    preco: 150.00,
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    },
    {
    id: 3,
    nome: "Produto 3",
    preco: 150.00,
    descricao: "Descrição",
    imagem: "/assets/Logo_NW.png",
    }
]

export default function ProdutosEmDestaque(){
    return (
            <div className="w-full h-136 flex flex-col text-[#6271CF] py-4 items-center justify-center">
                <h1 className="text-[200%] font-extrabold">Em destaque</h1>
                <div className="grid grid-cols-3 w-full h-full px-12 py-4">
                    {produtos.map((produto, index) => (
                        <div key={index} className="flex justify-center">
                            <CardProduto
                            nome={produto.nome}
                            imagem_um={produto.imagem}
                            descricao={produto.descricao}
                            preco={produto.preco}
                            />
                        </div>
                    ))}
                </div>
        </div>
    )
}