import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: onComplete
        });

        // Initial state
        gsap.set(".curtain", {
            width: "50%",
            height: "100%",
            position: "absolute",
            top: 0,
            background: "repeating-linear-gradient(90deg, #111827, #111827 20px, #1f2937 40px, #111827 60px)"
        });
        gsap.set(".left-curtain", { left: 0, borderRight: "2px solid #374151" });
        gsap.set(".right-curtain", { right: 0, borderLeft: "2px solid #374151" });
        gsap.set(".center-line", { width: "2px", height: "0%", backgroundColor: "white", position: "absolute", left: "50%", top: "50%", x: "-50%", y: "-50%", zIndex: 70 });

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
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
            {/* Curtains */}
            <div className="curtain left-curtain border-r border-gray-800"></div>
            <div className="curtain right-curtain border-l border-gray-800"></div>

            {/* Center Line */}
            <div className="center-line"></div>
        </div>
    );
};

export default Preloader;
