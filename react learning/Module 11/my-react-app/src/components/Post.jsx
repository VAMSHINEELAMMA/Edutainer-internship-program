import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const customers = [
    "Alice Johnson",
    "Zuber Khan",
    "Tarun B",
    "Tarun M"
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Search customer name:</h1>

      <input
        type="text"
        placeholder="Enter name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      <ul>
        {filteredCustomers.map((customer, index) => (
          <li key={index} style={styles.listItem}>
            {customer}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#bdb76b",   // olive background like image
    minHeight: "100vh",
    padding: "40px"
  },
  heading: {
    fontSize: "40px",
    fontWeight: "300"
  },
  input: {
    padding: "8px",
    width: "200px",
    marginBottom: "15px"
  },
  listItem: {
    fontWeight: "bold",
    marginBottom: "5px"
  }
};

export default App;