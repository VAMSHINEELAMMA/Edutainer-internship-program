import React from "react";

function Shopping({ cart, removeFromCart, decreaseQty, addToCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ padding: 18 }}>
      <h2 style={{ marginBottom: 10 }}>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Go to Products and add items 🙂</p>
      ) : (
        <>
          <div style={{ display: "grid", gap: 12 }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: 12,
                  padding: 12,
                  background: "white",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: 90, height: 70, borderRadius: 10, objectFit: "cover" }}
                />

                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0 }}>{item.title}</h3>
                  <p style={{ margin: "6px 0", fontWeight: 700 }}>
                    ₹ {item.price} × {item.qty} = ₹ {item.price * item.qty}
                  </p>

                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      onClick={() => decreaseQty(item.id)}
                      style={{ padding: "6px 10px", borderRadius: 8, cursor: "pointer" }}
                    >
                      -
                    </button>

                    <button
                      onClick={() => addToCart(item)}
                      style={{ padding: "6px 10px", borderRadius: 8, cursor: "pointer" }}
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        padding: "6px 10px",
                        borderRadius: 8,
                        cursor: "pointer",
                        background: "#dc3545",
                        border: "none",
                        color: "white",
                        fontWeight: 700,
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: 16 }}>Total: ₹ {total}</h3>

          <button
            style={{
              padding: 12,
              border: "none",
              borderRadius: 10,
              background: "green",
              color: "white",
              fontWeight: 800,
              cursor: "pointer",
              marginTop: 10,
            }}
            onClick={() => alert("Checkout feature next 🙂")}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Shopping;