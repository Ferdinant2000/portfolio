"use client";
import { Palette, Smartphone, Camera, Code } from "lucide-react";

export default function About({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <div
            className={`p-8 h-full bg-white/10 ${isDarkMode ? "bg-gray-800/30" : ""
                } backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl px-6 py-6`}
        >
            {/* About Section */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                    <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        About
                    </h2>
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
                    <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        What I Do!
                    </h2>
                    <div className="flex-1 border-t-2 border-dashed border-blue-600 rounded-full h-1"></div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {[
                        { icon: Palette, title: "UI/Ux Design", color: "purple" },
                        { icon: Smartphone, title: "App Development", color: "orange" },
                        { icon: Camera, title: "Photography", color: "pink" },
                        { icon: Code, title: "Web Development", color: "blue" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`p-6 bg-${item.color}-100/40 backdrop-blur-lg border border-${item.color}-300/50 rounded-xl hover:bg-${item.color}-100/50 transition-colors`}
                        >
                            <div
                                className={`w-12 h-12 bg-${item.color}-200/95 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4`}
                            >
                                <item.icon className={`w-6 h-6 text-${item.color}-700`} />
                            </div>
                            <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                {item.title}
                            </h3>
                            <p className={`leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
