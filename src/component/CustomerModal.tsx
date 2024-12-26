export function CustomerModal(props, children) {
    return (
        <>
            <input className="mb-6 p-2" type="text" placeholder="Name"
                   onChange={(e) => props.setName(e.target.value)}/>
            <input className="mb-6 p-2" type="text" placeholder="Email"
                   onChange={(e) => props.setEmail(e.target.value)}/>
            <input className="mb-6 p-2" type="text" placeholder="Phone Number"
                   onChange={(e) => props.setPhone(e.target.value)}/>
            <button onClick={props.addCustomer}>{props.children}</button>
        </>
    );
}