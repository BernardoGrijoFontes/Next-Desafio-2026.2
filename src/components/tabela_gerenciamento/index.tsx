"use client"

import Image from "next/image"
import { GerenciamentoTabela } from "@/types/home/home"
import { Pencil, Eye, Trash2 } from "lucide-react"
import { useState } from "react"

import ModalVisualizar from "@/src/components/modal_visualizar"
import ModalEditar from "@/src/components/modal_editar"
import ModalCriar from "@/src/components/modal-criar"
import ModalExcluir from "@/src/components/modal_excluir"

type GerenciamentoProps = {
    produtos: GerenciamentoTabela[]
}

export default function TabelaGerenciamento({
    produtos
}: GerenciamentoProps) {

    const [editar, setEditar] = useState(false)
    const [visualizar, setVisualizar] = useState(false)
    const [excluir, setExcluir] = useState(false)
    const [criar, setCriar] = useState(false)
    const [produtoSelecionado, setProdutoSelecionado] =
        useState<GerenciamentoTabela | null>(null)

    return (
        <>

            {visualizar && (
                <ModalVisualizar
                    produto={produtoSelecionado}
                    fechar={() => setVisualizar(false)}
                />
            )}

            {editar && (
                <ModalEditar
                    produto={produtoSelecionado}
                    fechar={() => setEditar(false) }
                />
            )}

            {excluir && (
                <ModalExcluir
                    produto={produtoSelecionado}
                    fechar={() => setExcluir(false)}
                />
            )}

            {criar && (
                <ModalCriar
                    fechar={() => setCriar(false)}
                />
            )}

            {!excluir && !criar && !editar && !visualizar && (
                <main>
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

                        {produtos.map((produto) => (

                            <tr
                                key={produto.id}
                                className="text-center align-middle"
                            >

                                <td>{produto.id}</td>

                                <td className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
                                    {produto.nome}
                                </td>

                                <td>{produto.preco}</td>

                                <td className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                                    {produto.descricao}
                                </td>

                                <td>{produto.tamanho}</td>

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

                                        <Pencil
                                            className="w-4 h-4 hover:scale-105 cursor-pointer duration-75 ease-in-out"
                                            onClick={() => {setEditar(true); setProdutoSelecionado(produto)}}
                                        />

                                        <Eye
                                            className="w-5 h-5 hover:scale-105 cursor-pointer duration-75 ease-in-out"
                                            onClick={() => {setVisualizar(true); setProdutoSelecionado(produto)}}
                                        />

                                        <Trash2
                                        className="w-4 h-4 hover:scale-105 cursor-pointer duration-75 ease-in-out"
                                        onClick={() => {
                                            setProdutoSelecionado(produto)
                                            setExcluir(true)
                                        }}
                                        />

                                    </div>
                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>
                <div onClick={() => setCriar(true)} className="flex text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg justify-center items-center hover:scale-105 cursor-pointer duration-75 ease-in-out">Adicionar produto</div>
            </main>
            )}
        </>
    )
}