"use client"

import ListaDeProdutos from "@/src/components/lista_produtos"
import Pesquisa from "@/src/components/pesquisa"
import Titulo from "@/src/components/titulo"
import Paginacao from "@/src/components/paginacao"
import { getProdutos } from "@/actions/home/actions"
import { useState } from "react";

const produtos_get = await getProdutos()

export default function Produtos(){

    const [pages, onChangePages] = useState(1)

    const inicio = (pages - 1) * 9
    const fim = pages * 9

    const produtosPagina = produtos_get.slice(inicio, fim)

    const [query, setQuery] = useState("");

    const filtrados = produtosPagina.filter(p =>
        p.nome.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <main>
            <Titulo titulo="Produtos"/>
            <Pesquisa onSearch={setQuery} />
            <ListaDeProdutos produtos={filtrados}/>
            <Paginacao paginaAtual={pages} totalPaginas={Math.ceil(produtos_get.length/9)} onChange={onChangePages}/>
        </main>
    )
}