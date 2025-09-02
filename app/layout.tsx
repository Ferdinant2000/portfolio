import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Firdavs Portfolio",
    description: "My personal portfolio built with Next.js 15",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-100 text-gray-900">
                {children}
            </body>
        </html>
    );
}
