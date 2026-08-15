import { selector } from "recoil";
import { todoListState } from "../atoms/todoAtom";
import { filterState } from "../atoms/filterAtom";

export const filtrarTodoListState = selector({
    key: "filtrarTodoListState",

    get: ({ get }) => {
        //le o valor atual do filtro
        const filter = get(filterState);
        //le a lista de tarefas
        const todos = get(todoListState);

        //define quais tarefas retornar
        switch (filter) {
            case "completo":
                return todos.filter((todo) => todo.completo);
            case "pendente":
                return todos.filter((todo) => !todo.completo);
            default:
                return todos;
        }
    },
});