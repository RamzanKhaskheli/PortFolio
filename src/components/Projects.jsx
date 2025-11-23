import React from 'react';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A fully functional e-commerce site built with React and Redux.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        link: '#',
    },
    {
        title: 'PopCornPlay (Movie App)',
        description: 'PopCornPlay is a modern movie app that lets users explore, search, and stream details of trending films and series.',
        image: 'https://plus.unsplash.com/premium_photo-1710324884987-7c67e9986713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://github.com/RamzanKhaskheli/PopcornPlay--1',
    },
    {
        title: 'Gemini CLone',
        description: 'Real-time weather application using OpenWeatherMap API.',
        image: 'https://images.unsplash.com/photo-1738107445847-b242992a50a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://gimini-clone-flax.vercel.app/',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                        Never compromise for portfolio quality
                    </h2>
                </div>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                            <div className="relative h-72 w-full overflow-hidden">
                                <img
                                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    src={project.image}
                                    alt={project.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-primary font-bold text-sm mb-2 uppercase tracking-wider">Web Application</span>
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center text-white font-semibold hover:text-primary transition-colors"
                                        target='_blank'
                                    >
                                        View Project
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
