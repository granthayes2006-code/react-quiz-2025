import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold"></h2>
          <p className="text-sm opacity-80">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:opacity-70">🌐</a>
          <a href="#" className="hover:opacity-70">🐦</a>
          <a href="#" className="hover:opacity-70">📸</a>
        </div>
      </div>
    </footer>
  );
}
