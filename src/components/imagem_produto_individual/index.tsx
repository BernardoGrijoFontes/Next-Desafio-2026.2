"use client"

import Image from "next/image"
import { useState } from "react"

type ImagemIndividualProps = {
    foto: string
    foto_dois: string
}

export default function ImagemProdutoIndividual({foto, foto_dois}: ImagemIndividualProps){
    const[hover, setHover] = useState(false)
    return (
        <Image
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        src={hover? foto_dois : foto}
        alt="Foto do produto"
        width={400}
        height={400}
        className="hover:cursor-pointer"
        ></Image>
    )
}