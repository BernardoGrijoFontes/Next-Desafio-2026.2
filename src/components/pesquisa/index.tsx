"use client";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

type PesquisaProps = {
  onSearch: (valor: string) => void;
};

export default function Pesquisa({ onSearch }: PesquisaProps) {
  const [hover, setHover] = useState(false)
  const [valor, setValor] = useState("");

  function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      onSearch(valor);    
  }

  return (
    <form
      className="flex basis-full px-20 w-full justify-center outline-none"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)} className={`flex flex-col h-fit items-center gap-6 rounded-full border-2 border-black/15 transition-all duration-300 ${hover ? "w-[60%]" : "w-[30%]"}`}>
        <div className="outline-none py-2 relative flex flex-row w-full items-center rounded-lg px-4"> 
          <input
            id="search"
            name="search"
            type="text"
            className="outline-none w-full"
            placeholder="Faça sua busca"
            value={valor}
            onChange={e => setValor(e.target.value)}
          /> 
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-black/25 text-white rounded-full hover:scale-105 cursor-pointer ease-in-out duration-75"
          >
            <SearchIcon/>
          </button>
        </div>
      </div>
    </form>
  );
}
