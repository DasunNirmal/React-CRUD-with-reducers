import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";

export const [customers, setCustomers] = useContext(CustomerContext);

export const [state, setState] = useState({
    name: "",
    email: "",
    phone: ""
});