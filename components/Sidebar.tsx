"use client";
import { User, Phone, Mail, MapPin, Calendar, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export default function Sidebar({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <div className="w-80 p-6">
            <div
                className={`p-6 bg-white/10 ${isDarkMode ? "bg-gray-800/30" : ""
                    } backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl h-max`}
            >
                {/* Аватар */}
                <div className="flex mb-6 justify-center w-full h-full">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-600 flex items-center justify-center">
                        <img
                            src="/professional-headshot-man-in-blue-blazer.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                            loading="eager"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                            }}
                        />
                        <User className="w-16 h-16 text-gray-400" />
                    </div>
                </div>

                {/* Имя */}
                <div className="text-center mb-6">
                    <h1 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Monalisa Ashley
                    </h1>
                    <p className={`font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                        UI/UX Designer
                    </p>
                </div>

                {/* Соцсети */}
                <div className="flex justify-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-blue-600/80 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700/80 transition-colors">
                        <FacebookIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-sky-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-600/80 transition-colors">
                        <TwitterIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-pink-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-pink-600/80 transition-colors">
                        <InstagramIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-blue-700/80 backdrop-blur-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-800/80 transition-colors">
                        <LinkedinIcon className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* Контакты */}
                <div className="space-y-4">
                    {[
                        { icon: Phone, label: "Phone", value: "+123 456 7890", color: "pink" },
                        { icon: Mail, label: "Email", value: "Example@Mail.Com", color: "blue" },
                        { icon: MapPin, label: "Location", value: "Hong Kong China", color: "red" },
                        { icon: Calendar, label: "Birthday", value: "May 27, 1990", color: "purple" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg"
                        >
                            <div
                                className={`w-8 h-8 bg-${item.color}-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center`}
                            >
                                <item.icon className={`w-4 h-4 text-${item.color}-600`} />
                            </div>
                            <div>
                                <p
                                    className={`text-xs uppercase tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-500"
                                        }`}
                                >
                                    {item.label}
                                </p>
                                <p
                                    className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}
                                >
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
