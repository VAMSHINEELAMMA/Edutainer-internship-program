import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loginform() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!email || !pass) {
      alert("Enter email and password");
      return;
    }

    // after login go to home/products
    navigate("/");
  };

  return (
    <div style={{ padding: 18, maxWidth: 520, margin: "40px auto" }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ padding: 14, borderRadius: 12, border: "2px solid #111" }}
        />

        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          type="password"
          style={{ padding: 14, borderRadius: 12, border: "1px solid #ccc" }}
        />

        <button
          type="submit"
          style={{
            padding: 14,
            borderRadius: 12,
            border: "none",
            background: "#0d6efd",
            color: "white",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}