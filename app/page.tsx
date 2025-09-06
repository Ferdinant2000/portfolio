"use client"

import Resume from '@/components/Resume'
import Navbar from '@/components/Navbar'
import About from '@/components/About'

import {
    Palette,
    Smartphone,
    Camera,
    Code
} from "lucide-react"

import { useState, useRef } from "react"

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState("about")
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const buttonRef = useRef<HTMLDivElement>(null)

    const handleNavigation = (section: string) => {
        setActiveSection(section)
    }

    const toggleTheme = () => {
        if (isAnimating) return

        setIsAnimating(true)

        const button = buttonRef.current
        if (button) {
            const rect = button.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const overlay = document.createElement("div")
            overlay.style.position = "fixed"
            overlay.style.left = centerX + "px"
            overlay.style.top = centerY + "px"
            overlay.style.width = "0px"
            overlay.style.height = "0px"
            overlay.style.borderRadius = "50%"
            overlay.style.background = isDarkMode
                ? "linear-gradient(135deg, #bfdbfe 0%, #c4b5fd 50%, #a5b4fc 100%)" // Light gradient when switching to light mode
                : "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)" // Dark gradient when switching to dark mode
            overlay.style.transform = "translate(-50%, -50%)"
            overlay.style.zIndex = "9999"
            overlay.style.pointerEvents = "none"
            overlay.style.animation = "expandContract 1s cubic-bezier(0.4, 0, 0.2, 1)"
            overlay.style.opacity = "1"

            const style = document.createElement("style")
            style.textContent = `
        @keyframes expandContract {
          0% {
            width: 0px;
            height: 0px;
          }
          50% {
            width: ${Math.sqrt(
                Math.pow(Math.max(centerX, window.innerWidth - centerX), 2) +
                Math.pow(Math.max(centerY, window.innerHeight - centerY), 2),
            ) * 2.5
                }px;
            height: ${Math.sqrt(
                    Math.pow(Math.max(centerX, window.innerWidth - centerX), 2) +
                    Math.pow(Math.max(centerY, window.innerHeight - centerY), 2),
                ) * 2.5
                }px;
          }
          100% {
            width: 0px;
            height: 0px;
          }
        }
      `
            document.head.appendChild(style)

            document.body.appendChild(overlay)

            setTimeout(() => {
                setIsDarkMode(!isDarkMode)
            }, 500)

            setTimeout(() => {
                document.body.removeChild(overlay)
                document.head.removeChild(style)
                setIsAnimating(false)
            }, 1000)
        }
    }

    // const { isDarkMode, toggleTheme, isAnimating, buttonRef } = useDarkTheme();


    return (
        <div
            className={`flex justify-center items-center w-full ${isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-300"} relative overflow-hidden`}
        >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-indigo-200/30 transform -skew-y-12"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-purple-200/20 via-transparent to-cyan-100/20 transform skew-y-12"></div>
                </div>
            <div
                className={`min-h-screen max-w-[1650px]   relative overflow-hidden`}
            >

                <div className="relative z-10 flex min-h-screen">
                    {/* Left Sidebar - Profile Card */}
                    < Resume />

                    {/* Main Content */}
                    <div className="flex-1 p-6 px-0">
                        <div
                            className={`p-6 h-fit bg-white/10 ${isDarkMode ? "bg-gray-800/30" : ""} backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl`}
                        >
                            <div
                                className={`p-4 h-fit bg-white/10 ${isDarkMode ? "bg-gray-800/30" : ""} backdrop-blur-xl border border-white/20 rounded-2xl`}
                            >
                                {/* About Section */}
                                <About isDarkMode={isDarkMode} />
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Navigation */}
                    <Navbar activeSection={activeSection} handleNavigation={handleNavigation} isDarkMode={isDarkMode} toggleTheme={toggleTheme} isAnimating={isAnimating} buttonRef={buttonRef} />
                </div>
            </div>
        </div>
    )
}
