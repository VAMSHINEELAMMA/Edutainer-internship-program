
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div style={{ padding: 15, background: "#0d6efd", color: "white", display: "flex", justifyContent: "space-between" }}>
      <h2>Flipkart Mini</h2>
      <div>
        <Link to="/" style={{ margin: 10, color: "white" }}>Products</Link>
        <Link to="/cart" style={{ margin: 10, color: "white" }}>Cart ({cartCount})</Link>
        <Link to="/login" style={{ margin: 10, color: "white" }}>Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
