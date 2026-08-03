import ListaDeProdutos from "@/src/components/lista_produtos"
import Pesquisa from "@/src/components/pesquisa"
import Titulo from "@/src/components/titulo"

export default function Produtos(){
    return (
        <main>
            <Titulo titulo="Produtos"/>
            <Pesquisa/>
            <ListaDeProdutos/>
        </main>
    )
}