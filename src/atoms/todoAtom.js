import { atom } from "recoil";

// cria estado geral
export const todoListState = atom({
    key: "todoListState",
    default: [],
});