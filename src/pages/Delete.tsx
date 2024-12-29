import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";
import './Delete.css'
import {CustomerModal} from "../component/CustomerModal.tsx";
import {ItemModal} from "../component/ItemModal.tsx";

export default function Delete() {

    const [customers, dispatchCustomer] = useContext(CustomerContext);
    const [items, dispatchItem] = useContext(ItemContext);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    function deleteCustomer() {
        dispatchCustomer({type: 'DELETE_CUSTOMER', payload: {email }}); /*object shorthand notation when we use this it is
         equal to {email: email}*/
    }

    function deleteItem() {
        dispatchItem({type: 'DELETE_ITEM', payload: {code }});
    }

    return (
        <div className="grid grid-cols-2 main-section p-6">

            {/*customer section*/}
            <div className="left-card m-3" id="delete-component">
                <h2 className="mb-6 p-2 w-fit text-2xl">Delete Customer</h2>

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
            <div className="right-card m-3" id="delete-component">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Items</h2>

                <ItemModal handleSubmit={deleteItem} setCode={setCode} setItemName={() => {}} setQty={() => {}}>Delete Item</ItemModal>

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