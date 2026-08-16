import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtom";

export default function TodoItem({ todo }) {
    //conecta ao estado geral da lista
    const [todos, setTodos] = useRecoilState(todoListState);


    //alterna o estado da tarefa
    const alternaCompleto = () => {
        setTodos(
            todos.map((t) =>
             t.id === todo.id ? { ...t, completo: !t.completo} : t
            )
        );
    };

    //remove tarefa
    const removeTodo = () => {
        setTodos(todos.filter((t) => t.id !== todo.id));
    };

    return (
        <li className={`flex items-center justify-between border-2 border-black p-2 m-2 rounded-md text-xl
            ${todo.completo ? "bg-green-200" : "bg-white"}`
        }>
            <span style={{ textDecoration: todo.completo ? "line-through" : "none"}}>
                {todo.text}
            </span>
            <div className="flex">
            <button className ="bg-green-400 m-1 p-1 w-32 rounded-md border-2 border-black hover:bg-green-200" onClick={alternaCompleto}>
                {todo.completo ? "Desmarcar" : "Concluir"}
            </button>
            <button className ="bg-red-400 m-1 p-1 w-32 rounded-md border-2 border-black hover:bg-red-200" onClick={removeTodo}>Remover</button>
            </div>
        </li>
    );
}