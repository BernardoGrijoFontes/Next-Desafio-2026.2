type TamanhoProps = {
    tamanho: string;
}

export default function TamanhoProduto({tamanho}: TamanhoProps) {
    return (
        <h1 className="text-[100%]">Tamanho: {tamanho}</h1>
    )
}