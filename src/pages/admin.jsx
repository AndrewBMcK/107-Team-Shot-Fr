import "./admin.css";

function Admin() {
  return (
    <div className="admin">
      <h2>Store Administration</h2>

      <div className="parent">
        <section className="products"></section>
        <section className="coupons"></section>
      </div>
    </div>
  );
}

export default Admin;
