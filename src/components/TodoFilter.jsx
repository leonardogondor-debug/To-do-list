import { useRecoilState } from "recoil";
import { filterState } from "../atoms/filterAtom";

export default function Todofilter() {
    //cria variavel e funcao ligadas ao estado geral
    const [filter, setFilter] = useRecoilState(filterState);

    return (
        <div className="mt-2 flex items-center justify-center">
            <button className ="bg-green-400 m-1 p-1 rounded-md border-2 border-black hover:bg-green-200" onClick={() => setFilter("all")}>Todas</button>
            <button className ="bg-green-400 m-1 p-1 rounded-md border-2 border-black hover:bg-green-200" onClick={() => setFilter("completo")}>Concluidas</button>
            <button className ="bg-green-400 m-1 p-1 rounded-md border-2 border-black hover:bg-green-200" onClick={() => setFilter("pendente")}>Pendentes</button>
        </div>
    );
}