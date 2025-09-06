'use client';
import { useDarkTheme } from "@/app/_darkTheme";
import { Calendar, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, User } from 'lucide-react';

import React from 'react';

const Resume: React.FC = () => {
    const { isDarkMode } = useDarkTheme();
    return (
        <div className="w-80 p-6">
            <div
                className={`p-6 bg-white/10 ${isDarkMode ? "bg-gray-800/30" : ""} backdrop-blur-xl border border-white/20 rounded-2xl h-max`}
            >
                {/* Profile Image */}
                <div className="flex mb-6 justify-center w-full h-full">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-600 flex items-center justify-center">
                        <img
                            // src="/images/Profile-Img.jpg"
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
                        Komolitdinov Firdavs
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
                        <div className="w-8 h-8 bg-emerald-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Phone className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                            <p className={`text-xs uppercase tracking-wide ${isDarkMode ? "text-gray-800" : "text-gray-100"}`}>
                                Phone
                            </p>
                            <a href="tel:+998772356434" className={`font-medium ${isDarkMode ? "text-gray-900" : "text-gray-100"}`}>+998 77-235-64-34</a>
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
                            <a href="email:firdavskomolitdinov@gmail.com" className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Example@Mail.Com</a>
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
    );
};

export default Resume;