import { useState, useContext } from "react";
import "./cart.css";
import GlobalContext from "../store/globalContext";

function Cart() {
    const [couponCode, setCouponCode] = useState("");
    const cart = useContext(GlobalContext).cart;

    function getNumOfProducts() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity;
        }
        return total;
    }

    function getTotalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            totalPrice += cart[i].price * cart[i].quantity;
        }
        return totalPrice.toFixed(2);
    }

    function applyCoupon() {
        console.log("Applying coupon:", couponCode);
    }

    return (
        <div className="cart page">
            <h1>Cart</h1>
            <h4>You have {getNumOfProducts()} products waiting for you</h4>
            <hr />

            <div className="row">
                <div className="col-md-8">
                    {cart.map((prod) => (
                        <div className="prod-cart" key={prod._id}>
                            <img src={"/images/" + prod.image} alt={prod.title} />

                            <div>
                                <h5>{prod.title}</h5>
                                <p>{prod.category}</p>
                            </div>

                            <label>${prod.price.toFixed(2)}</label>
                            <label>x{prod.quantity}</label>
                            <label>${(prod.price * prod.quantity).toFixed(2)}</label>

                            <button className="btn btn-sm btn-danger">Remove <i className="fas fa-trash-alt"></i></button>
                        </div>
                    ))}
                </div>

                <div className="col-md-4">
                    <div className="summary">
                        <h3>Total</h3>
                        <ul className="list-group">
                            {cart.map((prod) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={prod._id}>
                                    {prod.title}
                                    <span>${(prod.price * prod.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Total Items
                                <span className="badge bg-primary rounded-pill">{getNumOfProducts()}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Total Price
                                <span className="badge bg-success rounded-pill">${getTotalPrice()}</span>
                            </li>
                        </ul>
                        <div className="mb-3">
                            <label htmlFor="couponCode" className="form-label">Coupon Code:</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="couponCode"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                />
                                <button className="btn btn-primary" onClick={applyCoupon}>Apply Coupon</button>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-success">Place your order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;