type DescricaoProps = {
    descricao: string;
};

export default function DescricaoProduto({descricao}: DescricaoProps){
    return (
        <div className="flex flex-col">
            <h1 className="text-[150%] font-extrabold text-[#6271CF]">Decrição:</h1>
            <h1 className="text-[100%]">{descricao}</h1>
        </div>
    )
}