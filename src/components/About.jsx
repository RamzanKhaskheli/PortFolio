import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image/Visual Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-orange-100 dark:bg-orange-900/30 rounded-xl transform rotate-3"></div>
                            <div className="absolute -inset-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl transform -rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Coding Workspace"
                                className="relative rounded-xl shadow-2xl w-full object-cover h-[500px]"
                            />

                            <div className="absolute bottom-8 right-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl max-w-xs">
                                <p className="text-4xl font-bold text-primary mb-2">3+</p>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">Years of Experience in Web Development</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">About Me</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                            Turning ideas into captivating digital experiences.
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                            I am a passionate Full Stack Developer with a strong foundation in modern web technologies.
                            My journey involves creating seamless, user-centric web applications that solve real-world problems.
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl border border-gray-100 dark:border-gray-600">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-600 pb-4">PERSONAL INFO:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-center sm:text-left">
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">First Name</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">Muhammad</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Last Name</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">Ramzan</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Address</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">Pakistan</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">+92 348 3282791</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">mramzankhaskheli7@gmail.com</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Freelance</span>
                                    <span className="font-semibold text-green-600 dark:text-green-400">Available</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Languages</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">Urdu, English</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Nationality</span>
                                    <span className="font-semibold text-gray-900 dark:text-white">Pakistani</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center lg:justify-start">
                            <a href="#" className="inline-flex items-center px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1">
                                Hire Me
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
