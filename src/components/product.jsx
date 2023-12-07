import { useContext, useEffect, useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import GlobalContext from "../store/globalContext";


function Product(props) {
    const [quantity, setQuantity] =useState(1);

    let addProductToCart = useContext(GlobalContext).addProductToCart;


    useEffect(function(){

    },[])

    function quantityChanged(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function addToCart() {

        let prod = {...props.data};
        prod.quantity = quantity;

        addProductToCart(prod); //call the global/context function
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