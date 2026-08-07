import ImagemProdutoIndividual from "@/src/components/imagem_produto_individual"
import Titulo from "@/src/components/titulo"
import DescricaoProduto from "@/src/components/descricao_produto"
import NomeProduto from "@/src/components/nome_produto"
import PrecoProduto from "@/src/components/preco_produto"
import TamanhoProduto from "@/src/components/tamanho_produto"

export default function Produto(){
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row px-8 py-8 items-center justify-center w-full h-full">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <ImagemProdutoIndividual/>
                    <DescricaoProduto descricao="bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "/>
                </div>
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <NomeProduto nome="Produto"/>
                            <PrecoProduto preco={120.00}/>
                        </div>
                        <TamanhoProduto tamanho="G"/>
                        <button className="text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full hover:scale-105 cursor-pointer duration-75 ease-in-out">Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    )
}