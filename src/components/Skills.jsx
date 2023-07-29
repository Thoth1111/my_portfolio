import React from 'react';
import withIntersectionObserver from './withObserver';
import Carousel from './Carousel';

const Skills = ({ headingRef }) => {
    return (
        <>
        <section className="d-flex flex-column align-items-center justify-content-center pt-5">
            <h3 className="heading" ref={headingRef} id="skills">Technical Skills</h3>            
        </section>
        <Carousel />
        </>
    );
};

export default withIntersectionObserver(Skills);