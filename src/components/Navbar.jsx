import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState('/');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Lock body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Scroll Spy - Track active section on desktop
    useEffect(() => {
        if (isMobile || location.pathname !== '/') return;

        const sections = document.querySelectorAll('section[id]');
        let currentActive = '/';

        const observer = new IntersectionObserver(
            (entries) => {
                // Find the section with the highest intersection ratio
                let maxRatio = 0;
                let activeEntry = null;

                entries.forEach((entry) => {
                    if (entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        activeEntry = entry;
                    }
                });

                if (activeEntry && activeEntry.isIntersecting) {
                    const sectionId = activeEntry.target.getAttribute('id');
                    // Map section IDs to paths
                    const pathMap = {
                        'home': '/',
                        'about': '/about',
                        'experience': '/experience',
                        'skills': '/skills',
                        'services': '/services',
                        'projects': '/projects',
                        'contact': '/contact'
                    };
                    const newActive = pathMap[sectionId] || '/';
                    if (newActive !== currentActive) {
                        currentActive = newActive;
                        setActiveSection(newActive);
                    }
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Multiple thresholds for better tracking
                rootMargin: '-100px 0px -60% 0px' // Adjust for navbar height and keep active longer
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [isMobile, location.pathname]);

    const isActive = (path) => {
        // On home page with desktop, use scroll-spy active section
        if (location.pathname === '/' && !isMobile) {
            return activeSection === path;
        }
        // Otherwise, use route-based active state
        return location.pathname === path;
    };

    const navLinks = [
        { name: 'Home', path: '/', hash: '#home' },
        { name: 'About', path: '/about', hash: '#about' },
        { name: 'Services', path: '/services', hash: '#services' },
        { name: 'Portfolio', path: '/projects', hash: '#projects' },
        { name: 'Contact', path: '/contact', hash: '#contact' },
    ];

    const handleNavClick = (e, hash) => {
        if (location.pathname === '/' && !isMobile) {
            e.preventDefault();
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'md:bg-white/95 md:dark:bg-gray-900/95 md:backdrop-blur-md md:shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white tracking-tighter">
                                <span className="text-primary">M</span>R
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation & CTA */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={(e) => handleNavClick(e, link.hash)}
                                    className={`text-base font-medium transition-colors duration-300 relative group ${isActive(link.path)
                                        ? 'text-primary dark:text-primary'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                </Link>
                            ))}
                        </div>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1c83MeopsLt2Q09_GT4pzAZCqCyEzoIKP"
                            className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-primary hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-transform transform hover:scale-105"
                        >
                            Download CV
                        </a>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
                    }`}
                id="mobile-menu"
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <span className="text-3xl font-bold text-gray-900 dark:text-white tracking-tighter">
                                <span className="text-primary">M</span>R
                            </span>
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Sidebar Navigation */}
                    <div className="flex-1 overflow-y-auto py-6 px-4">
                        <nav className="space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={(e) => handleNavClick(e, link.hash)}
                                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Download CV Button */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=1c83MeopsLt2Q09_GT4pzAZCqCyEzoIKP"
                            className="block w-full text-center mt-6 px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-orange-600 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
