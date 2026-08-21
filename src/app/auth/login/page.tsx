"use client"

import FormularioLogin from "@/src/components/formulario_login"
import ImagemAuth from "@/src/components/imagem_auth"
import FormularioCadastro from "@/src/components/formulario_cadastro"
import { useState } from "react"

export default function Login(){
    
    const [login, setLogin] = useState(true)

    return (
        <div className="flex flex-row w-full min-h-screen">
            <ImagemAuth/>
            {login ? (
                <FormularioLogin setLogin={setLogin}/>   
            ):(
                <FormularioCadastro setLogin={setLogin}/>
            )}
        </div>
    )
}