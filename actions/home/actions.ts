"use server"

import prisma from "@/src/lib/db"

export default async function getEmDestaque(){
    const produtos = await prisma.produto.findMany({
        take: 3,
        orderBy: {
            id: "asc"
        },
        select: {
            id: true,
            foto_dois: true,
            foto_um: true,
            preco: true,
            nome: true,
            descricao: true
        }
    })
    return produtos;
}