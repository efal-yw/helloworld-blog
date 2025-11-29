"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <div className="py-4 text-center font-bold text-2xl tracking-wide border-b bg-white text-gray-900">
        大学生のもがき方
      </div>
      <nav className="py-3 bg-gray-800">
        <ul className="flex gap-4 list-none m-0 p-0 justify-center">
          <li>
            <Link href="/">
              <span className="text-white hover:underline">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-white hover:underline">About</span>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <span className="text-white hover:underline">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link href="/maze">
              <span className="text-white hover:underline">Maze</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
