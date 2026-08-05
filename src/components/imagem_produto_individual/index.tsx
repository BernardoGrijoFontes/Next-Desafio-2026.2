import Image from "next/image"

export default function ImagemProdutoIndividual(){
    return (
        <Image 
        src={'/assets/Logo_NW.png'}
        alt="Foto do produto"
        width={400}
        height={400}
        ></Image>
    )
}