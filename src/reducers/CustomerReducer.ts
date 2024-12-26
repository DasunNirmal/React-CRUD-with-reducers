import {Customer} from "../models/Customer.ts";

export const initialState: Customer[] = [];
export function CustomerReducer(state:Customer[], action:{type:string, payload:Customer}) {
    switch(action.type){
        case 'ADD_CUSTOMER':
            return [...state, action.payload];
    }
}