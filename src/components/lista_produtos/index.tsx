import CardProduto from "../card_produto";
import { ProdutosTipo } from "@/types/home/home";

type ProdutosProps = {
    produtos: ProdutosTipo[]
}

export default function ListaDeProdutos({produtos}: ProdutosProps){
    return (
        <div className="flex flex-col items-center justify-center py-8 px-20 gap-8">
            <div className="grid grid-cols-3 w-full gap-16 justify-items-center">
                {produtos.map((produto) => (
                    <CardProduto
                    key={produto.id}
                    id={produto.id}
                    nome={produto.nome}
                    preco={produto.preco}
                    descricao={produto.descricao}
                    imagem_um={produto.foto_um}
                    imagem_dois={produto.foto_dois}
                    />
                ))}
            </div>
        </div>
    )
}