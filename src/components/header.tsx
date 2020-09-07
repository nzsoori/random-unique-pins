import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">Generate</Link> - <Link to="/saved">Saved</Link>
    </div>
  );
}

export default Header;
