import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>hello i am home page</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
}

export default Home;
