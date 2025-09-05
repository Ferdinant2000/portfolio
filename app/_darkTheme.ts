"use client";
import { useState, useRef } from "react";

export function useDarkTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);

    const toggleTheme = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        const button = buttonRef.current;
        if (button) {
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.left = centerX + "px";
            overlay.style.top = centerY + "px";
            overlay.style.width = "0px";
            overlay.style.height = "0px";
            overlay.style.borderRadius = "50%";
            overlay.style.background = isDarkMode
                ? "linear-gradient(135deg, #bfdbfe 0%, #c4b5fd 50%, #a5b4fc 100%)"
                : "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)";
            overlay.style.transform = "translate(-50%, -50%)";
            overlay.style.zIndex = "9999";
            overlay.style.pointerEvents = "none";
            overlay.style.animation =
                "expandContract 1s cubic-bezier(0.4, 0, 0.2, 1)";
            overlay.style.opacity = "1";

            const style = document.createElement("style");
            style.textContent = `
        @keyframes expandContract {
          0% { width: 0px; height: 0px; }
          50% { width: ${Math.sqrt(
                Math.pow(Math.max(centerX, window.innerWidth - centerX), 2) +
                Math.pow(Math.max(centerY, window.innerHeight - centerY), 2)
            ) * 2.5}px;
          height: ${Math.sqrt(
                Math.pow(Math.max(centerX, window.innerWidth - centerX), 2) +
                Math.pow(Math.max(centerY, window.innerHeight - centerY), 2)
            ) * 2.5}px; }
          100% { width: 0px; height: 0px; }
        }
      `;
            document.head.appendChild(style);
            document.body.appendChild(overlay);

            setTimeout(() => {
                setIsDarkMode(!isDarkMode);
            }, 500);

            setTimeout(() => {
                document.body.removeChild(overlay);
                document.head.removeChild(style);
                setIsAnimating(false);
            }, 1000);
        }
    };

    return { isDarkMode, toggleTheme, isAnimating, buttonRef };
}
