"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div style={{ width: "100%", background: "#fff" }}>
      <div style={{ padding: "1rem", textAlign: "center", fontWeight: "bold", fontSize: "1.7rem", letterSpacing: "0.05em", borderBottom: "1px solid #eee" }}>
        EfAlのブログ
      </div>
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
    </div>
  );
};

export default Navbar;
