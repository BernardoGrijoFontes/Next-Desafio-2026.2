import CardProduto from "../card_produto";

const produtos = [
    {
        id: 1,
        nome: "Produto 1",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 2,
        nome: "Produto 2",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 3,
        nome: "Produto 3",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 4,
        nome: "Produto 4",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 5,
        nome: "Produto 5",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 6,
        nome: "Produto 6",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 7,
        nome: "Produto 7",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 8,
        nome: "Produto 7",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 9,
        nome: "Produto 7",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 10,
        nome: "Produto 7",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 11,
        nome: "Produto 7",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 12,
        nome: "Produto 7",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
    {
        id: 13,
        nome: "Produto 7",
        preco: 140.00,
        descricao: "Descrição",
        imagem: "/assets/Logo_NW.png",
        imagem_outra: "/assets/Facebook.png",
    },
];

export default function ListaDeProdutos(){
    return (
        <div className="flex flex-col items-center justify-center py-8 px-20 gap-8">
            <div className="grid grid-cols-3 w-full gap-16 justify-items-center">
                {produtos.map((produto) => (
                    <CardProduto
                    key={produto.id}
                    nome={produto.nome}
                    preco={produto.preco}
                    descricao={produto.descricao}
                    imagem_um={produto.imagem}
                    imagem_dois={produto.imagem_outra}
                    />
                ))}
            </div>
        </div>
    )
}