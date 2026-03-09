import React, { useEffect, useState } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 10)); // limit to 10 posts
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Delete Function
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      // Remove from UI after successful delete
      setPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== id)
      );
    } catch (err) {
      console.log("Error deleting:", err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Post List</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Body</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td style={tdStyle}>{post.id}</td>
              <td style={tdStyle}>{post.title}</td>
              <td style={tdStyle}>{post.body}</td>
              <td style={tdStyle}>
                <button
                  onClick={() => handleDelete(post.id)}
                  style={deleteBtn}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styling
const thStyle = {
  border: "1px solid black",
  padding: "10px",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid black",
  padding: "10px",
  verticalAlign: "top",
};

const deleteBtn = {
  backgroundColor: "yellow",
  border: "1px solid black",
  padding: "5px 10px",
  cursor: "pointer",
};

export default PostList;