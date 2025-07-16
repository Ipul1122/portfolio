'use client';
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
const [darkMode, setDarkMode] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleDark = () => {
    setDarkMode(!darkMode);
    // Integrasi tema bisa disesuaikan dengan tailwind.config.js (dark mode class)
    document.documentElement.classList.toggle('dark');
};

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

const closeMenu = () => {
    setIsMenuOpen(false);
};

return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 shadow-md">
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Kiri: Nama */}
        <div className="text-lg font-bold text-gray-800 dark:text-white">
        Muhammad Syaifulloh
        </div>

        {/* Tengah: Menu Navigasi - Desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-100 font-medium">
        <li><a href="#hero" className="hover:text-blue-500 transition">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
        <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500 transition">Kontak</a></li>
        </ul>

        {/* Kanan: Dark Mode Toggle & Hamburger Menu */}
        <div className="flex items-center space-x-2">
        {/* Dark Mode Toggle */}
        <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
            aria-label="Toggle Dark Mode"
        >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
        </button>

        {/* Hamburger Menu Button - Mobile */}
        <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
            aria-label="Toggle Menu"
        >
            {isMenuOpen ? <X className="w-5 h-5 text-gray-800 dark:text-white" /> : <Menu className="w-5 h-5 text-gray-800 dark:text-white" />}
        </button>
        </div>
    </nav>

    {/* Mobile Menu */}
    {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-gray-700">
        <ul className="flex flex-col space-y-2 p-4 text-gray-700 dark:text-gray-100 font-medium">
            <li>
            <a 
                href="#hero" 
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition rounded"
                onClick={closeMenu}
            >
                Home
            </a>
            </li>
            <li>
            <a 
                href="#about" 
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition rounded"
                onClick={closeMenu}
            >
                About
            </a>
            </li>
            <li>
            <a 
                href="#skills" 
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition rounded"
                onClick={closeMenu}
            >
                Skills
            </a>
            </li>
            <li>
            <a 
                href="#projects" 
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition rounded"
                onClick={closeMenu}
            >
                Projects
            </a>
            </li>
            <li>
            <a 
                href="#contact" 
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition rounded"
                onClick={closeMenu}
            >
                Kontak
            </a>
            </li>
        </ul>
        </div>
    )}
    </header>
);
};

export default Navbar;