import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../component/Customer.ts";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../component/Item.ts";

export default function Update() {

    const [customers, setCustomers] = useContext(CustomerContext);
    const [items, setItems] = useContext(ItemContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [code, setCode] = useState("");
    const [itemName, setItemName] = useState("");
    const [qty, setQty] = useState("");

    function updateCustomer() {
        const updatedCustomer = customers.map((customers:Customer) => customers.email === email ?
            {...customers, name:name,email:email,phone:phone} : customers);
        setCustomers(updatedCustomer)
    }

    function updateItems() {
        const updatedItem = items.map((items:Item) => items.code === code ?
            {...items, code:code,itemName:itemName,qty:qty} : items);
        setItems(updatedItem)
    }

    return (
        <div className="grid grid-cols-2 main-section p-6">
            {/*customer section*/}
            <div className="left-card m-3">
                <h2 className="mb-6 p-2 w-fit text-2xl">Update Customer</h2>

                <input className="mb-6 p-2" type="text" placeholder="Name"
                       onChange={(e) => setName(e.target.value)}/>
                <input className="mb-6 p-2" type="text" placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)}/>
                <input className="mb-6 p-2" type="text" placeholder="Phone Number"
                       onChange={(e) => setPhone(e.target.value)}/>
                <button className="buttonCSS" onClick={updateCustomer}>Update Customer</button>

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

                <input className="mb-6 p-2" type="text" placeholder="Item COde"
                       onChange={(e) => setCode(e.target.value)} />
                <input className="mb-6 p-2" type="text" placeholder="Item Name"
                       onChange={(e) => setItemName(e.target.value)} />
                <input className="mb-6 p-2" type="text" placeholder="Item Quantity"
                       onChange={(e) => setQty(e.target.value)} />
                <button onClick={updateItems}>Update Item</button>

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