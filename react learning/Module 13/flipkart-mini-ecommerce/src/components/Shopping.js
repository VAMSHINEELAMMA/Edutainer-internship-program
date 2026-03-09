
import React from "react";

function Shopping({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              {item.title} - {item.qty} x ₹{item.price}
            </div>
          ))}
          <h3>Total: ₹ {total}</h3>
        </>
      )}
    </div>
  );
}

export default Shopping;
