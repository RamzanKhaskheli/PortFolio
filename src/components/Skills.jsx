import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiPhp,
    SiMysql,
    SiGit
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.skill-card');

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

        const progressBars = gsap.utils.toArray('.progress-bar-fill');
        progressBars.forEach((bar) => {
            gsap.fromTo(bar,
                { width: 0 },
                {
                    width: bar.dataset.width,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: bar,
                        start: "top 90%",
                    }
                }
            );
        });
    }, { scope: containerRef });

    const skills = [
        {
            name: "HTML5",
            percentage: 95,
            color: "from-orange-400 to-orange-600",
            icon: <SiHtml5 className="w-10 h-10 text-orange-500" />
        },
        {
            name: "CSS3",
            percentage: 90,
            color: "from-blue-400 to-blue-600",
            icon: <SiCss3 className="w-10 h-10 text-blue-500" />
        },
        {
            name: "JavaScript",
            percentage: 85,
            color: "from-yellow-400 to-yellow-600",
            icon: <SiJavascript className="w-10 h-10 text-yellow-500" />
        },
        {
            name: "React.js",
            percentage: 90,
            color: "from-cyan-400 to-cyan-600",
            icon: <SiReact className="w-10 h-10 text-cyan-500" />
        },
        {
            name: "Node.js",
            percentage: 80,
            color: "from-green-400 to-green-600",
            icon: <SiNodedotjs className="w-10 h-10 text-green-500" />
        },
        {
            name: "PHP",
            percentage: 85,
            color: "from-indigo-400 to-indigo-600",
            icon: <SiPhp className="w-10 h-10 text-indigo-500" />
        },
        {
            name: "MySQL",
            percentage: 80,
            color: "from-blue-500 to-blue-700",
            icon: <SiMysql className="w-10 h-10 text-blue-600" />
        },
        {
            name: "Git",
            percentage: 90,
            color: "from-red-400 to-red-600",
            icon: <SiGit className="w-10 h-10 text-red-500" />
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Expertise</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                        My Technical Skills
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                        I have extensive experience working with a variety of technologies and tools.
                        Here's a breakdown of my proficiency in key areas.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 hover:-translate-y-2">
                            <div className="flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className="w-20 h-20 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>

                                {/* Skill Name */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {skill.name}
                                </h3>

                                {/* Progress Bar Container */}
                                <div className="w-full mt-4">
                                    <div className="flex justify-between text-sm font-semibold mb-2">
                                        <span className="text-gray-500 dark:text-gray-400">Proficiency</span>
                                        <span className="text-primary">{skill.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                        <div
                                            className={`progress-bar-fill h-2.5 rounded-full bg-gradient-to-r ${skill.color} group-hover:shadow-lg`}
                                            data-width={`${skill.percentage}%`}
                                            style={{ width: '0%' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
