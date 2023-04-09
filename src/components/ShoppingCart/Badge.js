import React from "react";
import { connect } from "react-redux";
function Badge({ products }) {
  return (
    <div className="m-2 ">
      <div
        style={{
          padding: "8px",
          backgroundColor: "#007BFF",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Total Products
        <span className="badge badge-light ml-2 ">{products.length}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state,
});

export default connect(mapStateToProps)(Badge);
