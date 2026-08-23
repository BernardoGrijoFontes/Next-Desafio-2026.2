import Titulo from "@/src/components/titulo"
import Sidebar from "@/src/components/sidebar"
import HeaderGerenciamento from "@/src/components/header_gerenciamento"
import TabelaGerenciamento from "@/src/components/tabela_gerenciamento"
import Pesquisa from "@/src/components/pesquisa"
import { getTabela } from "@/actions/home/actions"
import Paginacao from "@/src/components/paginacao"

const tabela_gerenciamento = await getTabela()

export default function Gerenciamento(){
    return (
        <main className="flex flex-row w-full min-h-screen">
            <div className="flex flex-col min-h-full">
                <Sidebar/>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center gap-4 py-8">
                <HeaderGerenciamento/>
                <Titulo titulo="Gerenciamento"/>
                <TabelaGerenciamento produtos={tabela_gerenciamento}/>
            </div>
        </main>
    )
}