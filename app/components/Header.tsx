'use client';
import React from 'react';

const Header = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    function toggleMenu() {
        const menu = document.getElementById('mobile-menu')!;
        menu.classList.toggle('hidden');
    }

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="relative">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-600">Jishnu</h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden sm:flex space-x-6 font-medium text-gray-700">
                    {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="hover:text-blue-600 transition-colors duration-200"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className="sm:hidden hidden flex flex-col items-center bg-white shadow-inner py-4 px-6 space-y-4 transition-all duration-300"
            >
                {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                    <button
                        key={item}
                        onClick={() => {
                            scrollToSection(item);
                            toggleMenu();
                        }}
                        className="text-gray-700 hover:text-blue-600 text-lg font-medium transition"
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                ))}
            </div>
        </header>
    );
};

export default Header;
