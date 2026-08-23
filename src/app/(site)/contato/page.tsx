import EnviarEmail from "@/src/components/enviar_email"
import RedesSociais from "@/src/components/redes_sociais"
import Mapa from "@/src/components/mapa"
import Titulo from "@/src/components/titulo"

export default function Contato(){
    return (
        <main>
            <Titulo titulo="Contato"/>
            <div className="flex px-16 w-full gap-8 pb-8">
                <EnviarEmail/>
                <div className="flex flex-col w-full gap-8 items-center">
                    <Mapa/>
                    <RedesSociais/>
                </div>
            </div>
        </main>
    )
}