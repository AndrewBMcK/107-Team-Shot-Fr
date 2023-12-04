import "./catalog.css";

//UseEffect react hook
import { useEffect , useState } from "react";
import DataService from "../services/dataService";
import Product from "../components/product";

function Catalog() {
    
    const[products, setProducts]=useState([]);
    const[categories, setCategories]=useState([]);
    const[prodsToDisplay, setProdsToDisplay]=useState([]); //here we place the products of the filter

    useEffect(function(){
        console.log("components are loaded");
        loadCatalog();

    },[]);
    
    function loadCatalog() {
        let service = new DataService();
        let prods = service.getProducts();
        setProducts(prods);
        console.log(prods);
        let categ = ["Clothing","Other","Headgear"];
        setCategories(categ);
        setProdsToDisplay(prods);
    }

    function filter(category) {
        console.log(category);

        let list = [];

        //find the products that match the category and add it to the list.

        for(let i=0; i<products.length; i++) {
            let prod = products[i];
            if(prod.category == category) {
                list.push(prod);
            }
        }
        setProdsToDisplay(list);
        console.log(list);
    }

    function clearFilters() {
        setProdsToDisplay(products);
    }

    return(
        <div className="catalog-container">
            <button onClick={clearFilters} className="btn btn-sm  btn-dark">all</button>
            {categories.map(arrowCategories => <button onClick={() => filter(arrowCategories)} className="btn btn-sm btn-primary btn-filter">{arrowCategories}</button>)}
            <br></br>

            {prodsToDisplay.map( arrowProduct => <Product key={arrowProduct._id} data={arrowProduct}/>)}
        </div>
    );


}

export default Catalog;