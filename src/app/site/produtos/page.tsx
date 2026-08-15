import ListaDeProdutos from "@/src/components/lista_produtos"
import Pesquisa from "@/src/components/pesquisa"
import Titulo from "@/src/components/titulo"
import { getProdutos } from "@/actions/home/actions"

const produtos_get = await getProdutos()

export default function Produtos(){
    return (
        <main>
            <Titulo titulo="Produtos"/>
            <Pesquisa/>
            <ListaDeProdutos produtos={produtos_get}/>
        </main>
    )
}