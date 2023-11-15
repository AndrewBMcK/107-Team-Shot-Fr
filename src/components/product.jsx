import { useEffect } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {

    useEffect(function(){
        console.log("hello, i'm a product");
    },[])



    return(
        <div className="product">
            <img src={"/images/"+ props.data.image }/>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>Price: ${props.data.price}</label>
                <br></br>
                <label>Total: </label>
            </div>
            <QuantityPicker/>      

        </div>
    );
}



export default Product;  

