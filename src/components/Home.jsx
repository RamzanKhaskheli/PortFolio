import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // On mobile, show only Hero section
    // On desktop, show all sections for scrolling
    return (
        <>
            <section id="home"><Hero /></section>
            {!isMobile && (
                <>
                    <section id="about"><About /></section>
                    <section id="experience"><Experience /></section>
                    <section id="skills"><Skills /></section>
                    <section id="services"><Services /></section>
                    <section id="projects"><Projects /></section>
                    <section id="contact"><Contact /></section>
                </>
            )}
        </>
    );
};

export default Home;
