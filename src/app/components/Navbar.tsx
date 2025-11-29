"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div style={{ width: "100%", background: "#111" }}>
      <div style={{ padding: "1rem", textAlign: "center", fontWeight: "bold", fontSize: "1.7rem", letterSpacing: "0.05em", borderBottom: "1px solid #eee", background: "#fff", color: "#111" }}>
        大学生のもがき方
      </div>
      <nav style={{ padding: "1rem", background: "#222" }}>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <Link href="/">
              <span style={{ color: "#fff" }}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span style={{ color: "#fff" }}>About</span>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <span style={{ color: "#fff" }}>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link href="/maze">
              <span style={{ color: "#fff" }}>Maze</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
