"use client"
import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"

type PaginacaoProps = {
    paginaAtual: number
    totalPaginas: number
    onChange: (pagina: number) => void
}

export default function Paginacao({
    paginaAtual,
    totalPaginas,
    onChange
}: PaginacaoProps) {

    return (
        <div className="flex items-center justify-center gap-2 py-6">
            <button
                onClick={() => onChange(paginaAtual - 1)}
                disabled={paginaAtual === 1}
                className="px-2 py-2 rounded-full bg-[#6271CF] disabled:opacity-40"
            >
                <ChevronLeft className="text-white"/>
            </button>

            {Array.from({ length: totalPaginas }, (_, index) => {
                const pagina = index + 1

                return (
                    <button
                        key={pagina}
                        onClick={() => onChange(pagina)}
                        className={`
                            w-10 h-10 rounded-full
                            ${pagina === paginaAtual
                                ? "bg-[#6271CF] text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                            }
                        `}
                    >
                        {pagina}
                    </button>
                )
            })}

            <button
                onClick={() => onChange(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
                className="px-2 py-2 rounded-full bg-[#6271CF] disabled:opacity-40"
            >
                <ChevronRight className="text-white"/>
            </button>

        </div>
    )
}