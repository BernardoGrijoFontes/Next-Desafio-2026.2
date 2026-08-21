"use server"

import prisma from "@/src/lib/db"
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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
        return "Este e-mail já está cadastrado!";
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    await prisma.usuario.create({
        data: {
            nome: nome,
            email: email,
            senha: senhaHash
        }
    });

    redirect("/auth/login");
}

export async function login(formData: FormData) {

    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;

    const usuario = await prisma.usuario.findUnique({
        where: {
            email: email
        }
    });

    if (!usuario) {
        return "E-mail ou senha incorretos!";
    }

    const senhaCorreta = await bcrypt.compare(
        senha,
        usuario.senha
    );

    if (!senhaCorreta) {
        return "E-mail ou senha incorretos!";
    }

    const cookieStore = await cookies();

    cookieStore.set("usuarioId", usuario.id.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/"
    });

    redirect("/");
}

export async function getUsuarioLogado() {

    const cookieStore = await cookies();

    const usuarioId = cookieStore.get("usuarioId")?.value;

    if (!usuarioId) {
        return null;
    }

    const usuario = await prisma.usuario.findUnique({
        where: {
            id: Number(usuarioId)
        }
    });

    return usuario;
}

export async function logout() {
    const cookieStore = await cookies();

    cookieStore.delete("usuarioId");

    redirect("/");
}