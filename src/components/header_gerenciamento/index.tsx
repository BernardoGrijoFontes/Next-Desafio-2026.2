import { getUsuarioLogado } from "@/actions/home/actions"

export default async function HeaderGerenciamento(){
    const usuario = await getUsuarioLogado()
    return (
        <div className="flex w-full justify-between px-12">
            <h1 className="text-[150%] font-extrabold text-[#6271CF]">{usuario? usuario.nome : "Nome"}</h1>
        </div>
    )
}