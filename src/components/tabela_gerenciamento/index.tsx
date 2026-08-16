import Image from "next/image"
import { GerenciamentoTabela } from "@/types/home/home"
import { Pencil } from "lucide-react"
import { Eye } from "lucide-react"
import { Trash2 } from "lucide-react"

type GerenciamentoProps = {
    produtos: GerenciamentoTabela[]
}

export default function TabelaGerenciamento({produtos}: GerenciamentoProps){
    return (
        <table className="bg-[#6271CF]/25 table-fixed border-separate border-spacing-4 rounded-2xl">
        <thead>
            <tr className="text-[#6271CF]">
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Descrição</th>
            <th>Tamanho</th>
            <th>Foto frente</th>
            <th>Foto trás</th>
            <th>Opções</th>
            </tr>
        </thead>
        <tbody>

            {produtos.map((produto, index) => (
                <tr key={index} className="text-center align-middle">
                    <td className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{produto.id}</td>
                    <td className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{produto.nome}</td>
                    <td className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{produto.preco}</td>
                    <td className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{produto.descricao}</td>
                    <td className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{produto.tamanho}</td>
                    <td>
                        <Image
                        src={produto.foto_um}
                        alt={produto.nome}
                        width={40}
                        height={40}
                        />
                    </td>
                    <td>
                        <Image
                        src={produto.foto_dois}
                        alt={produto.nome}
                        width={40}
                        height={40}
                        />
                    </td>
                    <td>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <div><Pencil className="w-5 h-5 hover:scale-105 cursor-pointer duration-75 ease-in-out"/></div>
                            <div><Eye className="w-6 h-6 hover:scale-105 cursor-pointer duration-75 ease-in-out"/></div>
                            <div><Trash2 className="w-5 h-5 hover:scale-105 cursor-pointer duration-75 ease-in-out"/></div>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
    )
}