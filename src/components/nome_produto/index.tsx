type NomeProps = {
    nome: string;
}

export default function NomeProduto({nome}: NomeProps){
    return (
        <h1 className="text-[200%]">
            {nome}
        </h1>
    )
}