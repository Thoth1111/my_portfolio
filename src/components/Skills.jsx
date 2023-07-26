import React from 'react';
import withIntersectionObserver from './withObserver';
import Carousel from './Carousel';

const Skills = ({ headingRef }) => {
    return (
        <>
        <section className="d-flex flex-column align-items-center justify-content-center pt-5">
            <h3 className="heading my-5" ref={headingRef} id="skills" style={{fontSize: 36}}>Technical Skills</h3>            
        </section>
        <Carousel />
        </>
    );
};

export default withIntersectionObserver(Skills);