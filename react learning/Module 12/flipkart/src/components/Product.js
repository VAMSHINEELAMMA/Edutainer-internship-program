import React from "react";

function Product({ products, addToCart }) {
  return (
    <div style={{ padding: 18 }}>
      <h2 style={{ marginBottom: 10 }}>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 14,
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              background: "white",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ width: "100%", borderRadius: 10, marginBottom: 10 }}
            />
            <h3 style={{ margin: "6px 0" }}>{p.title}</h3>
            <p style={{ margin: "6px 0", fontWeight: 700 }}>₹ {p.price}</p>

            <button
              onClick={() => addToCart(p)}
              style={{
                width: "100%",
                padding: 10,
                border: "none",
                borderRadius: 10,
                background: "#0d6efd",
                color: "white",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;