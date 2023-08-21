import React, { useState, useEffect, useRef} from 'react';
import Carousel from './Carousel';

const Skills = ({ darkMode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const headingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        if(headingRef.current) {
            observer.observe(headingRef.current);
        };

        return () => {
            if(headingRef.current) {
                observer.unobserve(headingRef.current);
            };
        };
    }, []);

    return (
        <>
        <section className="d-flex flex-column align-items-center justify-content-center pt-5">
            <h3 ref={headingRef} className={`heading ${ isVisible ? 'animate' : ''}`} id="skills" style={ darkMode ? {color:'#d3d3d3'} : {}}>Technical Skills</h3>            
        </section>
        <Carousel />
        </>
    );
};

export default Skills;