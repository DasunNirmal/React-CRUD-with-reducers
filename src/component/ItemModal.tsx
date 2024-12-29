export function ItemModal(props, children) {
    return (
        <>
            <input id='code' className="mb-6 p-2" type="text" placeholder="Item Code"
                   onChange={(e) => props.setCode(e.target.value)}/>
            <input id='itemName' className="mb-6 p-2" type="text" placeholder="Item Name"
                   onChange={(e) => props.setItemName(e.target.value)}/>
            <input id='qty' className="mb-6 p-2" type="text" placeholder="Item Quantity"
                   onChange={(e) => props.setQty(e.target.value)}/>
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    );
}