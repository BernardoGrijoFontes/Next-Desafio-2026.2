import { Search as SearchIcon} from "lucide-react";

export default function Pesquisa(){
    return (
        <form className="flex basis-full px-20 w-full" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-6 rounded-lg border-2 border-black/15">
                <div className="relative flex flex-row w-full items-center rounded-lg"> 
                    <SearchIcon className="w-7 h-7 absolute text-black left-4"/>
                    <input
                    id="search"
                    name="search"
                    type="text"
                    className="w-full px-16 py-6"
                    placeholder="Faça sua busca"
                    /> 
                </div>
            </div>
        </form>
    )
}