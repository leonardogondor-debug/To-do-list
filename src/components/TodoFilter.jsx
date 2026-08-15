import { useRecoilState } from "recoil";
import { filterState } from "../atoms/filterAtom";

export default function Todofilter() {
    const {filter, setFilter} = useRecoilState(filterState);

    return (
        <div>
            <button onClick={() => setFilter("all")}>Todas</button>
            <button onClick={() => setFilter("completo")}>Concluidas</button>
            <button onClick={() => setFilter("pendente")}>Pendentes</button>
        </div>
    );
}