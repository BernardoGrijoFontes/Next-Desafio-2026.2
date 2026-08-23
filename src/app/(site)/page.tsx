import Hero_section from "../../components/hero_section";
import Mais_vendidos from "../../components/mais_vendidos";
import Missao from "../../components/missao_visao_valores";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProdutosEmDestaque from "../../components/em_destaque";
import getEmDestaque from "@/actions/home/actions";
import { getMaisVendidos } from "@/actions/home/actions";

export default async function Home() {
  
  const em_destaque = await getEmDestaque()
  const mais_vendidos = await getMaisVendidos()

  return (
    <main>
      <Hero_section/>
      <ProdutosEmDestaque produtos={em_destaque}/>
      <Mais_vendidos produtos={mais_vendidos}/>
      <Missao/>
    </main>
  );
}
