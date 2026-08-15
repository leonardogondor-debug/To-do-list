import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoAtom";

export default function TodoItem({ todo }) {
    const [todos, setTodos] = useRecoilState(todoListState);
    
    const alternaCompleto = () => {
        setTodos(
            todos.map((t) =>
             t.id === todo.id ? { ...t, completo: !t.completo} : t
            )
        );
    };

    const removeTodo = () => {
        setTodos(todos.filter((t) => t.id !== todo.id));
    };

    return (
        <li>
            <span style={{ textDecoration: todo.completo ? "line-through" : "none"}}>
                {todo.text}
            </span>
            <button onClick={alternaCompleto}>
                {todo.completo ? "Desmarcar" : "Concluir"}
            </button>
            <button onClick={removeTodo}>Remover</button>
        </li>
    );
}