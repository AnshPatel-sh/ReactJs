import { Link } from "react-router-dom";
import React from "react";

export function TeamNav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/team/ansh"}>TeamMember ansh</Link>
          </li>{" "}
          <li>
            <Link to={"/team/jay"}>TeamMember jay</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
