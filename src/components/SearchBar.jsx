import React from "react";
import {InputBox} from "./index";
import { FiSearch } from "react-icons/fi";

function SearchBar({ value, ref, className, placeholder, ...props }) {
  return (
    <div className="flex">
      <InputBox
        className={` ${className} focus:outline-none focus:ring-0`}
        type="search"
        value={value}
        ref={ref}
        onChange={(e) => e.target.value}
        placeholder={placeholder}
        {...props}
      />{" "}
      
    </div>
  );
}

export default SearchBar;
