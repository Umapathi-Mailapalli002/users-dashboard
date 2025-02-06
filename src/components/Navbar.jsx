"use client"
import React from "react";
import {
  ModeToggle,
} from "./index";

function Navbar() {
  return (
    <nav className="w-full relative dark:bg-gray-900 shadow-md dark:shadow-gray-800 bg-gray-100 flex items-center h-16">
      <div className="absolute right-5">
        <ModeToggle textClass="hidden" />
      </div>
    </nav>
  );
}

export default Navbar;
