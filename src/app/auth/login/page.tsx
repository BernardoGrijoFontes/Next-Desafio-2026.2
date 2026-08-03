import FormularioLogin from "@/src/components/formulario_login"
import ImagemAuth from "@/src/components/imagem_auth"

export default function Login(){
    return (
        <div className="flex flex-row w-full min-h-screen">
            <ImagemAuth/>
            <FormularioLogin/>
        </div>
    )
}