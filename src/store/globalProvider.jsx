import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "Andrew", email: "andrewbmckinnon@outlook.com"});

    function addProductToCart (prod) {
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    function removeProductFromCart () {
        console.log('global remove');
    }

    return (
    <GlobalContext.Provider value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
    }}>{props.children}</GlobalContext.Provider>
    );
}

export default GlobalProvider;