import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";
import './Delete.css'
import {CustomerModal} from "../component/CustomerModal.tsx";

export default function Delete() {

    const [customers, dispatchCustomer] = useContext(CustomerContext);
    const [items, setItems] = useContext(ItemContext);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    function deleteCustomer() {
        console.log(email);
        dispatchCustomer({type: 'DELETE_CUSTOMER', payload: {email }}); /*object shorthand notation when we use this it is
         equal to {email: email}*/
    }

    function deleteItem() {
        setItems((items:Item[]) => items.slice(0,-1));
    }

    function deleteItemByCode() {
        const filteredItem = items.filter((item:Item) => item.code === code);
        setItems((items:Item[]) => items.slice(filteredItem.length));
    }

    return (
        <div className="grid grid-cols-2 main-section p-6">

            {/*customer section*/}
            <div className="left-card m-3" id="delete-component">
                <h2 className="mb-6 p-2 w-fit text-2xl">Delete Customer</h2>

                {/*flex w-3/4 justify-center gap-10*/}
                <CustomerModal handleSubmit={deleteCustomer} setName={() => {}} setEmail={setEmail} setPhone={() => {}}>Delete Customer</CustomerModal>

                <table className="table-auto border border-gray-300 w-full mt-6">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>phone</td>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer: Customer) => (
                        <tr key={customer.email}>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/*item section*/}
            <div className="right-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Items</h2>

                <input className="mb-6 p-2" type="text" placeholder="Item Code"
                onChange={(e) => setCode(e.target.value)} />
                <div className="flex w-3/4 justify-center gap-10">
                    <button className="w-2/4" onClick={deleteItem}>Delete Last Item</button>
                    <button className="w-2/4" onClick={deleteItemByCode}>Delete By Item Code</button>
                </div>

                <table className="table-auto border border-gray-300 w-full mt-6">
                    <thead>
                    <tr>
                        <td>Item Code</td>
                        <td>Item Name</td>
                        <td>Quantity</td>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((items: Item) => (
                        <tr key={items.code}>
                        <td>{items.code}</td>
                            <td>{items.itemName}</td>
                            <td>{items.qty}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}