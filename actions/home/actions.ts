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

export async function getMaisVendidos(){
    const produtos = await prisma.produto.findMany({
        take: 3,
        orderBy: {
            id: "desc"
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

export async function getProdutos() {
    const produtos = await prisma.produto.findMany({
        select: {
            id: true,
            foto_um: true,
            foto_dois: true,
            preco: true,
            nome: true,
            descricao: true
        }
    })
    return produtos;
}

export async function getTabela() {
    const produtos = await prisma.produto.findMany({
        orderBy: {
            id: "asc"
        },
        select: {
            id: true,
            foto_um: true,
            foto_dois: true,
            preco: true,
            nome: true,
            descricao: true,
            tamanho: true
        }
    })
    return produtos;
}