import { selector } from "recoil";
import { todoListState } from "../atoms/todoAtom";
import { filterState } from "../atoms/filterAtom";

export const filtrarTodoListState = selector({
    key: "filtrarTodoListState",
    get: ({ get }) => {
        const filter = get(filterState);
        const todos = get(todoListState);

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