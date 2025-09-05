// src/components/Navbar.tsx
import React from "react";
import { User, FileText, Briefcase, BookOpen, MessageSquare, Moon, Sun } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  handleNavigation: (section: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  isAnimating: boolean;
  buttonRef: React.RefObject<HTMLDivElement>;
}
const Navbar: React.FC<NavbarProps> = ({ activeSection, handleNavigation, isDarkMode, toggleTheme, isAnimating, buttonRef }) => {
  return (
    <div className="p-6 flex items-stretch">
      <div className="flex flex-col items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 h-max w-max py-4 gap-3 pt-0">
        <div
          ref={buttonRef}
          onClick={toggleTheme}
          className={`w-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-b-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 mb-0 h-6 ${isAnimating ? "pointer-events-none" : ""}`}
        >
          {isDarkMode ? <Moon className="w-5 h-5 text-blue-400" /> : <Sun className="w-5 h-5 text-yellow-500" />}
        </div>

        <div
          onClick={() => handleNavigation("about")}
          className={`flex flex-col items-center cursor-pointer transition-all gap-1.5 ${activeSection === "about" ? "opacity-100" : "opacity-70 hover:opacity-100"
            }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border transition-colors ${activeSection === "about"
                ? "bg-blue-600/80 backdrop-blur-sm border-blue-500/30"
                : "bg-gray-100/60 backdrop-blur-sm border-white/20 hover:bg-gray-200/60"
              }`}
          >
            <User className={`w-5 h-5 ${activeSection === "about" ? "text-white" : "text-gray-600"}`} />
          </div>
          <p className={`text-xs font-medium ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>About</p>
        </div>

        <div
          onClick={() => handleNavigation("resume")}
          className={`flex flex-col items-center cursor-pointer transition-all gap-1.5 ${activeSection === "resume" ? "opacity-100" : "opacity-70 hover:opacity-100"
            }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border transition-colors ${activeSection === "resume"
                ? "bg-blue-600/80 backdrop-blur-sm border-blue-500/30"
                : "bg-gray-100/60 backdrop-blur-sm border-white/20 hover:bg-gray-200/60"
              }`}
          >
            <FileText className={`w-5 h-5 ${activeSection === "resume" ? "text-white" : "text-gray-600"}`} />
          </div>
          <p className={`text-xs font-medium ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Resume</p>
        </div>

        <div
          onClick={() => handleNavigation("works")}
          className={`flex flex-col items-center cursor-pointer transition-all gap-1.5 ${activeSection === "works" ? "opacity-100" : "opacity-70 hover:opacity-100"
            }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border transition-colors ${activeSection === "works"
                ? "bg-blue-600/80 backdrop-blur-sm border-blue-500/30"
                : "bg-gray-100/60 backdrop-blur-sm border-white/20 hover:bg-gray-200/60"
              }`}
          >
            <Briefcase className={`w-5 h-5 ${activeSection === "works" ? "text-white" : "text-gray-600"}`} />
          </div>
          <p className={`text-xs font-medium ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Works</p>
        </div>

        <div
          onClick={() => handleNavigation("blogs")}
          className={`flex flex-col items-center cursor-pointer transition-all gap-1.5 ${activeSection === "blogs" ? "opacity-100" : "opacity-70 hover:opacity-100"
            }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border transition-colors ${activeSection === "blogs"
                ? "bg-blue-600/80 backdrop-blur-sm border-blue-500/30"
                : "bg-gray-100/60 backdrop-blur-sm border-white/20 hover:bg-gray-200/60"
              }`}
          >
            <BookOpen className={`w-5 h-5 ${activeSection === "blogs" ? "text-white" : "text-gray-600"}`} />
          </div>
          <p className={`text-xs font-medium ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Blogs</p>
        </div>

        <div
          onClick={() => handleNavigation("contact")}
          className={`flex flex-col items-center cursor-pointer transition-all gap-1.5 ${activeSection === "contact" ? "opacity-100" : "opacity-70 hover:opacity-100"
            }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border transition-colors ${activeSection === "contact"
                ? "bg-blue-600/80 backdrop-blur-sm border-blue-500/30"
                : "bg-gray-100/60 backdrop-blur-sm border-white/20 hover:bg-gray-200/60"
              }`}
          >
            <MessageSquare className={`w-5 h-5 ${activeSection === "contact" ? "text-white" : "text-gray-600"}`} />
          </div>
          <p className={`text-xs font-medium ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
