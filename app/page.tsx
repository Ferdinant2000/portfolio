"use client"
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Phone,
    Mail,
    MapPin,
    Calendar,
    User,
    FileText,
    Briefcase,
    BookOpen,
    MessageSquare,
    Palette,
    Smartphone,
    Camera,
    Code,
    Sun,
    Moon,
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
                <div className="w-80 p-6">
                    <div
                        className={`p-6 bg-white/10 ${isDarkMode ? "bg-gray-800/30" : ""} backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl h-max`}
                    >
                        {/* Profile Image */}
                        <div className="flex mb-6 justify-center w-full h-full">
                            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-600 flex items-center justify-center">
                                <img
                                    src="/professional-headshot-man-in-blue-blazer.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.style.display = "none"
                                    }}
                                />
                                <User className="w-16 h-16 text-gray-400" />
                            </div>
                        </div>

                        {/* Name and Title */}
                        <div className="text-center mb-6">
                            <h1 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                Monalisa Ashley
                            </h1>
                            <p className={`font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>UI/UX Designer</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-blue-600/80 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700/80 transition-colors">
                                <Facebook className="w-5 h-5 text-white" />
                            </div>
                            <div className="w-10 h-10 bg-sky-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-600/80 transition-colors">
                                <Twitter className="w-5 h-5 text-white" />
                            </div>
                            <div className="w-10 h-10 bg-pink-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-pink-600/80 transition-colors">
                                <Instagram className="w-5 h-5 text-white" />
                            </div>
                            <div className="w-10 h-10 bg-blue-700/80 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-800/80 transition-colors">
                                <Linkedin className="w-5 h-5 text-white" />
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg">
                                <div className="w-8 h-8 bg-pink-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                    <Phone className="w-4 h-4 text-pink-600" />
                                </div>
                                <div>
                                    <p className={`text-xs uppercase tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
                                        Phone
                                    </p>
                                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>+123 456 7890</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg">
                                <div className="w-8 h-8 bg-blue-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                    <Mail className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <p className={`text-xs uppercase tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
                                        Email
                                    </p>
                                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Example@Mail.Com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg">
                                <div className="w-8 h-8 bg-red-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-red-600" />
                                </div>
                                <div>
                                    <p className={`text-xs uppercase tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
                                        Location
                                    </p>
                                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Hong Kong China</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg">
                                <div className="w-8 h-8 bg-purple-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                    <Calendar className="w-4 h-4 text-purple-600" />
                                </div>
                                <div>
                                    <p className={`text-xs uppercase tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>
                                        Birthday
                                    </p>
                                    <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>May 27, 1990</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
            </div>
        </div>
    )
}
