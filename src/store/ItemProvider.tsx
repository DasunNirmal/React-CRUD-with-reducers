import {createContext, useState} from "react";
import {Item} from "../models/Item.ts";

export const ItemContext = createContext();

export function ItemProvider({children}) {
    const [item, setItem] = useState<Item[]>([]);

    return (
        <ItemContext.Provider value={[item, setItem]}>
            {children}
        </ItemContext.Provider>
    );
}