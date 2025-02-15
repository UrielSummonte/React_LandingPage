import React from "react";
import { useState } from "react";
import { List, X } from "react-bootstrap-icons";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#" },
    { name: "Historia", href: "#timeline" },
    { name: "Juegos", href: "#games" },
    { name: "Contacto", href: "#footer" },
  ];

  return (
    <nav className="bg-ac-dark bg-opacity-80 text-ac-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-trajan font-bold text-xl">
              Assassin's Creed
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ac-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <List className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:bg-ac-gold hover:text-ac-dark block px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default navbar;
