import React, { useCallback } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const withIntersectionObserver = (WrappedComponent) => {
    const update = () => {
        const handleIntersect = useCallback((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-heading');
                    observer.unobserve(entry.target);
                }
            });
        }, []);

        const intersectionOptions = {
            threshold: 0.2,
        };

        const headingRef = useIntersectionObserver(handleIntersect, intersectionOptions);
        return <WrappedComponent headingRef={headingRef} />
    };
    return update;
};

export default withIntersectionObserver;