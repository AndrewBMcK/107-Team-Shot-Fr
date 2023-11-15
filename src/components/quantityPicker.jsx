import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker() {

    //Use state hook
    const[quantity,setQuantity] = useState (1);

    function decreaseQuantity() {
        if(quantity===1) return;
        let val =  quantity - 1;
        setQuantity(val);
    };

    function increaseQuantity() {
        let val = quantity + 1;
        setQuantity(val);
    };

    return (
        <div className="qty-Picker">
            <button disabled={quantity===1} onClick={decreaseQuantity}>-</button>
            <label>{quantity}</label>
            <button onClick={increaseQuantity}>+</button>
        </div>
    );
}

export default QuantityPicker;