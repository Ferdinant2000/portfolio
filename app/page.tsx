"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Works from "@/components/Works";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import { useState } from "react";

export default function Home() {
    const [activeSection, setActiveSection] = useState("about");
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <main
            className={`min-h-screen ${isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-300"
                } relative overflow-hidden`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-indigo-200/30 transform -skew-y-12"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-200/20 via-transparent to-cyan-100/20 transform skew-y-12"></div>
            </div>

            <div className="relative z-10 flex min-h-screen">
                {/* Левая панель */}
                <Sidebar isDarkMode={isDarkMode} />

                {/* Контент */}
                <div className="flex-1 p-6 px-0">
                    {activeSection === "about" && <About isDarkMode={isDarkMode} />}
                    {activeSection === "resume" && <Resume isDarkMode={isDarkMode} />}
                    {activeSection === "works" && <Works isDarkMode={isDarkMode} />}
                    {activeSection === "blogs" && <Blogs isDarkMode={isDarkMode} />}
                    {activeSection === "contact" && <Contact isDarkMode={isDarkMode} />}
                </div>

                {/* Правая панель */}
                <Navbar
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />
            </div>
        </main>
    );
}
