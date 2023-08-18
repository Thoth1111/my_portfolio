import React from 'react';
import Skills from './Skills';
import withIntersectionObserver from './withObserver';

const About = ({ headingRef, darkMode }) => {
    return (
        <div className="mb-5">
            <section className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="heading" ref={headingRef} id="about" style={darkMode ? { color: '#ffe2fe' } : {}}>About Me</h1>
                <article className="p-5">
                    I'm a certified Full-stack developer having transitioned from a brief career stint in aeronautical (avionics) engineering. I also have years of experience in customer service, technical support, and management.
                    Currently, I build products, features or websites. I also have a passion and love for game development that I'm actively pursuing, and I enjoy getting my hands dirty with some DIY crafts in my spare time.
                    Please take a moment to peruse through some of my past works, and skills.
                    I'd be happy to hear from you via the <a href="#contacts" className="text-decoration-underline" style={{color: '#686868'}}>contact section</a>, if my endeavors resonate with your vision.
                </article>
            </section>
            <Skills />
        </div>
    );
};

export default withIntersectionObserver(About);