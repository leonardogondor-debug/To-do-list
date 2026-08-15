import { atom } from "recoil";

// cria e exporta um estado
export const filterState = atom({
    key: "filterState",
    default: "all", 
});