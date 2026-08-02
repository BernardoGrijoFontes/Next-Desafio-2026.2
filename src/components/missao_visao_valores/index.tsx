import Image from "next/image";

export default function Missao(){
    return (
        <div className="bg-white flex flex-col w-full px-4 py-4 gap-4 items-center justify-center">
            <h1 className="text-[200%] font-extrabold text-[#6271CF]">Sobre nós</h1>
            <div className="flex flex-row w-full justify-around">
                <div className="flex flex-col gap-4 items-center justify-center text-center max-w-xl">
                    <h1 className="text-[150%] font-extrabold text-[#6271CF]">Missão</h1>
                    <p className="text-black w-full">Na Next Wear Brechó, nossa missão é tornar a moda acessível, consciente e cheia de personalidade.</p>
                </div>
                <div className="rounded-full bg-[#6271CF]">
                    <Image
                    src={'/assets/Pessoas-felizes.jpg'}
                    alt="Pessoas felizes que simbolizam a satisfação dos clientes"
                    height={300}
                    width={300}
                    className="rounded-full opacity-20"
                    />
                </div>
            </div>
            <div className="flex flex-row w-full justify-around">
                <div className="rounded-full bg-[#6271CF]">
                    <Image
                    src={'/assets/56759557-desktop-wallpaper-4k-wallpaper.jpg'}
                    alt="Pessoas felizes que simbolizam a satisfação dos clientes"
                    height={300}
                    width={300}
                    className="rounded-full opacity-20"
                    />
                </div>
                <div className="flex flex-col gap-4 items-center justify-center text-center max-w-xl">
                    <h1 className="text-[150%] font-extrabold text-[#6271CF]">Visão</h1>
                    <p className="text-black w-full">Queremos inspirar cada vez mais pessoas a transformar a forma como consomem moda, promovendo um futuro em que qualidade, economia e respeito ao meio ambiente caminhem juntos.</p>
                </div>
            </div>
            <div className="flex flex-row w-full justify-around">
                <div className="flex flex-col gap-4 items-center justify-center text-center max-w-xl">
                    <h1 className="text-[150%] font-extrabold text-[#6271CF]">Valores</h1>
                    <p className="text-black w-full">Valorizamos a sustentabilidade, a autenticidade e o respeito ao consumidor. Trabalhamos com transparência, oferecendo peças cuidadosamente selecionadas, preços justos e um atendimento acolhedor.</p>
                </div>
                <div className="rounded-full bg-[#6271CF]">
                    <Image
                    src={'/assets/arara_de_roupas_ypedia-scaled.jpg'}
                    alt="Pessoas felizes que simbolizam a satisfação dos clientes"
                    height={300}
                    width={300}
                    className="rounded-full opacity-20"
                    />
                </div>
            </div>
        </div>
    )
}