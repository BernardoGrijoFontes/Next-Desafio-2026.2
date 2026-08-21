"use client"

import ListaDeProdutos from "@/src/components/lista_produtos"
import Pesquisa from "@/src/components/pesquisa"
import Titulo from "@/src/components/titulo"
import Paginacao from "@/src/components/paginacao"
import { getProdutos } from "@/actions/home/actions"
import { useState } from "react";

const produtos_get = await getProdutos()

export default function Produtos(){
    const [query, setQuery] = useState("");

    const filtrados = produtos_get.filter(p =>
        p.nome.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <main>
            <Titulo titulo="Produtos"/>
            <Pesquisa onSearch={setQuery} />
            <ListaDeProdutos produtos={filtrados}/>
            <Paginacao/>
        </main>
    )
}