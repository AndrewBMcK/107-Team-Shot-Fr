import { useState } from "react";
import "./admin.css";

function Admin() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    image: ""
  });

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
  }

  function saveProduct() {
    console.log(product);
  }

  return (
    <div className="admin">
      <h2>Store Administration</h2>

      <div className="parent">
        <section className="products">
          <h3>Register Products</h3>

          <div>
            <label className="form-label">Title</label>
            <input onChange={handleProductForm} name="title" type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label">Category</label>
            <input onChange={handleProductForm} name="category" type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label">Image</label>
            <input onChange={handleProductForm} name="image" type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label">Price</label>
            <input onChange={handleProductForm} name="price" type="text" className="form-control" />
          </div>

          <div>
            <button onClick={saveProduct} className="btn btn-primary">Save Product</button>
          </div>
        </section>

        <section className="coupons">

          <h3>Black Friday Sale</h3>

          <div>
            <label className="form-label">Code</label>
            <input onChange={handleCouponForm} name="code" type="text" className="form-control" />
          </div>

          <div>
            <label className="form-label">Discount</label>
            <input onChange={handleCouponForm} name="discount" type="text" className="form-control" />
          </div>

          <div>
            <button onClick={saveCoupon} className="btn btn-primary">Save Coupon</button>
          </div>


        </section>
      </div>
    </div>
  );
}

export default Admin;
