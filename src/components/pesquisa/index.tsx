"use client";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

type PesquisaProps = {
  onSearch: (valor: string) => void;
};

export default function Pesquisa({ onSearch }: PesquisaProps) {
    const [valor, setValor] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSearch(valor);    
    }

  return (
    <form
      className="flex basis-full px-20 w-full"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full flex-col items-center gap-6 rounded-lg border-2 border-black/15">
        <div className="relative flex flex-row w-full items-center rounded-lg"> 
          <SearchIcon className="w-7 h-7 absolute text-black left-4"/>
          <input
            id="search"
            name="search"
            type="text"
            className="w-full px-16 py-6"
            placeholder="Faça sua busca"
            value={valor}
            onChange={e => setValor(e.target.value)}
          /> 
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
}
