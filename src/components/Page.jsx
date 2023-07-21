import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from './Navbar';
import About from './About';

const Page = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("progress", {
            value: 100,
                ScrollTrigger: {
                scrub: 0.5,
            },
        });
    }, []);

    return (
        <div className="main">
            <progress max="100" value="0"></progress>
            <Navbar />
            <About />
        </div>
    );
};

export default Page;