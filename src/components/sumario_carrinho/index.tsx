type SumarioProps = {
    preco_total: number
    quantidade: number
}

export default function SumarioCarrinho(props: SumarioProps){
    return (
        <div className="flex flex-col w-full h-fit border-2 border-[#6271CF]/25 rounded-lg">
            <div className="text-[150%] flex w-full bg-[#6271CF]/50 py-2 px-4 text-white font-extrabold">Resumo da compra</div>
            <div className="flex flex-col py-4 px-4 gap-8">
                <div>
                    <div>Itens: {props.quantidade}</div>
                    <div>Total do pedido: R$ {props.preco_total}</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <button
                        className="text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full hover:scale-102 cursor-pointer duration-75 ease-in-out"
                    >
                        Finalizar compra
                    </button>
                    <button
                        className="text-[#6271CF] border-2 border-[#6271CF] bg-white font-extrabold py-2 px-2 rounded-lg w-full hover:scale-102 cursor-pointer duration-75 ease-in-out"
                    >
                        Continuar comprando
                    </button>
                </div>
            </div>
        </div>
    )
}