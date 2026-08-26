type PrecoProps = {
    preco: number;
}

export default function PrecoProduto({preco}: PrecoProps){
    return (
        <h1 className="text-[200%]">
            R${preco.toFixed(2)}
        </h1>
    )
}