import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "8px",
    color: isActive ? "white" : "#111",
    background: isActive ? "#0d6efd" : "transparent",
    fontWeight: 600,
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 18px",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 10,
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 800 }}>Flipkart Mini</div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <NavLink to="/" style={linkStyle}>Products</NavLink>
        <NavLink to="/cart" style={linkStyle}>
          Cart ({cartCount})
        </NavLink>
        <NavLink to="/login" style={linkStyle}>Login</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;