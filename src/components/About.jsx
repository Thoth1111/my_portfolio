import React, { useState, useEffect, useRef } from 'react';
import Skills from './Skills';

const About = ({ darkMode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const headingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                }
            });
        });

        if(headingRef.current){
            observer.observe(headingRef.current);
        }

        return ()=> {
            if(headingRef.current){
                observer.unobserve(headingRef.current);
            }
        };
    }, []);

    return (
        <div className="mb-5">
            <section className="d-flex flex-column align-items-center justify-content-center">
                <h1 ref={headingRef} className={`heading ${ isVisible ? 'animate' : ''}`} id="about" style={darkMode ? { color: '#ffe2fe' } : {}}>About Me</h1>
                <article className="p-5">
                    I'm a certified Full-stack developer having transitioned from a brief career stint in aeronautical (avionics) engineering. I also have years of experience in customer service, technical support, and management.
                    Currently, I build products, features or websites. I also have a passion and love for game development that I'm actively pursuing, and I enjoy getting my hands dirty with some DIY crafts in my spare time.
                    Please take a moment to peruse through some of my past works, and skills.
                    I'd be happy to hear from you via the <a href="#contacts" className="text-decoration-underline" style={ darkMode ? {color: '#ffe2fe'} : {color: '#686868'}}>contact section</a>, if my endeavors resonate with your vision.
                </article>
            </section>
            <Skills darkMode={darkMode}/>
        </div>
    );
};

export default About;