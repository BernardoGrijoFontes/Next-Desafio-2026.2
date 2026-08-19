import CarrinhoVazio from "@/src/components/mensagem_carrinho_vazio";
import Titulo from "@/src/components/titulo";

export default function Carrinho(){
    return (
        <main>
            <Titulo titulo="Carrinho"/>
            <CarrinhoVazio/>
        </main>
    )
}