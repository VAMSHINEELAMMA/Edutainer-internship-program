
import React from "react";

function Product({ products, addToCart }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
          <h3>{p.title}</h3>
          <p>₹ {p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
