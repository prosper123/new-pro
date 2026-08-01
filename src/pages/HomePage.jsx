import React from "react";
import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <Link to="/about">About</Link>
      <br />
      <br />
      <br />
      <Link to="/contact">Contact</Link>

      <br />
    </div>
  );
}

export default HomePage;
