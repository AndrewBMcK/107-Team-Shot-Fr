import { useState } from "react";
import "./admin.css";

function Admin() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: ""
  });
  const[allProducts, setAllProducts] = useState([]);
  const[allCoupons, setAllCoupons] = useState([]);
  const [coupon, setCoupon] = useState({
    code:'',
    discount:''
  });


  function handleProductForm(e) {
    let text = e.target.value;
    let name = e.target.name;

    //create a copy
    let copy = {...product};
    //modify the copy
    copy[name] = text;
    //set the copy
    setProduct(copy);
  }

  function handleCouponForm(e) {
    let text = e.target.value;
    let name = e.target.name;

    let copy = {...coupon};
    copy[name] = text;
    setCoupon(copy);
  }

  function saveCoupon() {
    console.log(coupon);
    // save the coupon to the allCoupons list
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);

    // TODO: send the coupon to the API
  }

  function saveProduct() {
    console.log(product);
    let copy = [...allProducts]
    copy.push(product);
    setAllProducts(copy);
  }

  return (
    <div className="admin page">
      

      <div className="parent">
        <section className="products">
          <h3>Register Products</h3>

          <div>
            <label className="form-label"><i className="fa-solid fa-pen"></i> Title</label>
            <input onChange={handleProductForm} name="title" type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label"><i className="fa-regular fa-folder-open"></i> Category</label>
            <input onChange={handleProductForm} name="category" type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label"><i className="fa-solid fa-image"></i> Image</label>
            <input onChange={handleProductForm} name="image" type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label"><i className="fa-solid fa-sack-dollar"></i> Price</label>
            <input onChange={handleProductForm} name="price" type="text" className="form-control" />
          </div>

          <div>
            <button onClick={saveProduct} className="btn btn-primary">Save Product</button>
          </div>

          {allProducts.map(prod =>
              <div key={prod.title} className="product-item">
                <img src={"/images/" + prod.image} alt="" />
                <label className="lbl-title">{prod.title}</label>
                <label className="lbl-price">${prod.price}</label>
              </div>
            )}

        </section>

        <section className="coupons">

          <h3>Black Friday Sale</h3>

          <div>
            <label className="form-label"><i className="fa-solid fa-tag"></i> Code</label>
            <input onChange={handleCouponForm} name="code" type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label"><i className="fa-solid fa-percent"></i> Discount</label>
            <input onChange={handleCouponForm} name="discount" type="text" className="form-control" />
          </div>

          <div>
            <button onClick={saveCoupon} className="btn btn-primary">Save Coupon</button>
          </div>

          {allCoupons.map(coupon => 
            <div key={coupon.code} className="couponcode"> 
              <label>{coupon.code} </label> 
              <label>{coupon.discount} </label> 
            </div>)}

        </section>
      </div>
    </div>
  );
}

export default Admin;