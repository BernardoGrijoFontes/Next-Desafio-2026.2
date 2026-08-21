import Link from "next/link"
import { login } from "@/actions/home/actions"

type FormularioLoginProps = {
    setLogin: (valor: boolean) => void
}

export default function FormularioLogin({ setLogin }: FormularioLoginProps){
    async function fazerLogin(formData: FormData) {

        const resultado = await login(formData);

        if (resultado) {
            alert(resultado);
        }
    }
    return (
            <form 
            autoComplete="off"
            className="flex flex-col w-full min-h-screen justify-center items-center gap-12"
            action={fazerLogin}>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[200%] text-[#6271CF] font-extrabold">Login</h1>
                    <div className="text-[100%] text-black flex flex-row gap-1">Não possui uma conta?<button type="button" onClick={() => setLogin(false)} className="text-[#6271CF] underline cursor-pointer">Cadastre-se</button></div>
                </div>
                <div className="flex flex-col justify-center items-center w-[60%] gap-8">
                    <div className="flex flex-col justify-center w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">E-mail:</h1>
                        <input 
                        name="email"
                        id="email"
                        type="text"
                        className="bg-white border-2 border-black w-full text-lg px-2 rounded-lg"
                        placeholder="Digite seu e-mail"
                        ></input>
                    </div>
                    <div className="flex flex-col justify-center w-full">
                        <h1 className="text-[150%] text-[#6271CF] font-extrabold">Senha:</h1>
                        <input 
                        name="senha"
                        type="password"
                        id="senha"
                        className="bg-white border-2 border-black w-full text-lg px-2 rounded-lg"
                        placeholder="Digite seu e-mail"
                        ></input>
                    </div>
                    <button
                    type="submit" 
                    className="text-[100%] text-white bg-[#6271CF] font-extrabold py-2 px-2 rounded-lg w-full hover:scale-102 cursor-pointer duration-75 ease-in-out">Fazer login</button>
                </div>
            </form>
    )
}