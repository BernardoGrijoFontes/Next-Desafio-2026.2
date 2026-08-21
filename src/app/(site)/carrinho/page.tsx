import CarrinhoVazio from "@/src/components/mensagem_carrinho_vazio";
import Titulo from "@/src/components/titulo";
import { getCarrinho } from "@/actions/home/actions";
import { getUsuarioLogado } from "@/actions/home/actions";
import CardCarrinho from "@/src/components/card_carrinho";

export default async function Carrinho(){
    const usuario = await getUsuarioLogado()

    if (!usuario) {
        return (
            <main>
                <Titulo titulo="Carrinho"/>
                <CarrinhoVazio/>
            </main>
        )
    }

    const carrinho = await getCarrinho(usuario.id)

    if (!carrinho) {
        return (
            <main>
                <Titulo titulo="Carrinho"/>
                <CarrinhoVazio/>
            </main>
        )
    }

    return (
        <main>
            <Titulo titulo="Carrinho"/>
            <div className="flex flex-row w-full h-full px-16">
                <div className="flex flex-col gap-4">
                    {carrinho.itens.map((item, key) => (
                    <CardCarrinho 
                    nome={item.produto.nome}
                    key={item.id}
                    id={item.id}
                    imagem={item.produto.foto_um}
                    tamanho={item.produto.tamanho}
                    preco={item.produto.preco}/>
                    ))}
                </div>
            </div>
        </main>
    )
}