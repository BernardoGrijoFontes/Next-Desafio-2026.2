import Image from "next/image"

type ImagemIndividualProps = {
    foto: string
}

export default function ImagemProdutoIndividual({foto}: ImagemIndividualProps){
    return (
        <Image 
        src={foto}
        alt="Foto do produto"
        width={400}
        height={400}
        ></Image>
    )
}