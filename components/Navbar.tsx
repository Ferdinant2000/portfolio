// src/components/Navbar.tsx
import React from "react";

interface NavbarProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveSection, activeSection }) => {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "works", label: "Works" },
    { id: "blogs", label: "Blogs" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-64 bg-gray-800 h-full p-6 flex flex-col gap-4">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`px-4 py-2 text-left rounded-lg transition ${
            activeSection === item.id ? "bg-blue-500" : "hover:bg-gray-700"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
