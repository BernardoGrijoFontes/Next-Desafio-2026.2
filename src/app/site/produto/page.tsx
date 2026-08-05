import ImagemProdutoIndividual from "@/src/components/imagem_produto_individual"
import Titulo from "@/src/components/titulo"
import DescricaoProduto from "@/src/components/descricao_produto"
import NomeProduto from "@/src/components/nome_produto"

export default function Produto(){
    return (
        <div className="flex flex-col w-full h-full">
            <Titulo titulo="Produto"/>
            <div className="flex flex-row px-8 py-8 items-center justify-center w-full h-full">
                <div className="flex flex-col w-full h-full items-center justify-center">
                    <ImagemProdutoIndividual/>
                    <DescricaoProduto descricao="bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "/>
                </div>
                <div className="flex flex-col w-full h-full items-center justify-center gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[150%]">Nome</h1>
                        <h1 className="text-[150%]">R$ 150,00</h1>
                    </div>
                    <h1 className="text-[100%]">Tamanho: G</h1>
                </div>
            </div>
        </div>
    )
}