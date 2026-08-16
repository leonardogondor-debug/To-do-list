import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtom";

export default function TodoForm() {
    //controla texto do input
    const [input, setInput] = useState("");
    //estado geral da lista com funcao atualizar
    const [todos, setTodos] = useRecoilState(todoListState);

    const addTodo = () => {
        if (input.trim() === "") return;
        //adiciona nova tarefa na lista com id e estado nao completo 
        setTodos([...todos, { id: Date.now(), text: input, completo: false}]);
        setInput("");
    };

    return (
        <div className="mt-2 flex items-center justify-center">
            <input className="m-1 p-1 rounded-md border-2 border-black" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className ="bg-green-400 m-1 p-1 rounded-md border-2 border-black hover:bg-green-200" onClick={addTodo}>Adicionar</button>
        </div>
    );
};