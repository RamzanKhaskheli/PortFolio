import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Web Development",
        description: "Creating and building web application/admin panels from scratch using React, Node, and modern frameworks. Ensuring responsive and cross-browser compatibility.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    },
    {
        title: "Front-End Development",
        description: "Developing the client-side interface with a focus on UI/UX. Translating design mockups into responsive, interactive, and pixel-perfect code using Tailwind CSS and React.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Back-End Development",
        description: "Building robust server-side logic, API integration, and database management using Node.js, Express, and MongoDB/SQL to ensure seamless data flow.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        )
    },
    {
        title: "24/7 Support",
        description: "Providing continuous assistance for server-related problems, coding issues, or functionality bugs. Ensuring your website functions optimally at all times.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    },
    {
        title: "E-commerce Development",
        description: "Building secure and scalable online stores with shopping cart functionality, product catalogs, and payment gateway integration.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        )
    },
    {
        title: "Website Maintenance",
        description: "Ongoing support, security updates, and performance optimization to keep your website secure, fast, and up-to-date with the latest web standards.",
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    }
];

const Services = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.service-card');

        gsap.fromTo(cards,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Services</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                        What can I do for you?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {services.map((service, index) => (
                        <div key={index} className="service-card bg-white dark:bg-gray-800 rounded-none p-0 shadow-sm hover:shadow-xl transition-all duration-300 group border-none w-full max-w-md md:max-w-none min-h-[480px] flex flex-col relative overflow-hidden">

                            {/* Card Content Container */}
                            <div className="p-10 pt-0 flex flex-col h-full relative z-10">
                                {/* Decorative Strip & Icon Container */}
                                <div className="relative mb-6">
                                    {/* Light Colored Strip */}
                                    <div className={`absolute top-0 left-8 w-16 h-24 -mt-0 ${index === 0 ? 'bg-emerald-100 dark:bg-emerald-900/70' :
                                        index === 1 ? 'bg-orange-100 dark:bg-orange-900/70' :
                                            index === 2 ? 'bg-blue-100 dark:bg-blue-900/70' :
                                                index === 3 ? 'bg-purple-100 dark:bg-purple-900/70' :
                                                    index === 4 ? 'bg-pink-100 dark:bg-pink-900/70' :
                                                        'bg-indigo-100 dark:bg-indigo-900/70'
                                        }`}></div>

                                    {/* Icon Circle */}
                                    <div className={`relative top-10 w-20 h-20 rounded-full flex items-center justify-center shadow-lg mx-6 ${index === 0 ? 'bg-emerald-400' :
                                        index === 1 ? 'bg-orange-500' :
                                            index === 2 ? 'bg-blue-600' :
                                                index === 3 ? 'bg-purple-500' :
                                                    index === 4 ? 'bg-pink-500' :
                                                        'bg-indigo-500'
                                        }`}>
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-justify text-base">
                                    {service.description}
                                </p>

                                {/* Read More Link */}
                                <div className="mt-auto">
                                    <a href="#" className={`inline-flex items-center font-bold tracking-wide transition-all duration-300 ${index === 0 ? 'text-emerald-400' :
                                        index === 1 ? 'text-orange-500' :
                                            index === 2 ? 'text-blue-600' :
                                                index === 3 ? 'text-purple-500' :
                                                    index === 4 ? 'text-pink-500' :
                                                        'text-indigo-500'
                                        }`}>
                                        <span className="w-2 h-2 mr-2 bg-current"></span>
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
