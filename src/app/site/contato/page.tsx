import EnviarEmail from "@/src/components/enviar_email"
import RedesSociais from "@/src/components/redes_sociais"
import Mapa from "@/src/components/mapa"
import Titulo from "@/src/components/titulo"

export default function Contato(){
    return (
        <main>
            <Titulo titulo="Contato"/>
            <EnviarEmail/>
            <Mapa/>
            <RedesSociais/>
        </main>
    )
}