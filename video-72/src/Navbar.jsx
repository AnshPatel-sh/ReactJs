import { Link } from "react-router-dom";
import React from "react";

export function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/team"}>Team</Link>
          </li>
        
        </ul>
      </nav>
    </>
  );
}
