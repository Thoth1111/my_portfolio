import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isScaled, setIsScaled] = useState(false);

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

    const handleClick = () => {
        setIsScaled((prevScaled) => !prevScaled);
    }

    return (
        <div style={{position: 'relative'}} onMouseEnter={handleImageHover} onMouseLeave={handleImageHover} onClick={handleClick}>
            {images.map((image, index) => (
                <img key={index} 
                 className={`project-pic ${ index === currentIndex ? 'active' : 'hidden'} ${isScaled && isPaused ? 'scaled' : ''}`} 
                 src={image} alt={`project ${index}`}        
                />
            ))}
        </div>
    );
};

export default Slideshow;