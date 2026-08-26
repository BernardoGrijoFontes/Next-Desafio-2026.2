"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { GerenciamentoTabela } from "@/types/home/home"
import { editarProduto } from "@/actions/home/actions"

type ModalProps = {
    fechar: () => void
    produto: GerenciamentoTabela
}

export default function ModalEditar({
    fechar,
    produto
}: ModalProps) {

    const router = useRouter()

    async function handleSubmit(formData: FormData) {
        await editarProduto(formData)

        fechar()
        router.refresh()
    }
    return (
        <form action={editarProduto} className="w-[40%] border-4 border-[#6271CF] rounded-lg">
                <div className="flex w-full px-4 py-1 font-extrabold bg-[#6271CF] text-white justify-between items-center">
                    <div className="text-[125%]">Editar produto</div>
                    <button type="button" onClick={fechar} className="flex items-center justify-center py-1 px-1 bg-white rounded-full hover:scale-101 cursor-pointer duration-75 ease-in-out"><X className="text-[#6271CF]"/></button>
                </div>
                <div className="flex flex-col w-full items-center justify-center px-8 py-4">
                    <input
                        type="hidden"
                        name="id"
                        value={produto.id}
                    />
                    <div className="flex flex-row w-full items-center justify-center gap-8">
                        <Image 
                        className="w-30 h-30 object-cover"
                        src={produto.foto_um}
                        alt="Foto do produto"
                        width={60}
                        height={60}
                        ></Image>

                        <Image 
                        className="w-30 h-30 object-cover"
                        src={produto.foto_dois}
                        alt="Foto do produto"
                        width={60}
                        height={60}
                        ></Image>
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Foto da frente do produto:
                        </h1>

                        <input
                            name="Foto_um_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            defaultValue={produto.foto_um}
                            required
                        />
                    </div>
                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Foto de trás do produto:
                        </h1>

                        <input
                            name="Foto_dois_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            defaultValue={produto.foto_dois}
                            required
                        />
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Nome:
                        </h1>

                        <input
                            name="Nome_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            defaultValue={produto.nome}
                            required
                        />
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Preço:
                        </h1>

                        <input
                            name="Preco_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            defaultValue={produto.preco}
                            required
                        />
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Tamanho:
                        </h1>

                        <input
                            name="Tamanho_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            defaultValue={produto.tamanho}
                            required
                        />
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Descrição:
                        </h1>

                        <input
                            name="Descricao_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            defaultValue={produto.descricao}
                            required
                        />
                    </div>
                    <div className="flex w-full justify-between">
                        <button
                            type="submit"
                            className="text-white bg-emerald-900 font-extrabold py-2 px-2 rounded-lg w-[30%] hover:scale-102 cursor-pointer duration-75 ease-in-out"
                        >
                            Salvar
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