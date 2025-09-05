"use client"

import Resume from '@/components/Resume'
import Navbar from '@/components/Navbar'

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
            className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-300"} relative overflow-hidden`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-indigo-200/30 transform -skew-y-12"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-200/20 via-transparent to-cyan-100/20 transform skew-y-12"></div>
            </div>

            <div className="relative z-10 flex min-h-screen">
                {/* Left Sidebar - Profile Card */}
                < Resume />

                {/* Main Content */}
                <div className="flex-1 p-6 px-0">
                    <div
                        className={`p-8 h-full bg-white/10 ${isDarkMode ? "bg-gray-800/30" : ""} backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl px-6 py-6`}
                    >
                        {/* About Section */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>About</h2>
                                <div className="flex-1 border-t-2 border-dashed border-blue-600 rounded-full h-0.5"></div>
                            </div>

                            <div className={`space-y-4 leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                                <p>
                                    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
                                    media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                                </p>
                                <p>
                                    My aim is to bring across your message and identity in the most creative way. I created web design for
                                    many famous brand companies.
                                </p>
                            </div>
                        </div>

                        {/* What I Do Section */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>What I Do!</h2>
                                <div className="flex-1 border-t-2 border-dashed border-blue-600 rounded-full h-1"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {/* UI/UX Design */}
                                <div className="p-6 bg-purple-100/45 backdrop-blur-lg border border-purple-300/60 rounded-xl hover:bg-purple-100/55 transition-colors shadow-md shadow-purple-100/30">
                                    <div className="w-12 h-12 bg-purple-200/90 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                        <Palette className="w-6 h-6 text-purple-700" />
                                    </div>
                                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                        UI/Ux Design
                                    </h3>
                                    <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.
                                    </p>
                                </div>

                                {/* App Development */}
                                <div className="p-6 bg-orange-100/40 backdrop-blur-lg border border-orange-300/50 rounded-xl hover:bg-orange-100/50 transition-colors">
                                    <div className="w-12 h-12 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 bg-[rgba(255,215,168,0.09)]">
                                        <Smartphone className="w-6 h-6 text-orange-700" />
                                    </div>
                                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                        App Development
                                    </h3>
                                    <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.
                                    </p>
                                </div>

                                {/* Photography */}
                                <div className="p-6 bg-pink-100/40 backdrop-blur-lg border border-pink-300/50 rounded-xl hover:bg-pink-100/50 transition-colors">
                                    <div className="w-12 h-12 bg-pink-200/95 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                        <Camera className="w-6 h-6 text-pink-700" />
                                    </div>
                                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                        Photography
                                    </h3>
                                    <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.
                                    </p>
                                </div>

                                {/* Web Development */}
                                <div className="p-6 bg-blue-100/40 backdrop-blur-lg border border-blue-300/50 rounded-xl hover:bg-blue-100/50 transition-colors">
                                    <div className="w-12 h-12 bg-blue-200/95 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                        <Code className="w-6 h-6 text-blue-700" />
                                    </div>
                                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                        Web Development
                                    </h3>
                                    <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Navigation */}
                <Navbar activeSection={activeSection} handleNavigation={handleNavigation} isDarkMode={isDarkMode} toggleTheme={toggleTheme} isAnimating={isAnimating} buttonRef={buttonRef} />
            </div>
        </div>
    )
}
