import React, { useState } from "react";

function UserInfo() {

  const [user] = useState({
    name: "Vamshi",
    age: 20,
    course: "AI and Data Science",
    college: "GSSSIETW"
  });

  return (
    <div style={{textAlign:"center"}}>
      <h1>User Information</h1>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Course: {user.course}</p>
      <p>College: {user.college}</p>

    </div>
  );
}

export default UserInfo;