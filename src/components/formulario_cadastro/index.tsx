"use client";

import { cadastrar } from "@/actions/home/actions";
import { useState } from "react";


type FormularioLoginProps = {
    setLogin: (valor: boolean) => void
}


export default function FormularioCadastro({ setLogin }: FormularioLoginProps) {

    async function fazerCadastro(formData: FormData) {
        const resultado = await cadastrar(formData);

        if (resultado) {
            alert(resultado);
        }
    }

    return (
        <form
            autoComplete="off"
            action={fazerCadastro}
            className="flex flex-col w-full min-h-screen justify-center items-center gap-12"
        >

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[200%] text-[#6271CF] font-extrabold">
                    Cadastro
                </h1>

                <div className="text-[100%] text-black flex flex-row gap-1">
                    Já possui uma conta?

                    <button 
                    type="button" 
                    onClick={() => setLogin(true)}
                    className="text-[#6271CF] underline cursor-pointer"
                    >
                        Faça login
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-[60%] gap-8">

                <div className="flex flex-col justify-center w-full">
                    <h1 className="text-[150%] text-[#6271CF] font-extrabold">
                        Nome completo:
                    </h1>

                    <input
                        name="nome"
                        type="text"
                        className="bg-white border-2 border-[#6271CF]/30 w-full text-lg px-2 rounded-lg"
                        placeholder="Digite seu nome completo"
                        required
                    />
                </div>

                <div className="flex flex-col justify-center w-full">
                    <h1 className="text-[150%] text-[#6271CF] font-extrabold">
                        E-mail:
                    </h1>

                    <input
                        name="email"
                        type="email"
                        className="bg-white border-2 border-[#6271CF]/30 w-full text-lg px-2 rounded-lg"
                        placeholder="Digite seu e-mail"
                        required
                    />
                </div>

                <div className="flex flex-col justify-center w-full">
                    <h1 className="text-[150%] text-[#6271CF] font-extrabold">
                        Senha:
                    </h1>

                    <input
                        name="senha"
                        type="password"
                        className="bg-white border-2 border-[#6271CF]/30 w-full text-lg px-2 rounded-lg"
                        placeholder="Digite sua senha"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full hover:scale-102 cursor-pointer duration-75 ease-in-out"
                >
                    Fazer cadastro
                </button>

            </div>
        </form>
    );
}