'use client';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
const [darkMode, setDarkMode] = useState(false);

const toggleDark = () => {
    setDarkMode(!darkMode);
    // Integrasi tema bisa disesuaikan dengan tailwind.config.js (dark mode class)
    document.documentElement.classList.toggle('dark');
};

return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 shadow-md">
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Kiri: Nama */}
        <div className="text-lg font-bold text-gray-800 dark:text-white">
        Muhammad Syaifulloh
        </div>

        {/* Tengah: Menu Navigasi */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-100 font-medium">
        <li><a href="#hero" className="hover:text-blue-500 transition">Home</a></li>
        <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500 transition">Kontak</a></li>
        </ul>

        {/* Kanan: Ikon Tema */}
        <div className="flex items-center">
        <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
            aria-label="Toggle Dark Mode"
        >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
        </button>
        </div>
    </nav>
    </header>
);
};

export default Navbar;
