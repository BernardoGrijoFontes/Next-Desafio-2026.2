import CardProduto from "../card_produto"
import getEmDestaque from "@/actions/home/actions"
import { EmDestaque } from "@/types/home/home"

type EmDestaqueProps = {
    produtos: EmDestaque[]
}

export default function ProdutosEmDestaque({produtos}: EmDestaqueProps){
    return (
            <div className="w-full h-136 flex flex-col text-[#6271CF] py-4 items-center justify-center">
                <h1 className="text-[200%] font-extrabold">Em destaque</h1>
                <div className="grid grid-cols-3 w-full h-full px-12 py-4">
                    {produtos.map((produto, index) => (
                        <div key={index} className="flex justify-center">
                            <CardProduto
                            nome={produto.nome}
                            imagem_um={produto.foto_um}
                            descricao={produto.descricao}
                            preco={produto.preco}
                            imagem_dois={produto.foto_dois}
                            />
                        </div>
                    ))}
                </div>
        </div>
    )
}