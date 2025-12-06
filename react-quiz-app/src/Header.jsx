import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white py-4 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
        </h1>

        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>

        <button className="md:hidden text-2xl">
          ☰
        </button>
      </nav>
    </header>
  );
}
