"use client";

import { useState, useRef, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function Dropdown({ label, items,children }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hero-input relative inline-block text-right" ref={dropdownRef}>
{children}

      <button
        onClick={() => setOpen(() => !open)}
        className="px-1 flex items-center justify-between text-sm   w-full py-2 bg-white "
      >
        {label}
        {!open ?<FaAngleDown className=" size-4"/> : <FaAngleUp className=" size-4"/> }
        
      </button>

      {open && (
        <div className="hero-input-select">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className="hero-input-option"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
