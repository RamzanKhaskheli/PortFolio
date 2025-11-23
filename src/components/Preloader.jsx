import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
    useEffect(() => {
        // Check theme from localStorage or document class
        const isDark = localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
            document.documentElement.classList.contains('dark');

        const tl = gsap.timeline({
            onComplete: onComplete
        });

        // THEME BASED BACKGROUNDS
        // Dark: Dark gray/black gradient
        const darkBg = "repeating-linear-gradient(90deg, #111827, #111827 20px, #1f2937 40px, #111827 60px)";
        // Light: Light gray/white gradient
        const lightBg = "repeating-linear-gradient(90deg, #f3f4f6, #f3f4f6 20px, #e5e7eb 40px, #f3f4f6 60px)";

        const lineColor = isDark ? "#ffffff" : "#000000";
        const borderColor = isDark ? "#374151" : "#d1d5db";

        // Initial state
        gsap.set(".curtain", {
            width: "50%",
            height: "100%",
            position: "absolute",
            top: 0,
            background: isDark ? darkBg : lightBg
        });
        gsap.set(".left-curtain", { left: 0, borderRight: `2px solid ${borderColor}` });
        gsap.set(".right-curtain", { right: 0, borderLeft: `2px solid ${borderColor}` });

        gsap.set(".center-line", {
            width: "2px",
            height: "0%",
            backgroundColor: lineColor,
            position: "absolute",
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            zIndex: 70
        });

        // Animation Sequence
        tl.to(".center-line", {
            height: "50%",
            duration: 1,
            ease: "power2.inOut"
        })
            .to(".center-line", {
                opacity: 0,
                duration: 0.2
            })
            .to(".left-curtain", {
                x: "-100%",
                borderBottomRightRadius: "50%",
                duration: 1.5,
                ease: "power4.inOut"
            }, "curtain")
            .to(".right-curtain", {
                x: "100%",
                borderBottomLeftRadius: "50%",
                duration: 1.5,
                ease: "power4.inOut"
            }, "curtain");
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
            <div className="curtain left-curtain"></div>
            <div className="curtain right-curtain"></div>
            <div className="center-line"></div>
        </div>
    );
};

export default Preloader;
