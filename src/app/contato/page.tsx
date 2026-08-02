import EnviarEmail from "@/src/components/enviar_email"
import RedesSociais from "@/src/components/redes_sociais"
import Mapa from "@/src/components/mapa"

export default function Contato(){
    return (
        <main>
            <EnviarEmail/>
            <Mapa/>
            <RedesSociais/>
        </main>
    )
}