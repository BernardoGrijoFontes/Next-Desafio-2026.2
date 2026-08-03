type TituloProps = {
    titulo: string;
};

export default function Titulo({titulo} : TituloProps){
    return (
        <div className="flex w-full justify-center items-center py-8">
            <h1 className="text-[200%] font-extrabold text-[#6271CF]">{titulo}</h1>
        </div>
    )
}