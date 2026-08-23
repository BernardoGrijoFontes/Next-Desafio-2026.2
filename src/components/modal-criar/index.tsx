import Image from "next/image"
import { X } from "lucide-react"
import { criarProduto } from "@/actions/home/actions"

type ModalProps = {
    fechar: () => void
}

export default function ModalCriar({
    fechar
}: ModalProps) {
    return (
        <form action={criarProduto} className="w-[40%] border-4 border-[#6271CF] rounded-lg">
                <div className="flex w-full px-4 py-1 font-extrabold bg-[#6271CF] text-white justify-between items-center">
                    <div className="text-[125%]">Adicionar produto</div>
                    <button onClick={fechar} className="flex items-center justify-center py-1 px-1 bg-white rounded-full"><X className="text-[#6271CF]"/></button>
                </div>
                <div className="flex flex-col w-full items-center justify-center px-8 py-4">
                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Foto da frente do produto:
                        </h1>

                        <input
                            name="Foto_um_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            placeholder="Digite link do cloudinary da foto"
                            required
                        />
                    </div>
                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Foto de trás do produto:
                        </h1>

                        <input
                            name="Foto_dois_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            placeholder="Digite link do cloudinary da foto"
                            required
                        />
                    </div>
                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Nome:
                        </h1>

                        <input
                            name="Nome_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            placeholder="Digite o nome do produto"
                            required
                        />
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Preço:
                        </h1>

                        <input
                            name="Preco_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            placeholder="Digite o preço do produto"
                            required
                        />
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Tamanho:
                        </h1>

                        <input
                            name="Tamanho_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            placeholder="Digite o tamanho do produto"
                            required
                        />
                    </div>

                    <div className="flex flex-col py-4 w-full">
                        <h1 className="text-[100%] text-[#6271CF] font-extrabold">
                            Descrição:
                        </h1>

                        <input
                            name="Descricao_produto"
                            type="text"
                            className="bg-white border-2 border-[#6271CF] w-full text-lg px-2 rounded-lg"
                            placeholder="Digite a descrição do produto"
                            required
                        />
                    </div>
                    <div className="flex w-full justify-between">
                        <button
                            type="submit"
                            className="text-white bg-emerald-900 font-extrabold py-2 px-2 rounded-lg w-[30%] hover:scale-102 cursor-pointer duration-75 ease-in-out"
                        >
                            Salvar
                        </button>
                        <button
                            type="button"
                            onClick={fechar}
                            className="text-white bg-pink-950 font-extrabold py-2 px-2 rounded-lg w-[30%] hover:scale-102 cursor-pointer duration-75 ease-in-out"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
        </form>
    )
}