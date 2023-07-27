import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);   
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, images.length]);

    const handleImageHover = () => {
        setIsPaused((prevPaused) => !prevPaused);
    };

    return (
        <div style={{position: 'relative'}} onMouseEnter={handleImageHover} onMouseLeave={handleImageHover} >
            {images.map((image, index) => (
                <img key="index" 
                 className={`project-pic ${ index === currentIndex ? 'active' : 'hidden'}`} 
                 src={image} alt={`project ${index}`}          
                />
            ))}
        </div>
    );
};

export default Slideshow;