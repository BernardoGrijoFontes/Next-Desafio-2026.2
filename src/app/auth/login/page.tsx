"use client"

import FormularioLogin from "@/src/components/formulario_login"
import ImagemAuth from "@/src/components/imagem_auth"
import FormularioCadastro from "@/src/components/formulario_cadastro"

export default function Login(){
    return (
        <div className="flex flex-row w-full min-h-screen">
            <FormularioLogin/>
            <FormularioCadastro/>
        </div>
    )
}