// src/App.tsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Works from "./components/Works";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "works":
        return <Works />;
      case "blogs":
        return <Blogs />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Navbar слева */}
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      
      {/* Основной контент */}
      <main className="flex-1 p-6 overflow-y-auto">
        {renderSection()}
      </main>
    </div>
  );
}
