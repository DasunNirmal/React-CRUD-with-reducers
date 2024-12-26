export function ItemModal(props, children) {
    return (
        <>
            <input className="mb-6 p-2" type="text" placeholder="Item COde"
                   onChange={(e) => props.setCode(e.target.value)}/>
            <input className="mb-6 p-2" type="text" placeholder="Item Name"
                   onChange={(e) => props.setItemName(e.target.value)}/>
            <input className="mb-6 p-2" type="text" placeholder="Item Quantity"
                   onChange={(e) => props.setQty(e.target.value)}/>
            <button onClick={props.addItem}>{props.children}</button>
        </>
    );
}