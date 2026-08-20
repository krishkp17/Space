import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navLink = [
    { id: 1, name: "About", path: "#about" },
    { id: 2, name: "Technology", path: "#technology" },
    { id: 3, name: "Galaxy", path: "#galaxy" },
    { id: 4, name: "Satellite", path: "#satellite" },
    
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="h-23 w-full  flex items-center justify-between md:px-10">
        
        <div  className="text-white font-serif text-4xl">
          <h1>Space</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLink.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className=" text-xl text-white hover:underline  hover:text-slate-400 transition-all duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        
        

        <button className="text-white border-2 border-gray-400 rounded-xl p-3 px-4  hover:bg-gray-500 transition-all">
            Explore
        </button>

          {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-green-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden  py-4">
          <ul className="flex flex-col items-center text-white  gap-6">
            {navLink.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="hover:text-blue-300 transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;