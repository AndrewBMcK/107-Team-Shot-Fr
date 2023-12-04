import { useEffect, useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";


function Product(props) {
    const [quantity, setQuantity] =useState(1);

    useEffect(function(){
        console.log("hello, i'm a product");
    },[])

    function quantityChanged(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function addToCart() {
        console.log(props.data.title);
    }

    return(
        <div className="product">
            <img src={"/images/"+ props.data.image }/>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <br></br>
                <label>Total: ${getTotal()}</label>
            </div>
            <QuantityPicker onChange={quantityChanged} />      

            <button onClick={addToCart} className="btn btn-sm btn-outline-success">Add to cart</button>
        </div>
    );
}



export default Product;  