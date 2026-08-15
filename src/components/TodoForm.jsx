import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtom";

export default function TodoForm() {
    const [input, setInput] = useState("");
    const [tosos, setTodos] = useRecoilState(todoListState);

    const addTodo = () => {
        if (input.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: input, completo: flase}]);
        setInput("");
    };

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Adicionar</button>
        </div>
    );
};