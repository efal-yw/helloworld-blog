"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f5f5f5" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
