import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed right-2 top-1/2 -translate-y-1/2 z-50 p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
            aria-label="Toggle Dark Mode"
        >
            {theme === 'light' ? (
                <FaMoon className="w-6 h-6" />
            ) : (
                <FaSun className="w-6 h-6" />
            )}
        </button>
    );
};

export default ThemeToggle;
