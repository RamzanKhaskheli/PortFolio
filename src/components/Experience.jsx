import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray('.experience-item');

        items.forEach((item, index) => {
            gsap.fromTo(item,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    }
                }
            );
        });
    }, { scope: containerRef });

    const experiences = [
        {
            title: "Senior PHP Developer",
            company: "UTECHO",
            period: "2023 - Current",
            description: "Responsible for handling various projects using core PHP, Socket.io and MySQL. My main project has been the VMS (Vehicle Management System), which has been a significant part of my experience.",
            type: "work"
        },
        {
            title: "Web Courses Instructor",
            company: "SERVING SOL",
            period: "2021 - Current",
            description: "Teaching and guiding students in various aspects of web development, including front-end and back-end technologies, programming languages, frameworks, and best practices.",
            type: "work"
        },
        {
            title: "Senior PHP DEVELOPER",
            company: "EVISION",
            period: "2022 - 2023",
            description: "Responsible for a range of tasks related to the development of software applications. I utilized my expertise in the CodeIgniter framework to develop software applications.",
            type: "work"
        }
    ];

    const education = [
        {
            title: "Bachelor of Computer Science",
            institution: "GCUF",
            period: "2018 - 2022",
            grade: "CGPA: 3.64",
            type: "education"
        },
        {
            title: "Intermediate of Computer Science",
            institution: "SUPERIOR COLLEGE",
            period: "2016 - 2018",
            grade: "Grade : B",
            type: "education"
        },
        {
            title: "Matriculation In Science",
            institution: "BLESSIGN HOME SCHOOL",
            period: "2011 - 2016",
            grade: "Grade : A+",
            type: "education"
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Resume</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                        Experience & Education
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 ml-4 pl-8 relative">
                            {experiences.map((exp, index) => (
                                <div key={index} className="experience-item relative group">
                                    {/* Timeline Dot */}
                                    <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-gray-900 bg-gray-300 dark:bg-gray-600 group-hover:bg-primary transition-colors duration-300"></span>

                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <div className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
                                            {exp.company}
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                        </div>

                        <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 ml-4 pl-8 relative">
                            {education.map((edu, index) => (
                                <div key={index} className="experience-item relative group">
                                    {/* Timeline Dot */}
                                    <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-gray-900 bg-gray-300 dark:bg-gray-600 group-hover:bg-primary transition-colors duration-300"></span>

                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.title}</h4>
                                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full whitespace-nowrap">
                                                {edu.period}
                                            </span>
                                        </div>
                                        <div className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wide">
                                            {edu.institution}
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                                            {edu.grade}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
