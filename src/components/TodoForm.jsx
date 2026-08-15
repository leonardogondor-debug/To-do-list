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
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Adicionar</button>
        </div>
    );
};