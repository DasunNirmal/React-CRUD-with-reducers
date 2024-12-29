import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";
import {CustomerModal} from "../component/CustomerModal.tsx";
import {ItemModal} from "../component/ItemModal.tsx";

export default function Update() {

    const [customers, dispatchCustomer] = useContext(CustomerContext);
    const [items, dispatchItem] = useContext(ItemContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [code, setCode] = useState("");
    const [itemName, setItemName] = useState("");
    const [qty, setQty] = useState("");

    function updateCustomer() {
        const customer = new Customer(name, email, phone);
        dispatchCustomer({type: 'UPDATE_CUSTOMER', payload: customer});
    }

    function updateItems() {
        const newItem = new Item(code, itemName, Number(qty));
        dispatchItem({type: 'UPDATE_ITEM', payload: newItem});
    }

    return (
        <div className="grid grid-cols-2 main-section p-6">
            {/*customer section*/}
            <div className="left-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Customer</h2>

                <CustomerModal handleSubmit={updateCustomer} setName={setName} setEmail={setEmail} setPhone={setPhone}>Update Customer</CustomerModal>
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

                <ItemModal handleSubmit={updateItems} setCode={setCode} setItemName={setItemName} setQty={setQty}>Add Item</ItemModal>
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