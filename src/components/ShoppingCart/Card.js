import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { AddProduct } from "../Redux/action";
import { RemoveProduct } from "../Redux/action";

function Card({ products, AddProduct, RemoveProduct }) {
  const [item, setItem] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();
    if (item !== "") {
      await AddProduct({ name: item });
      setItem("");
    }
    setItem("");
  };

  return (
    <div className="m-2 text-center border p-3">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control"
          placeholder="Add product"
          aria-label="Username"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          aria-describedby="addon-wrapping"
        />
        <input
          type="submit"
          value="Add Product"
          className="btn btn-primary mt-3"
        />
      </form>
      <div style={{overflow: 'auto', height: '200px', marginTop: '10px'}}>
        {products.map((product) => (
          <div key={product.name} className="mt-1 border p-1 d-flex flex-row justify-content-between align-items-center ">
            <p className="m-1">{product.name}</p>
            <span
              className="m-1"
              style={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "100px",
                width: "20px",
                height: "20px",
                fontSize: "12px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              onClick={() => RemoveProduct(product.name)}
            >
              X
            </span>
          </div>
        ))}
        {products.length === 0 ? <span>You have no items</span> : ''}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state,
});

export default connect(mapStateToProps, { AddProduct, RemoveProduct })(Card);
