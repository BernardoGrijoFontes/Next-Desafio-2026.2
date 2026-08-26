import Image from "next/image"
import { X } from "lucide-react"
import { GerenciamentoTabela } from "@/types/home/home"
import { excluirProduto } from "@/actions/home/actions"

type ModalProps = {
    fechar: () => void
    produto: GerenciamentoTabela
}

export default function ModalExcluir({
    fechar,
    produto
}: ModalProps) {
    return (
        <form className="w-[40%] border-4 border-[#6271CF] rounded-lg">
                <div className="flex w-full px-4 py-1 font-extrabold bg-[#6271CF] text-white justify-between items-center">
                    <div className="text-[125%]">Excluir produto</div>
                    <button onClick={fechar} className="flex items-center justify-center py-1 px-1 bg-white rounded-full hover:scale-101 cursor-pointer duration-75 ease-in-out"><X className="text-[#6271CF]"/></button>
                </div>
                <div className="flex flex-col w-full items-center justify-center px-8 py-4 gap-8">
                    <input
                        type="hidden"
                        name="id"
                        value={produto.id}
                    />
                    <div className="flex flex-row w-full items-center justify-center gap-8">
                        <button className="hover:cursor-pointer">
                        <Image
                            className="w-30 h-30 object-cover"
                            src={produto.foto_um}
                            alt={produto.nome}
                            width={60}
                            height={60}
                        />
                        </button>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center gap-2 text-center">

                        <h1>
                            Excluir o produto <strong>{produto.nome}</strong>?
                        </h1>

                        <h2>
                            Essa ação não poderá ser desfeita
                        </h2>
                    </div>

                    <div className="flex w-full justify-between">
                        <button
                            type="submit"
                            className="text-white bg-emerald-900 font-extrabold py-2 px-2 rounded-lg w-[30%] hover:scale-102 cursor-pointer duration-75 ease-in-out"
                        >
                            Confirmar
                        </button>
                        <button
                            type="button"
                            onClick={fechar}
                            className="text-white bg-pink-950 font-extrabold py-2 px-2 rounded-lg w-[30%] hover:scale-102 cursor-pointer duration-75 ease-in-out"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
        </form>
    )
}