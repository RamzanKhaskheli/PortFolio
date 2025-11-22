import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SiReact, SiNodedotjs } from 'react-icons/si';
import profileImage from '../assets/ramzan.png';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Text Animations
        tl.from('.hero-badge', {
            y: -20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        })
            .from('.hero-title', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.3")
            .from('.hero-desc', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.5")
            .from('.hero-btn', {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.5");

        // Image Animation
        gsap.from(imageRef.current, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "elastic.out(1, 0.7)",
            delay: 0.2
        });

        // Floating Icons Animation
        gsap.to('.floating-icon', {
            y: -15,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: {
                each: 0.5,
                from: "random"
            }
        });

    }, { scope: containerRef });

    return (
        <section id="home" className="relative bg-slate-300 dark:bg-gray-900 overflow-hidden h-screen flex items-center transition-colors duration-300" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-8 lg:gap-20">

                    {/* Text Section (Left on Desktop) */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left" ref={textRef}>
                        <span className="hero-badge inline-block py-1 px-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-primary text-sm sm:text-base font-semibold tracking-wide mb-3 sm:mb-4">
                            HELLO I'M
                        </span>
                        <h1 className="hero-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3 sm:mb-4">
                            Muhammad <span className="text-primary">Ramzan!</span>
                        </h1>
                        <h2 className="hero-title text-lg sm:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                            Full Stack Developer | <span className="text-primary">React</span> | <span className="text-blue-600 dark:text-blue-400">Tailwind</span>
                        </h2>
                        <p className="hero-desc text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Harnessing the power of technology to propel businesses to new heights through dynamic and forward-looking web development.
                        </p>

                        <div className="flex flex-col gap-4 items-center lg:items-start">
                            <Link
                                to="/about"
                                className="px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg rounded-full bg-orange-600 text-white border-2 border-orange-600 font-bold hover:bg-transparent hover:text-orange-600 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                About Me
                            </Link>

                            <div className="hero-btn flex flex-row items-center gap-4">
                                <span className="text-base sm:text-lg text-gray-900 dark:text-white font-semibold">Follow Me:</span>
                                <div className="flex gap-4">
                                    <a href="https://github.com/RamzanKhaskheli" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Section (Right on Desktop) */}
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-2 flex justify-center lg:justify-end" ref={imageRef}>
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px]">
                            {/* Blob Background */}
                            <div className="absolute top-0 left-0 w-full h-full bg-orange-100 dark:bg-orange-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-70 animate-blob"></div>
                            <div className="absolute top-0 right-0 w-full h-full bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>

                            {/* Main Image */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl bg-gray-300 dark:bg-gray-700">
                                <img
                                    src={profileImage}
                                    alt="Muhammad Ramzan"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Floating Icons */}
                            <div className="floating-icon absolute top-6 sm:top-10 -left-3 sm:-left-4 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center">
                                <SiReact className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500" />
                            </div>
                            <div className="floating-icon absolute bottom-12 sm:bottom-20 -right-3 sm:-right-4 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center">
                                <SiNodedotjs className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
