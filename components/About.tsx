"use client";
import { Palette, Smartphone, Camera, Code } from "lucide-react";

export default function About({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <>
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

                <div className="flex gap-4">
                    {/* UI/UX Design */}
                    <div className="p-6 bg-purple-100/45 backdrop-blur-lg border border-purple-300/60 rounded-xl hover:bg-purple-100/55 transition-colors">
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
        </>
    );
}
