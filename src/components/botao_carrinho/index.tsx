"use client"

import { adicionarAoCarrinho } from "@/actions/home/actions"
import { useRouter } from "next/navigation"

type BotaoCarrinhoProps = {
    usuarioId?: number
    produtoId: number
}

export default function BotaoCarrinho({
    usuarioId,
    produtoId
}: BotaoCarrinhoProps) {

    const router = useRouter()

    async function adicionar() {

        if (!usuarioId) {
            router.push("/auth/login")
            return
        }

        const resultado = await adicionarAoCarrinho(
            usuarioId,
            produtoId
        )

        alert(resultado)
    }

    return (
        <button
            onClick={adicionar}
            className="max-w-fit text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-8 rounded-lg hover:scale-105 cursor-pointer duration-75 ease-in-out"
        >
            Adicionar ao carrinho
        </button>
    )
}