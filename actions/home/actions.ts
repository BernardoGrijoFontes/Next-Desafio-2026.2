"use server"

import prisma from "@/src/lib/db"
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

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

export async function getProduto(id: number){
    const produto = await prisma.produto.findUnique({
        where: {
            id: id
        }
    })
    return produto
}

export async function cadastrar(formData: FormData) {

    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;

    const usuarioExiste = await prisma.usuario.findUnique({
        where: {
            email: email
        }
    });

    if (usuarioExiste) {
        return;
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    await prisma.usuario.create({
        data: {
            nome: nome,
            email: email,
            senha: senhaHash
        }
    });

    redirect("/login");
}