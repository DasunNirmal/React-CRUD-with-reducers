import {Item} from "../models/Item.ts";

export const initialState: Item[] = [];
export function ItemReducer(state:Item[], action:{type:string, payload:Item}) {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload];
    }
}