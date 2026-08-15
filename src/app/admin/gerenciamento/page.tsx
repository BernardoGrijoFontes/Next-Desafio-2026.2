import Titulo from "@/src/components/titulo"
import Sidebar from "@/src/components/sidebar"
import HeaderGerenciamento from "@/src/components/header_gerenciamento"

export default function Gerenciamento(){
    return (
        <main className="flex flex-row w-full min-h-screen">
            <div className="flex flex-col min-h-full">
                <Sidebar/>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center">
                <HeaderGerenciamento/>
                <Titulo titulo="Gerenciamento"/>
            </div>
        </main>
    )
}